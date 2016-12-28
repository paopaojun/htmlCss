/**
 * Created by Administrator on 2016/12/27 0027.
 */
$(function () {
    $.ajax({
        url: '../json/sortphone.json',
        type: 'get',
        dataType: 'json',
        // contentType: 'application/json',
        success: function (data) {
            sortPhone(data);
            console.log(data);
        }
    });

    $.ajax({
        url: '../json/sortpc.json',
        type: 'get',
        dataType: 'json',
        // contentType: 'application/json',
        success: function (data) {
            sortpc(data);
            console.log(data);
        }
    });
});
function sortPhone(ajaxdata) {
    var template='';
    for(var i=0;i<ajaxdata.data.length;i++){
        template=template+'<div class="shop"><img src="'+ajaxdata.data[i]['src']+'"/><p class="words">'+ajaxdata.data[i]['words']+'</p></div>';
    }
    $('.phone').append(template);
}

function sortpc(ajaxdata) {
    var template='';
    for(var i=0;i<ajaxdata.data.length;i++){
        template=template+'<div class="shop"><img src="'+ajaxdata.data[i]['src']+'"/><p class="words">'+ajaxdata.data[i]['words']+'</p></div>';
    }
    $('.pad').append(template);
}