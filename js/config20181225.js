function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

var Datafeeds = {};
var staticResolutioin = 15;
Datafeeds.WebsockFeed = function (url) {
    var ROOT_URL = document.location.protocol + '//' + document.domain;
	var port = window.location.port;
    if (port != 80 && port != 443) {
        ROOT_URL += ':' + port;
    }
    this._datafeedURL = ROOT_URL;
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

Datafeeds.WebsockFeed.prototype.searchSymbols = function (userInput, exchange, symbolType, onResultReadyCallback) {

};
//取消订阅K线数据
Datafeeds.WebsockFeed.prototype.unsubscribeBars = function (subscriberUID) {

};
//使图表更改其商品和周期。 新商品的数据到达后调用回调。
Datafeeds.WebsockFeed.prototype.setSymbol = function (symbol, interval, callback) {

};