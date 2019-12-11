define([], function () {
    var ROOT_URL = document.location.protocol + '//' + document.domain;
    var port = window.location.port;
    if (port != 80 && port != 443) {
        ROOT_URL += ':' + port;
    }
	ROOT_URL = 'http://134.175.88.148:8080';
    var newsService = {
        getNewsBanner: function () {
            return $.get(ROOT_URL + '/n/news/banner');
        },
        getNewsList: function (id, page, pagesize) {
            return $.get(ROOT_URL + '/n/news/' + id + '/' + page + '/' + pagesize);
        },
        getNews: function (id) {
            return $.get(ROOT_URL + '/n/news/' + id);
        }
    }
    var marketService = {
        getAllTicker: function () {
            return $.get(ROOT_URL + '/m/allticker/' + Date.parse(new Date()));
        },
        getTicker: function (symbol) {
            return $.get(ROOT_URL + '/m/ticker/' + symbol);
        },
        getTimeStamp: function () {
            return $.get(ROOT_URL + '/m/timestamp');
        },
        favorite: function (pair) {
            var data = {
                "pair_dsp_name": pair
            }
            return $.ajax({
                type: 'POST',
                url: ROOT_URL + '/m/favorite',
                contentType: 'application/json; charset=utf-8',
                data: JSON.stringify(data),
                dataType: 'json'
            });
        },
        favoriteDel: function (pair) {
            var data = {
                "pair_dsp_name": pair
            }
            return $.ajax({
                type: 'POST',
                url: ROOT_URL + '/m/favorite/del',
                contentType: 'application/json; charset=utf-8',
                data: JSON.stringify(data),
                dataType: 'json'
            });
        },
        getFavorite: function () {

            return $.get(ROOT_URL + '/m/favorite/' + Date.parse(new Date()));
        },
        getSymbol: function () {
            return $.get(ROOT_URL + '/m/symbol');
        },
        getDepth: function (symbol) {
            return $.get(ROOT_URL + '/m/depth/' + symbol);
        },
        getSummary: function (symbol, type, size, allTicker, from) {
            return $.get(ROOT_URL + '/m/summary/' + symbol + '/' + type + '/' + size + '/' + allTicker + '/' + from + '/' + Date.parse(new Date()));
        },
        getTrade: function (symbol, size) {
            return $.get(ROOT_URL + '/m/trade/' + symbol + '/' + size);
        },
        getAreaCNY: function () {
            return $.get('http://47.75.255.158/market');
        },
        getCurrencyInfo: function (currency) {
            return $.get(ROOT_URL + '/m/currency/info/' + currency);
        }
    }
    var membershipService = {
        memberLogin: function (data) {
            return $.ajax({
                type: 'POST',
                url: ROOT_URL + '/m/memberLogin',
                contentType: 'application/json; charset=utf-8',
                data: JSON.stringify(data),
                dataType: 'json'
            });
        },
        getMember: function () {
            return $.get(ROOT_URL + '/m/member');
        },
        getMemberLogout: function () {
            return $.get(ROOT_URL + '/m/member/logout');
        },
        getAssetsLst: function () {
            return $.get(ROOT_URL + '/m/assetsLst/' + Date.parse(new Date()));
        },
        getLoginlog: function () {
            return $.get(ROOT_URL + '/m/loginlog');
        },
        authIdentity: function (data) {
            return $.ajax({
                type: 'POST',
                url: ROOT_URL + '/m/authIdentity',
                contentType: 'application/json; charset=utf-8',
                data: JSON.stringify(data),
                dataType: 'json'
            });
        },
        getAliOssPolicy: function () {
            return $.get(ROOT_URL + '/m/aliOssPolicy');
        },
        getAuthindentity: function () {
            return $.get(ROOT_URL + '/m/authindentity');
        },
        member: function (data) {
            return $.ajax({
                type: 'POST',
                url: ROOT_URL + '/m/member',
                contentType: 'application/json; charset=utf-8',
                data: JSON.stringify(data),
                dataType: 'json'
            });
        },
        isSetCoinPwd: function () {
            return $.get(ROOT_URL + '/m/isSetCoinPwd');
        },
        resetPwd: function (data) {
            return $.ajax({
                type: 'POST',
                url: ROOT_URL + '/m/resetPwd',
                contentType: 'application/json; charset=utf-8',
                data: JSON.stringify(data),
                dataType: 'json'
            });

        },
        setSecPwd: function (data) {
            return $.ajax({
                type: 'POST',
                url: ROOT_URL + '/m/setSecPwd',
                contentType: 'application/json; charset=utf-8',
                data: JSON.stringify(data),
                dataType: 'json'
            });
        },
        getIsSetCoinPwd: function () {
            return $.get(ROOT_URL + '/m/isSetCoinPwd');
        },
        apiToken: function (data) {
            return $.ajax({
                type: 'POST',
                url: ROOT_URL + '/m/apitoken',
                contentType: 'application/json; charset=utf-8',
                data: JSON.stringify(data),
                dataType: 'json'
            });
        },
        deleteApiToken: function (data) {
            return $.ajax({
                type: 'DELETE',
                url: ROOT_URL + '/m/apitoken',
                contentType: 'application/json; charset=utf-8',
                data: JSON.stringify(data),
                dataType: 'json'
            });
        },
        putApiToken: function (data) {
            return $.ajax({
                type: 'PUT',
                url: ROOT_URL + '/m/apitoken',
                contentType: 'application/json; charset=utf-8',
                data: JSON.stringify(data),
                dataType: 'json'
            });
        },
        getApiTokens: function () {
            return $.get(ROOT_URL + '/m/apitokens');
        },
        forgotV2: function (data) {
            return $.ajax({
                type: 'POST',
                url: ROOT_URL + '/m/forgotV2',
                contentType: 'application/json; charset=utf-8',
                data: JSON.stringify(data),
                dataType: 'json'
            });
        },
        getLockList: function (member_id) {
            return $.get(ROOT_URL + '/locked/lockrecharge/member_id/' + member_id);
        },
        getLockRelease: function (id) {
            return $.get(ROOT_URL + '/locked/currency/id/' + id);
        },
        lockTransfer: function (data) {
            return $.ajax({
                type: 'POST',
                url: ROOT_URL + '/locked/transfer',
                data: data
            });
        },
        getGtValidateCode: function () {
            return $.get(ROOT_URL + '/m/gtValidateCode');
        },
        getFriendlog: function (page) {
            return $.get(ROOT_URL + '/m/friendlog/' + page);
        },
        getRecommendAwards: function (page) {
            return $.get(ROOT_URL + '/m/recommend_awards/' + page);
        }
    }
    var accountService = {
        getAccountsI: function () {
            return $.get(ROOT_URL + '/a/accountsI');
        },
        saveWithdrawAddr: function (currency, addrlabel, addr, smscode) {
            var data = {
                "currency": currency,
                "addr_label": addrlabel,
                "addr": addr,
                "sms_code": smscode
            }
            return $.ajax({
                type: 'POST',
                url: ROOT_URL + '/a/saveWithdrawAddr',
                contentType: 'application/json; charset=utf-8',
                data: JSON.stringify(data),
                dataType: 'json'
            });
        },
        getKaptcha: function () {
            return $.get(ROOT_URL + '/m/kaptcha');
        },
        getMail: function (token, code, useraccount, type) {
            return $.get(ROOT_URL + '/m/mail/' + token + '/' + code + '/' + useraccount + '/' + type);
        },
        getAssetsRecharge: function (page) {
            return $.get(ROOT_URL + '/a/assetsRecharge/' + page + '/' + Date.parse(new Date()));
        },
        getAssetsWithDraw: function (page) {
            return $.get(ROOT_URL + '/a/assetsWithDraw/' + page + '/' + Date.parse(new Date()));
        },
        getWithdrawAddr: function (currency) {
            return $.get(ROOT_URL + '/a/withdrawAddr/' + currency + '/' + Date.parse(new Date()));
        },
        getAssetsRechargeAddr: function (currency) {
            return $.get(ROOT_URL + '/a/assetsRechargeAddr/' + currency + '/' + Date.parse(new Date()));
        },
        withdrawCreateI: function (data) {
            return $.ajax({
                type: 'POST',
                url: ROOT_URL + '/a/withdraw/createI',
                contentType: 'application/json; charset=utf-8',
                data: JSON.stringify(data),
                dataType: 'json'
            });
        },
        genCoinAddress: function (data) {
            return $.ajax({
                type: 'POST',
                url: ROOT_URL + '/a/genCoinAddress',
                contentType: 'application/json; charset=utf-8',
                data: JSON.stringify(data),
                dataType: 'json'
            });
        },
        delWithdrawAddr: function (data) {
            return $.ajax({
                type: 'POST',
                url: ROOT_URL + '/a/delWithdrawAddr',
                contentType: 'application/json; charset=utf-8',
                data: JSON.stringify(data),
                dataType: 'json'
            });
        }
    }
    var orderService = {
        getOrdersI: function (symbol, page, status) {
            return $.get(ROOT_URL + '/o/ordersI/' + symbol + '/' + page + '/' + status + '/' + Date.parse(new Date()));
        },
        orderCreate: function (data) {
            return $.ajax({
                type: 'POST',
                url: ROOT_URL + '/o/order/createI',
                contentType: 'application/json; charset=utf-8',
                data: JSON.stringify(data),
                dataType: 'json'
            });
        },
        orderCancel: function (id, no, symbol) {
            var data = {
                "id": id,
                "o_no": no,
                "symbol": symbol
            }
            return $.ajax({
                type: 'POST',
                url: ROOT_URL + '/o/order/cancelI',
                contentType: 'application/json; charset=utf-8',
                data: JSON.stringify(data),
                dataType: 'json'
            });
        },
        getTrades: function (symbol, page) {
            return $.get(ROOT_URL + '/o/tradesI/' + symbol + '/' + page + '/' + Date.parse(new Date()));
        },
    }
    var otcService = {
        getOtcSymbol: function () {
            return $.get(ROOT_URL + '/o/otc/symbol/' + Date.parse(new Date()));
        },
        getOtcAccountInfo: function () {
            return $.get(ROOT_URL + '/o/otc/account_info');
        },
        getOtcAdsList: function (base_currency, quote_currency, ad_type, page, pageSize) {
            return $.get(ROOT_URL + '/o/otc/ads/' + base_currency + '/' + quote_currency + '/' + ad_type + '/' + page + '/' + pageSize);
        },
        getOtcAdsDetail: function (id) {
            return $.get(ROOT_URL + '/o/otc/ads/' + id);
        },
        otcAddorder: function (data) {
            return $.ajax({
                type: 'POST',
                url: ROOT_URL + '/o/otc/addorder',
                contentType: 'application/json; charset=utf-8',
                data: JSON.stringify(data),
                dataType: 'json'
            });
        },
        getOtcorders: function (base_currency, quote_currency, page, pageSize, ad_type, status) {
            return $.get(ROOT_URL + '/o/otc/orders/' + base_currency + '/' + quote_currency + '/' + page + '/' + pageSize + '/' + ad_type + '/' + status + '/' + Date.parse(new Date()));
        },
        otcAccountInfo: function (data) {
            return $.ajax({
                type: 'POST',
                url: ROOT_URL + '/o/otc/account_info',
                contentType: 'application/json; charset=utf-8',
                data: JSON.stringify(data),
                dataType: 'json'
            });
        },
        getIsAuth: function () {
            return $.get(ROOT_URL + '/o/otc/is_auth');
        },
        getOtcAds: function (id) {
            return $.get(ROOT_URL + '/o/otc/ads/' + id);
        },
        confirmorder: function (data) {
            return $.ajax({
                type: 'POST',
                url: ROOT_URL + '/o/otc/confirmorder',
                contentType: 'application/json; charset=utf-8',
                data: JSON.stringify(data),
                dataType: 'json'
            });
        }
    }
    return {
        newsService: newsService,
        marketService: marketService,
        membershipService: membershipService,
        accountService: accountService,
        orderService: orderService,
        otcService: otcService
    }

});