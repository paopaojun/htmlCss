/**
 * Created by WXH on 2016/12/18.
 */


$(function () {
    $.ajax({
        url: '../json/shop.json',
        type: 'get',
        dataType: 'json',
        // contentType: 'application/json',
        success: function (data) {
            setShop2(data);
            console.log(data);
        }
    });
     $.ajax('../json/hot.json',{
        dataType: 'json',
        // contentType: 'application/json',
        success: function (data) {
            setHot(data);
            console.log(data);
        }
    });
});
/**
 * 调九个图
 * @param ajaxData
 */
function setHot(ajaxData) {
    // var _otest = document.getElementsByClassName('main')[0];
    var _template = '';
    for (var i = 0; i < ajaxData.data.length; i++) {
        _template += '<a href="' + ajaxData.data[i]['b'] + '"><img src="' + ajaxData.data[i]['a'] + '"></a>';
    }
    // _otest.innerHTML = _tempate;
    $('.main').html(_template);
}
/**
 * 调9个图后手机数量
 * @param ajaxData
 */
function setShop2(ajaxData) {
    // var _dom = document.getElementsByClassName('shopContent')[0];
    var _template = '';
    for (var i = 0; i < ajaxData.data.length; i++) {
        //@formatter:off
        _template+='<div class="mainmiddle">'
                         +'<div class="shop"><a href="main4.html"><img class="imgshop" src="'+ajaxData.data[i]['src']+'"/></a></div>'
                         +'<div class="words">'
                                +'<p class="words1"><span>'+ajaxData.data[i]['title']+'</span></p>'
                                +' <p class="words2"><span>'+ajaxData.data[i]['desc']+'</span></p>'
                                +'<p class="words3"><span>'+ajaxData.data[i]['price']+'</span></p>'
                         +'</div>'
                    +'</div>';
        //@formatter:on
    }
    $('.shopContent').html(_template);
}

