/**
 * Created by WXH on 2016/12/19.
 */
$(function () {
    $.ajax('../json/main1.json',{
        dataType: 'json',
        // contentType: 'application/json',
        success: function (data) {
            setImgShop1(data);
            console.log(data);
        }
    });
});
function setImgShop1(ajaxData) {
    // var _otest = document.getElementsByClassName('main')[0];
    //@formatter:off
    var _template = '<div class="maintop"><img class="shopimg" src="' + ajaxData.data['img'] + '"/></div>'
       +'<div class="mainmiddle">'
        +'<p class="words1">' + ajaxData.data['words1'] + '</p>'
    +'<p class="words2">' + ajaxData.data['words2'] + '</p>'
    +'<span class="words3">' + ajaxData.data['words3'] + '</span>'
    +'<span class="words4">' + ajaxData.data['words4'] + '</span><br/>'
    +'<span class="words5">' + ajaxData.data['words5'] +'</span>'
    +'<div class="buttonColor">'
        +'<form>'
        +'<input type="button" value="灰色" onclick="" name="color"/>'
        +'<input type="button" value="银色" onclick="" name="color"/>'
        +'<input type="button" value="金色" onclick="" name="color" />'
        +'</form>'
        +'</div>'
        +'<div class="buttonSize">'
        +'<input type="button" value="64GB" onclick="" name="size"/>'
        +'</div>'
        +'</div>'
    //@formatter:on
    $('.main').html(_template);
}