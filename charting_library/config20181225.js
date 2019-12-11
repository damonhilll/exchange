function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

var Datafeeds = {};
var staticResolutioin = 15;
Datafeeds.WebsockFeed = function (url) {
    // var ROOT_URL = document.location.protocol + '//' + document.domain;
    // var port = window.location.port;
    // if (port != 80 && port != 443) {
    //     ROOT_URL += ':' + port;
    // }
     var ROOT_URL = "http://blackhorse.pro";
     // var ROOT_URL = "http://192.168.1.132:8080"
    this._datafeedURL = ROOT_URL;
    // this._datafeedURL = 'http://149.129.110.58';
};

Datafeeds.WebsockFeed.prototype.onReady = function (callback) {
    var config = {};
    config.exchanges = [];
    config.supported_resolutions = ["1", "5", "15", "30", "60", "240", "1D", "1W", "1M"];
    config.supports_group_request = false;
    config.supports_marks = false;
    config.supports_search = false;
    config.supports_time = true;
    config.supports_timescale_marks = false;

    setTimeout(function () {
        callback(config);
    }, 0);
};

Datafeeds.WebsockFeed.prototype.resolveSymbol = function (symbolName, onSymbolResolvedCallback, onResolveErrorCallback) {

    symbolName = location.hash.split('?')[0].substr(1) === '/tradecenter' ? location.hash.split('=')[1] : 'ethqc';
    if (symbolName == undefined || symbolName == '') {
        symbolName = "ethqc";
    } else {
        symbolName = symbolName.toLowerCase();
    }
    //symbolInfo配置很重要
    let data = {
        "symbol": symbolName,
        "has_daily": true,
        "ticker": symbolName,
        "name": symbolName,
        "description": symbolName,
        "type": "bitcoin",
        "exchange": "zzex.pro",
        "listed_exchange": "zzex.pro",
        "timezone": "Asia/Shanghai",
        "has_weekly_and_monthly": true,
        "has_intraday": true,
        "session": "24x7",
        "supported_resolutions": ["1", "5", "15", "30", "60", "1D", "1W", "1M"],
        "intraday_multipliers": ["1", "5", "15", "30", "60", "1D", "1W", "1M"],
        "has_fractional_volume": false,
        "full_name": "",
        "has_empty_bars": false,
        "exchange-traded": symbolName,
        "minmove2": 0,
        "minmov": 1,
        "pricescale": 10000,
        "data_status": "streaming",
        "force_session_rebuild": false,
        "has_no_volume": false
    }
    // 实时获取价格精度
    $.get(this._datafeedURL + "/m/allticker/" + Date.parse(new Date()),function (res) {
        if(res.state == 1) {
            
            var ticker = res.data[symbolName+"_ticker"];
            data.pricescale = Math.pow(10,ticker.pricePrecision);
        }
        if (symbolName.match(/USD|EUR|JPY|AUD|GBP|KRW|CNY/)) {
            data.pricescale = 100
        }
        setTimeout(function () {
            onSymbolResolvedCallback(data);
        }, 0);
    });
};

Datafeeds.WebsockFeed.prototype._send = function (url, params) {
    let request = url + params.symbol + '/' + params.type + '/' + params.size;
    return $.ajax({
        type: 'GET',
        url: request,
        dataType: 'json'
    });
};
// 时间周期格式转换
var getResolutionFormat = function (resolution) {
    let reg = /^[0-9]*$/;
    if (reg.test(resolution)) {
        resolution = resolution + "min";
    } else if (resolution.includes("D")) {
        resolution = "1day";
    } else if (resolution.includes('W')) {
        resolution = "1week";
    } else if (resolution.includes('M')) {
        resolution = "1mon";
    }
    return resolution;
};
Datafeeds.WebsockFeed.prototype.getBars = function (symbolInfo, resolution, from, to, onHistoryCallback, onErrorCallback, firstDataRequest) {
    if (from > 0 && (from + '').length > 10) {
        throw ['Got a JS time instead of Unix one.', from, to];
    }

    resolution = getResolutionFormat(resolution);

    //根据时间周期来加载
    if (firstDataRequest) {
        this._send(this._datafeedURL + '/m/kline/', {
                symbol: symbolInfo.name,
                type: resolution,
                size: '1000'
            })
            .done(function (res) {
                var data = res.data.lines;
                if (data.length > 1) {
                    var bars = data.map(el => {
                        return {
                            time: el[0],
                            close: el[1],
                            high: el[2],
                            low: el[3],
                            open: el[4],
                            volume: el[5]
                        }
                    });
                    bars.reverse();
                }

                onHistoryCallback(bars, {
                    noData: false
                });
            })
            .fail(function (reason) {
                onErrorCallback(reason);
            });

    } else {
        onHistoryCallback([], {
            noData: true
        });
    }

};


//订阅K线数据
Datafeeds.WebsockFeed.prototype.subscribeBars = function (symbolInfo, resolution, onRealtimeCallback, listenerGUID, onResetCacheNeededCallback) {

    let that = this;
    var hash = location.hash.split('?')[0].substr(1) === '/tradecenter';
    if (hash) {
        subscribeK();
        var loop = setInterval(function () {
            window.addEventListener("hashchange", function () {
                this.clearInterval(loop);
            });
            subscribeK();
        }, 3000);
    }

    function subscribeK() {
        resolution = getResolutionFormat(staticResolutioin);
        $.get(that._datafeedURL + '/m/kline/' + symbolInfo.symbol + '/' + resolution + '/1', function (res) {
            var data = res.data.lines;
            if (data.length > 0) {
                var bars = data.map(el => {
                    return {
                        time: el[0],
                        close: el[1],
                        high: el[2],
                        low: el[3],
                        open: el[4],
                        volume: el[5]
                    }
                });
                // 服务器返回的数据塞进去
                onRealtimeCallback(bars[0]);
            }
        });
    }


};


Datafeeds.WebsockFeed.prototype.searchSymbols = function (userInput, exchange, symbolType, onResultReadyCallback) {

};
//取消订阅K线数据
Datafeeds.WebsockFeed.prototype.unsubscribeBars = function (subscriberUID) {

};
//使图表更改其商品和周期。 新商品的数据到达后调用回调。
Datafeeds.WebsockFeed.prototype.setSymbol = function (symbol, interval, callback) {

};
TradingView.onready(function () {
    var widget = window.tvWidget = new TradingView.widget({
        fullscreen: false,
        symbol: 'ETHZC',
        interval: 15,
        width: "100%",
        height: "480px",
        container_id: "tv_chart_container",
        timezone: "Asia/Shanghai",
        // loading_screen: {
        //     backgroundColor: '#1f2431',
        //     foregroundColor: '#1f2431'
        // },
        datafeed: new Datafeeds.WebsockFeed(),
        locale: getParameterByName('lang') || "zh",
        library_path: "/charting_library/",
        hideSyMBOLsEARCH: true,
        drawings_access: {
            type: 'black',
            tools: [{
                name: "Regression Trend"
            }]
        },
        disabled_features: [
            'header_symbol_search',
            'header_symbol_search',
            "header_widget_dom_node",
            'source_selection_markers',
            "header_indicators",
            'adaptive_logo',
            'constraint_dialogs_movement',
            'display_market_status',
            'header_chart_type',
            'header_compare',
            'header_undo_redo',
            'header_screenshot',
            'volume_force_overlay',
            "symbol_search_hot_key",
            'property_pages',
            "header_saveload",
            'timeframes_toolbar',
            'symbol_info',
            'border_around_the_chart',
            'main_series_scale_menu',
            'star_some_intervals_by_default',
            'datasource_copypaste',
            'right_bar_stays_on_scroll',
            'context_menus',
            'go_to_date',
            'header_resolutions',
        ],
        enabled_features: [
            "study_templates",
            "hide_left_toolbar_by_default"
        ],
        time_frames: [{
            text: '1min',
            resolution: '1',
            description: '1分钟'
        }],
        charts_storage_url: 'http://saveload.tradingview.com',
        charts_storage_api_version: "1.1",
        custom_css_url: "/charting_library/static/css/cust.css",
        client_id: 'tradingview.com',
        theme: 'Light',
        user_id: 'public_user_id',
        overrides: {
            "mainSeriesProperties.style": 8,
            'paneProperties.background': '#fff', // 背景色
            'mainSeriesProperties.candleStyle.upColor': '#64ae74',
            'mainSeriesProperties.candleStyle.downColor': '#df5f61',
            // 烛心
            'mainSeriesProperties.candleStyle.drawWick': true,
            // 烛心颜色
            'mainSeriesProperties.candleStyle.wickUpColor': '#64ae74',
            'mainSeriesProperties.candleStyle.wickDownColor': '#df5f61',
            // 边框
            'mainSeriesProperties.candleStyle.drawBorder': true,
            'mainSeriesProperties.candleStyle.borderUpColor': '#64ae74',
            'mainSeriesProperties.candleStyle.borderDownColor': '#df5f61',
            // 网格
            'paneProperties.vertGridProperties.style': 0,
            'paneProperties.horzGridProperties.color': '#f0f0f0', //横行线
            'paneProperties.vertGridProperties.color': '#f0f0f0', //竖行线
            // 坐标轴和刻度标签颜色
            // 区域+字坐标颜色
            'scalesProperties.lineColor': '#8a8a8a',
            'scalesProperties.textColor': '#8a8a8a',
            //shezhizuigaok线柱距离top-border的高度
            'paneProperties.topMargin': 20,
            'paneProperties.bottomMargin': 5,
            "timeScale.barSpacing": 50,
            //收起左上角标题
            "paneProperties.legendProperties.showLegend": false,
            "symbolWatermarkProperties.transparency": 90,
        },
        toolbar_bg: '#fff',
    });
    widget.onChartReady(function () {
        //均线
        widget.chart().createStudy("Moving Average", true, true, [5], null, {
            "plot.color": "#b7248a"
        });
        widget.chart().createStudy("Moving Average", true, true, [10], null, {
            "plot.color": "#84aad5"
        });
        widget.chart().createStudy("Moving Average", true, true, [15], null, {
            "plot.color": "#55b263"
        });
        widget.chart().createStudy("Moving Average", true, true, [20], null, {
            "plot.color": "#965fc4"
        });
        // 创建按钮
        widget.createButton().attr('title', "1min").text("1min").on('click', function (e) {
            $(this).parents(".left").children().find(".button").removeAttr("style");
            staticResolutioin = 1;
            widget.chart().setResolution('1', function onReadyCallback() {});
        });
        widget.createButton().attr('title', "5min").text("5min").on('click', function (e) {
            $(this).parents(".left").children().find(".button").removeAttr("style");
            staticResolutioin = 5;
            widget.chart().setResolution('5', function onReadyCallback() {});
        });
        widget.createButton().attr('title', "15min").text("15min").on('click', function (e) {
            $(this).parents(".left").children().find(".button").removeAttr("style");
            staticResolutioin = 15;
            widget.chart().setResolution('15', function onReadyCallback() {});
        });
        widget.createButton().attr('title', "30min").text("30min").on('click', function (e) {
            $(this).parents(".left").children().find(".button").removeAttr("style");
            staticResolutioin = 30;
            widget.chart().setResolution('30', function onReadyCallback() {});
        });
        widget.createButton().attr('title', "1hour").text("1hour").on('click', function (e) {
            $(this).parents(".left").children().find(".button").removeAttr("style");
            staticResolutioin = 60;
            widget.chart().setResolution('60', function onReadyCallback() {});
        });
        widget.createButton().attr('title', "1day").text("1day").on('click', function (e) {
            $(this).parents(".left").children().find(".button").removeAttr("style");
            staticResolutioin = "D";
            widget.chart().setResolution('D', function onReadyCallback() {});
        });
        widget.createButton().attr('title', "1week").text("1week").on('click', function (e) {
            $(this).parents(".left").children().find(".button").removeAttr("style");
            staticResolutioin = "W";
            widget.chart().setResolution('W', function onReadyCallback() {});
        });
        widget.createButton().attr('title', "1mon").text("1mon").on('click', function (e) {
            $(this).parents(".left").children().find(".button").removeAttr("style");
            staticResolutioin = "M";
            widget.chart().setResolution('M', function onReadyCallback() {});
        });

    });
});