/**
 * Created by Administrator on 2016/12/27 0027.
 */
$(function () {
    $.ajax({
        url: '../json/sort.json',
        type: 'get',
        dataType: 'json',
        // contentType: 'application/json',
        success: function (data) {
            sortShop(data);
            console.log(data);
        }
    });
});
function sortShop(ajaxdata) {
    var template='';
    for(var i=0;i<ajaxdata.data.length;i++){
        template=template+'<div class="shopPhone"><img src="'+ajaxdata.data[i]['src']+'"/><p class="words">'+ajaxdata.data[i]['words']+'</p></div>';
    }
    $('.phone').append(template);
}