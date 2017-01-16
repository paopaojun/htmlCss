/**
 * Created by Administrator on 2017/1/15.
 */
var util = window.util || {};

util.ajax = function (params) {
    var _url = 'http://120.132.3.51:8080/uci-pre/unionpay/';
    _url += params.url;

    $.ajax({
        url: _url,
        type: params.type || 'post',
        dataType: params.dataType || 'json',
        contentType: 'application/json',
        data: JSON.stringify(params.data || {}),
        success: function (data) {
            if (10000 === data.code) {
                console.log(JSON.stringify(data));
                params.callback(data.result, 100, 'success');
            } else {
                params.callback(data, data.code, data.message);
            }
        },
        error: function (e) {
            params.callback(e, 0, e.statusText || '服务器挂了');
        }
    });
};