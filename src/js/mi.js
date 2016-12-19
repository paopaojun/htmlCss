/**
 * Created by WXH on 2016/12/18.
 */


$(function () {
    var SHOP_DATA = window.shopData;
    var SHOP1_DATA = window.shop1Data;

    $.ajax('../json/hot.json',{
        contentType:'application/x-www-form-urlencoded',
        success:function (data) {
            setHot(data);
            console.log(data);
        }
    });
    setShop2(SHOP_DATA);
    setImgShop1(SHOP1_DATA);
});
function setImgShop1(ajaxData) {
    // var _otest = document.getElementsByClassName('main')[0];
    var _template = '';
    for (var i = 0; i < ajaxData.data.length; i++) {
        _template += '<span class="words1">'+ ajaxData.data[i]['words1'] +'</span>'
            +'<span class="words2">'+ ajaxData.data[i]['words2'] +'</span>'
            +'<span class="words3">'+ ajaxData.data[i]['words3'] +'</span>'
            +'<span class="words4">'+ ajaxData.data[i]['words4'] +'</span>';
    }
    // _otest.innerHTML = _tempate;
    $('.maintop').html(_template);


    function setHot(ajaxData) {
        // var _otest = document.getElementsByClassName('main')[0];
        var _template = '';
        for (var i = 0; i < ajaxData.data.length; i++) {
            _template += '<a href="shop4.html"><img src="' + ajaxData.data[i]['a'] + '"></a>';
        }
        // _otest.innerHTML = _tempate;
        $('.main').html(_template);
    }

    function setShop2(ajaxData) {
        // var _dom = document.getElementsByClassName('shopContent')[0];
        var _template = '';
        for (var i = 0; i < ajaxData.data.length; i++) {
            //@formatter:off
        _template+='<div class="mainmiddle">'
                         +'<div class="shop"><a href="shop4.html"><img class="imgshop" src="'+ajaxData.data[i]['src']+'"/></a></div>'
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

