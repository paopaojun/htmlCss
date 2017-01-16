/**
 * Created by Administrator on 2017/1/15.
 */
$(function () {
    $.ajax({
        url: 'http://120.132.3.51:8080/uci-pre/unionpay/shop/getIndustryInfo.json',
        type: 'post',
        dataType: 'json',//你希望服务的返回的格式
        contentType: "application/json",
        data: JSON.stringify({}),
        success: function (data) {
            if (10000 == data.code) {
                // food(data.result);
                // toogle();
            } else {
                alert("");
            }
        },
        error: function (err) {
            alert(JSON.stringify(err));
        }
    });
    util.ajax({
        url: 'shop/getIndustryInfo.json',
        // type: 'post',
        callback: function (data, code, msg) {
            if (100 === code) {
                food(data);
                toogle();
            } else if (code == 99) {
                console.log(JSON.stringify(data));
            }
        }
    });

});
function food(ajaxData) {
    var _template = "";
    for (var i = 0; i < ajaxData.length; i++) {
        var _head = "";
        var _body = "";

        _head = '<div class="topLeft"><img src="' + ajaxData[i].industryInfo.industryImg + '"/>' + ajaxData[i].industryInfo.industryNm + '</div>';
        for (var n = 0; n < ajaxData[i].industryInfos.length; n++) {
            if (n < 6) {
                _body += '<span class="item">' + ajaxData[i].industryInfos[n].industrySubNm + '</span>';
            } else if (n === 6) {
                //下拉
                _body += '<span class="item">' + ajaxData[i].industryInfos[n].industrySubNm + '</span><span class="more moreItem"><img src="../images/liveOnline/more.png"/></span>';
            } else {
                //none
                _body += '<span class="item moreItem hide">' + ajaxData[i].industryInfos[n].industrySubNm + '</span>';
            }

        }
        _body = '<div class="box">' + _body + '<span class="more moreItem hide"><img src="../images/liveOnline/less.png"/></span></div>';
        _template += '<div class="kind">' + _head + _body + '</div>';
    }
    $('body').html(_template);

}
function openUp() {
    $(".more").click(function () {
        $(this).nextAll().show();
        $(this).hide();
    });
}
function pullBack() {
    $(".less").click(function () {
        $(this).prevAll('.hide').hide();
        $(this).hide().prevAll('.more').show();
    });
}

function toogle() {
    $(".more").click(function (e) {
        e.stopPropagation();
        $(this).toggle().siblings('.moreItem').toggle();
    });

    // $("body").on('click','.more',function (e) {
    //     $(this).toggle().siblings('.moreItem').toggle();
    // });
}

function a(data, h) {

}
var obj = {
    b: 2
};
a(obj, 8);