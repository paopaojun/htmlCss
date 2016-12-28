/**
 * Created by Administrator on 2016/12/26 0026.
 */
// $(".del").on('click', function () {
//    // $(".mainTop").empty();
// });
// $();
$(document).ready(function () {
    $.ajax({
        url: '../json/buy.json',
        type: 'get',
        dataType: 'json',
        // contentType: 'application/json',
        success: function (data) {
            buyShop(data);
            cartNum();
            del();
            shopNum();
        }
    });

});
function buyShop(ajaxData) {
    // var _dom = document.getElementsByClassName('shopContent')[0];
    var _template = '';
    for (var i = 0; i < ajaxData.data.length; i++) {
        //@formatter:off
        _template=_template+ '<div class="mainTop">'
        +'<div class="shopCheck"><input class="check" type="checkbox"></div>'
        +'<div class="left"><img src="'+ajaxData.data[i].img+'"/></div>'
        +'<div class="right">'
           +'<p class="words1">'+ajaxData.data[i].phoneName+'</p>'
            +'<p class="words2">售价:'+ajaxData.data[i].price+'元</p>'
            +'<p><button class="subtract">-</button>'
                +'<span class="amount" data-price="'+ ajaxData.data[i].price +'">'+ajaxData.data[i].num+'</span>'
                +'<button class="add">+</button>'
                +'<span class="del">删除</span></p>'
        +'</div>'
    +'</div>';
        //@formatter:on
    }
    $('.main').prepend(_template);
}


function del() {
    $('.del').each(function (index, item) {
        $(item).on('click', function (e) {
            console.log(item);
            $(".mainTop").eq(index).empty();
        });
    });
}

function cartNum() {
    //--
    $('.subtract').on('click', function (e) {
        var _amountNodes = $(this).siblings('.amount');
        var _num = _amountNodes.eq(0).text();
        // _num > 0 && _amountNodes.eq(0).text(--_num);
        if (_num > 0) {
            _amountNodes.eq(0).text(--_num);
        }

        shopNum();
    });
    //++
    $('.add').on('click', function (e) {
        var _amountNode = $(this).siblings('.amount');
        var _num = _amountNode.text();
        _num < 10 && _amountNode.text(++_num);

        shopNum();
    });
}
function shopNum() {
    //数量
    var _sum = 0;
    //价格
    var _sumPrice = 0;

    $('.amount').each(function (index, item) {
        var _num = parseInt($(item).text())
        _sum += _num;
        _sumPrice += _num * $(item).data('price');
    });
    $('#num').text('共' + _sum + '件 金额');


    $('.amount').each(function (index, item) {
        // _sumPrice+=parseInt($(item).text()*$(item).data('price'));
    });

    // var _arr=$('.amount');
    // for(var i=0;i<_arr.length;i++){
    //     var item=_arr[i];
    //     _sumPrice+=parseInt($(item).text()*$(item).parent().prev().data('price'));
    // }
    $('#rmb').text(_sumPrice);
}