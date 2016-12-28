/**
 * Created by Administrator on 2016/12/27 0027.
 */
$(function () {
    $.ajax({
        url: '../json/morebuy.json',
        type: 'get',
        dataType: 'json',
        // contentType: 'application/json',
        success: function (data) {
            moreBuy(data);
            console.log(data);
        }
    });
});

function moreBuy(ajaxdata){
    var template = '';
    for(var i=0;i<ajaxdata.data.length; i++ ){
        template=template+ '<p class="moreShop"><input type="checkbox">'+ajaxdata.data[i].addShop+'</p>';
    }
    $('.moreShop').append(template);
}