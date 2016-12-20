/**
 * Created by WXH on 2016/12/20.
 */
/**
 * Created by WXH on 2016/12/19.
 */
$(function () {
    $.ajax('../json/main9.json',{
        dataType: 'json',
        // contentType: 'application/json',
        success: function (data) {
            setImgShop9(data);
            console.log(data);
        }
    });
});
function setImgShop9(ajaxData) {
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
                 +'<span onclick="">' + ajaxData.data['color1'] +'</span><span onclick="">' + ajaxData.data['color2'] +'</span><span onclick="">' + ajaxData.data['color3'] +'</span>'
            +'</div>'
            +'<div class="buttonSize">'
                 +'<span onclick="">' + ajaxData.data['size1'] +'</span>'
             +'</div>'
        +'</div>';
    //@formatter:on
    $('.main').html(_template);
}