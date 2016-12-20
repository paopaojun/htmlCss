$(function () {
    $.ajax('../json/main2.json',{
        dataType: 'json',
        // contentType: 'application/json',
        success: function (data) {
            setImgShop2(data);
            console.log(data);
        }
    });
});
function  setImgShop2(ajaxData) {
    var _template = '<div class="maintop"><img class="shopimg" src="' + ajaxData.data['img'] + '"/></div>'
        +'<div class="mainmiddle">'
                +'<p class="words1">' + ajaxData.data['words1'] + '</p>'
                +'<p class="words2">' + ajaxData.data['words2'] + '</p>'
                +'<span class="words4">' + ajaxData.data['words4'] + '</span><br/>'
        +'<div class="buttonColor">'
                    +'<span onclick="">' + ajaxData.data['color1'] +'</span>'
        +'</div>';
        +'</div>';
    //@formatter:on
    $('.main').html(_template);
}
/**
 * Created by WXH on 2016/12/20.
 */