/**
 * Created by WXH on 2016/12/14.
 */
function paixu(arr) {

    var _arr = _pre(arr);
   return _paixu();

    function _pre(arr) {
        return arr || [1, 4, 6, 8, 6, 3, 2];
    }

    function _paixu() {

        for (var j = _arr.length; j > 0; j--) {
            var _temp;
            for (var i = 1; i < j; i++) {
                //如果后一个小于前一个，交换位置
                if (_arr[i] < _arr[i - 1]) {
                    _temp = _arr[i - 1];//存储前一个数据
                    _arr[i - 1] = _arr[i];//后面的一个覆盖前面一个
                    _arr[i] = _temp;//存储的（原始前一个数据）放到后一位
                }
            }
        }

        return _arr;
    }
}
var _chuLiArr=paixu([8, 9, 1, 4, 6, 3, 2, 5, 18, 11, 7]);


