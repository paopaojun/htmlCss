/**
 * Created by WXH on 2016/12/18.
 */

window.onload = function () {
    var HOT_DATA = window.hotData;
    console.log(HOT_DATA);
    setHot(HOT_DATA);
    var SHOP_DATA = window.shopData;
    setShop2(SHOP_DATA);
    //shop
    // var SHOP_DATA = window.shopData;
    // console.log(SHOP_DATA);
    // setShop(SHOP_DATA);
    // //words1
    // var WORD_DATA = window.words1Data;
    // console.log(WORD_DATA);
    // setWords1(WORD_DATA);
    // //words2
    // var WORD_DATA = window.words2Data;
    // console.log(WORD_DATA);
    // setWords2(WORD_DATA);
    // //words3
    // var WORD_DATA = window.words3Data;
    // console.log(WORD_DATA);
    // setWords3(WORD_DATA);
};
//words1
function setWords1(ajaxData) {
    for (var i = 0; i < ajaxData.data.length; i++) {
        var _stest = document.getElementsByClassName("words1")[i];
        var _tempate = "<span>" + ajaxData.data[i]['a'] + "</span>";
        _stest.innerHTML = _tempate;
    }
}
//words2
function setWords2(ajaxData) {
    for (var i = 0; i < ajaxData.data.length; i++) {
        var _stest = document.getElementsByClassName("words2")[i];
        var _tempate = "<span>" + ajaxData.data[i]['a'] + "</span>";
        _stest.innerHTML = _tempate;
    }
}
//words3
function setWords3(ajaxData) {
    for (var i = 0; i < ajaxData.data.length; i++) {
        var _stest = document.getElementsByClassName("words3")[i];
        var _tempate = "<span>" + ajaxData.data[i]['a'] + "</span>";
        _stest.innerHTML = _tempate;
    }
}

function setHot(ajaxData) {
    var _otest = document.getElementsByClassName('main')[0];
    var _tempate = '';
    for (var i = 0; i < ajaxData.data.length; i++) {
        _tempate += '<a href="detail.html"><img src="' + ajaxData.data[i]['a'] + '"></a>';
    }
    _otest.innerHTML = _tempate;
}

function setShop(ajaxData) {
    for (var i = 0; i < ajaxData.data.length; i++) {
        var _stest = document.getElementsByClassName("shop")[i];
        var _tempate = '<a href="detail.html"><img class="imgshop" src="' + ajaxData.data[i]['src'] + '"></a>';
        _stest.innerHTML = _tempate;
    }
}

function setShop2(ajaxData) {
    var _dom = document.getElementsByClassName('shopContent')[0];
    var _template = '';
    for (var i = 0; i < ajaxData.data.length; i++) {
        //@formatter:off
        _template+='<div class="mainmiddle">'
                         +'<div class="shop"><a href="detail.html"><img class="imgshop" src="'+ajaxData.data[i]['src']+'"/></a></div>'
                         +'<div class="words">'
                                +'<p class="words1"><span>'+ajaxData.data[i]['title']+'</span></p>'
                                +' <p class="words2"><span>'+ajaxData.data[i]['desc']+'</span></p>'
                                +'<p class="words3"><span>'+ajaxData.data[i]['price']+'</span></p>'
                         +'</div>'
                    +'</div>';
        //@formatter:on
    }
    _dom.innerHTML = _template;

}

