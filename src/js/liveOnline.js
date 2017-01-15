/**
 * Created by Administrator on 2017/1/15.
 */
$(function () {
    $.ajax({
        url:'http://120.132.3.51:8080/uci-pre/unionpay/shop/getIndustryInfo.json',
        type:'post',
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
            _template += '<span>'+ajaxData.data[i].shopClass+'</span>';
        }
        else{
            _template += '<span>'+ajaxData.data[i].shopClass+'</span><span class="more"><img src="../images/liveOnline/more.png"/></span>';
        }
    }
    $('.box').html(_template);
}