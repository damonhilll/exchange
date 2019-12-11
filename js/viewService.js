define([], function () {
    return {
        getTemplate: function (url) {
            return $.get(url);
        }
    };
});