/**
 * Created by Administrator on 2017/1/15.
 */
$(function () {
    // $.ajax({
    //     url:'http://120.132.3.51:8080/uci-pre/unionpay/search/getAutoCompleteData.json',
    //     type:'post',
    //     dataType:'json',
    //     contentType:'application/json',
    //     data:JSON.stringify({
    //         input: "q",
    //         userLat:31.23415,
    //         userLnt: 121.662709
    //     }),
    //     success:function (a) {
    //         if(10000 == a.code){
    //             //console.log(JSON.stringify(a));
    //         }
    //         else {
    //             alert();
    //         }
    //     },
    //     error:function (e) {
    //         alert(JSON.stringify(e));
    //     }
    //
    // });

    util.ajax({
        url:'search/getAutoCompleteData.json',
        data:{
            input: "",
            userLat:31.23415,
            userLnt: 121.662709
        },
        callback:function (data,code,msg) {
            if(100===code){
                console.log(data);
            }else{
                console.log(JSON.stringify(data));
            }
        }
    });
});