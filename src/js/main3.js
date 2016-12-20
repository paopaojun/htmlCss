/**
 * Created by WXH on 2016/12/20.
 */
/**
 * Created by WXH on 2016/12/20.
 */
$(function () {
    $.ajax({
        url: '../json/main3.json',
        type: 'get',
        dataType: 'json',
        // contentType: 'application/json',
        success: function (data) {
            setShop3(data);
            console.log(data);
        }
    });
});

function setShop3(ajaxData) {
    // var _otest = document.getElementsByClassName('main')[0];
    var _template = '';
    for (var i = 0; i < ajaxData.data.length; i++) {
        _template += '<div class="shop">'
            +'<div class="left"><img class="imgShop" src="' + ajaxData.data[i]['img']+'"/></div>'
            +'<div class="right">'
            +'<p class="shopName">' + ajaxData.data[i]['phoneName']+'</p>'
            +'<p class="price">' + ajaxData.data[i]['price']+'</p>'
            +'</div>'
            +'</div>';
    }
    // _otest.innerHTML = _tempate;
    $('.main').html(_template);
}