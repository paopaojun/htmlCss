/**
 * Created by Administrator on 2017/1/15.
 */
$(function () {
    $.ajax({
        url:'../json/liveOnline.json',
        type:'get',
        dataType:'json',
        success:function (data) {
            food(data);
        }
    });
});
function food(ajaxData) {
    // var _otest = document.getElementsByClassName('main')[0];
    var _template = '';
    for (var i = 0; i < ajaxData.data.length; i++) {
        if (i <= 8){
            _template += '<div class="box"><span>'+ajaxData.data[i].shopClass+'</span></div>';
        }
        else{
            _template += '<div class="box"><span>'+ajaxData.data[i].shopClass+'</span><span class="more"><img src="../images/liveOnline/more.png"/></span></div>';
        }
    }
    // _otest.innerHTML = _tempate;
    $('.food').html(_template);
}