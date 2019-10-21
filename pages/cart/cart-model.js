"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var base_1 = require("../../utils/base");
var Cart = (function (_super) {
    __extends(Cart, _super);
    function Cart() {
        var _this = _super.call(this) || this;
        _this._storageKeyName = 'cart';
        return _this;
    }
    Cart.prototype.add = function (item, counts) {
        var cartData = this.getCartDataFromLocal();
        var isHasInfo = this._isHasThatOne(item.id, cartData);
        if (isHasInfo.index == -1) {
            item.counts = counts;
            item.selectStatus = true;
            cartData.push(item);
        }
        else {
            cartData[isHasInfo.index].counts += counts;
        }
        this.execSetStorageSync(cartData);
    };
    Cart.prototype.execSetStorageSync = function (data) {
        wx.setStorageSync(this._storageKeyName, data);
    };
    Cart.prototype.getCartDataFromLocal = function (flag) {
        if (flag === void 0) { flag = false; }
        var res = wx.getStorageSync(this._storageKeyName);
        if (!res) {
            res = [];
        }
        if (flag) {
            var newRes = [];
            for (var i = 0; i < res.length; i++) {
                if (res[i].selectStatus) {
                    newRes.push(res[i]);
                }
            }
            res = newRes;
        }
        return res;
    };
    Cart.prototype._isHasThatOne = function (id, arr) {
        var item;
        var cartItem = { id: 0, counts: 0 };
        var result = { index: -1, data: cartItem };
        for (var i = 0; i < arr.length; i++) {
            item = arr[i];
            if (item.id == id) {
                result = {
                    index: i,
                    data: item
                };
                break;
            }
        }
        return result;
    };
    Cart.prototype.getCartTotalCounts = function () {
        var data = this.getCartDataFromLocal();
        var counts = 0;
        for (var i = 0; i < data.length; i++) {
            counts += data[i].counts;
        }
        return counts;
    };
    Cart.prototype._changeCounts = function (id, counts) {
        var cartData = this.getCartDataFromLocal();
        var isHasInfo = this._isHasThatOne(id, cartData);
        if (isHasInfo.index != -1) {
            if (isHasInfo.data.counts > 1) {
                cartData[isHasInfo.index].counts += counts;
            }
        }
        this.execSetStorageSync(cartData);
    };
    Cart.prototype.addCounts = function (id) {
        this._changeCounts(id, 1);
    };
    Cart.prototype.cutCounts = function (id) {
        this._changeCounts(id, -1);
    };
    Cart.prototype.delete = function (ids) {
        if (!(ids instanceof Array)) {
            ids = [ids];
        }
        var cartData = this.getCartDataFromLocal();
        for (var i = 0; i < ids.length; i++) {
            var hasInfo = this._isHasThatOne(ids[i], cartData);
            if (hasInfo.index != -1) {
                cartData.splice(hasInfo.index, 1);
            }
        }
        this.execSetStorageSync(cartData);
    };
    return Cart;
}(base_1.Base));
exports.Cart = Cart;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNhcnQtbW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseUNBQXdDO0FBRXhDO0lBQTBCLHdCQUFJO0lBRzVCO1FBQUEsWUFDRSxpQkFBTyxTQUVSO1FBREMsS0FBSSxDQUFDLGVBQWUsR0FBRyxNQUFNLENBQUM7O0lBQ2hDLENBQUM7SUFVRCxrQkFBRyxHQUFILFVBQUksSUFBYyxFQUFFLE1BQWM7UUFDaEMsSUFBTSxRQUFRLEdBQWUsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7UUFFekQsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ3hELElBQUksU0FBUyxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsRUFBRTtZQUN6QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztZQUNyQixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztZQUN6QixRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3JCO2FBQU07WUFDTCxRQUFRLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sSUFBSSxNQUFNLENBQUM7U0FDNUM7UUFDRCxJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUdELGlDQUFrQixHQUFsQixVQUFtQixJQUFnQjtRQUNqQyxFQUFFLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUtELG1DQUFvQixHQUFwQixVQUFxQixJQUFxQjtRQUFyQixxQkFBQSxFQUFBLFlBQXFCO1FBQ3hDLElBQUksR0FBRyxHQUFlLEVBQUUsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQzlELElB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QUFDLG9CQUFvQixFQUFFLENBQUM7UUFDM0MsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDbkMsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDbkQsSUFBSSxPQUFPLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxFQUFFO2dCQUN2QixRQUFRLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7YUFDbkM7U0FDRjtRQUNELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBQ0gsV0FBQztBQUFELENBQUMsQUFySUQsQ0FBMEIsV0FBSSxHQXFJN0I7QUFySVksb0JBQUkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCYXNlIH0gZnJvbSAnLi4vLi4vdXRpbHMvYmFzZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgQ2FydCBleHRlbmRzIEJhc2Uge1xyXG4gIF9zdG9yYWdlS2V5TmFtZTogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLl9zdG9yYWdlS2V5TmFtZSA9ICdjYXJ0JztcclxuICB9XHJcblxyXG4gIC8qXHJcbiAgICog5Yqg5YWl5Yiw6LSt54mp6L2mXHJcbiAgICog5aaC5p6c5LmL5YmN5rKh5pyJ6L+Z5qC355qE5ZWG5ZOB77yM5YiZ55u05o6l5re75Yqg5LiA5p2h5paw55qE6K6w5b2V77yM5pWw6YeP5Li6IGNvdW50c1xyXG4gICAqIOWmguaenOacie+8jOWImeWPquWwhuebuOW6lOaVsOmHjyArIGNvdW50c1xyXG4gICAqIEBwYXJhbXM6XHJcbiAgICogaXRlbSAtIHtvYmp9IOWVhuWTgeWvueixoSxcclxuICAgKiBjb3VudHMgLSB7aW50fSDllYblk4HmlbDnm64sXHJcbiAgICogKi9cclxuICBhZGQoaXRlbTogQ2FydEl0ZW0sIGNvdW50czogbnVtYmVyKSB7XHJcbiAgICBjb25zdCBjYXJ0RGF0YTogQ2FydEl0ZW1bXSA9IHRoaXMuZ2V0Q2FydERhdGFGcm9tTG9jYWwoKTtcclxuXHJcbiAgICBjb25zdCBpc0hhc0luZm8gPSB0aGlzLl9pc0hhc1RoYXRPbmUoaXRlbS5pZCwgY2FydERhdGEpO1xyXG4gICAgaWYgKGlzSGFzSW5mby5pbmRleCA9PSAtMSkge1xyXG4gICAgICBpdGVtLmNvdW50cyA9IGNvdW50cztcclxuICAgICAgaXRlbS5zZWxlY3RTdGF0dXMgPSB0cnVlOyAvL+iuvue9rumAieS4reeKtuaAgVxyXG4gICAgICBjYXJ0RGF0YS5wdXNoKGl0ZW0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY2FydERhdGFbaXNIYXNJbmZvLmluZGV4XS5jb3VudHMgKz0gY291bnRzO1xyXG4gICAgfVxyXG4gICAgdGhpcy5leGVjU2V0U3RvcmFnZVN5bmMoY2FydERhdGEpO1xyXG4gIH1cclxuXHJcbiAgLyrmnKzlnLDnvJPlrZgg5L+d5a2Y77yP5pu05pawKi9cclxuICBleGVjU2V0U3RvcmFnZVN5bmMoZGF0YTogQ2FydEl0ZW1bXSkge1xyXG4gICAgd3guc2V0U3RvcmFnZVN5bmModGhpcy5fc3RvcmFnZUtleU5hbWUsIGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgLypcclxuICAgKiDku47nvJPlrZjkuK3or7vlj5botK3nianovabmlbDmja5cclxuICAgKi9cclxuICBnZXRDYXJ0RGF0YUZyb21Mb2NhbChmbGFnOiBib29sZWFuID0gZmFsc2UpIHtcclxuICAgIGxldCByZXM6IENhcnRJdGVtW10gPSB3eC5nZXRTdG9yYWdlU3luYyh0aGlzLl9zdG9yYWdlS2V5TmFtZSk7XHJcbiAgICBpZiAoIXJlcykge1xyXG4gICAgICByZXMgPSBbXTtcclxuICAgIH1cclxuICAgIC8v5Zyo5LiL5Y2V55qE5pe25YCZ6L+H5ruk5LiN5LiL5Y2V55qE5ZWG5ZOB77yMXHJcbiAgICBpZiAoZmxhZykge1xyXG4gICAgICB2YXIgbmV3UmVzID0gW107XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKHJlc1tpXS5zZWxlY3RTdGF0dXMpIHtcclxuICAgICAgICAgIG5ld1Jlcy5wdXNoKHJlc1tpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJlcyA9IG5ld1JlcztcclxuICAgIH1cclxuICAgIHJldHVybiByZXM7XHJcbiAgfVxyXG5cclxuICAvKlxyXG4gICAqIOWIpOaWreafkOS4quWVhuWTgeaYr+WQpuW3sue7j+iiq+a3u+WKoOWIsOi0reeJqei9puS4re+8jOW5tuS4lOi/lOWbnui/meS4quWVhuWTgeeahFxyXG4gICAqIOaVsOaNruS7peWPiuaJgOWcqOaVsOe7hOS4reeahOW6j+WPt1xyXG4gICAqL1xyXG4gIF9pc0hhc1RoYXRPbmUoaWQ6IG51bWJlciwgYXJyOiBDYXJ0SXRlbVtdKSB7XHJcbiAgICBsZXQgaXRlbTogQ2FydEl0ZW07XHJcbiAgICBjb25zdCBjYXJ0SXRlbTogQ2FydEl0ZW0gPSB7IGlkOiAwLCBjb3VudHM6IDAgfTtcclxuICAgIGxldCByZXN1bHQgPSB7IGluZGV4OiAtMSwgZGF0YTogY2FydEl0ZW0gfTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGl0ZW0gPSBhcnJbaV07XHJcbiAgICAgIGlmIChpdGVtLmlkID09IGlkKSB7XHJcbiAgICAgICAgcmVzdWx0ID0ge1xyXG4gICAgICAgICAgaW5kZXg6IGksXHJcbiAgICAgICAgICBkYXRhOiBpdGVtXHJcbiAgICAgICAgfTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcblxyXG4gIGdldENhcnRUb3RhbENvdW50cygpIHtcclxuICAgIGNvbnN0IGRhdGEgPSB0aGlzLmdldENhcnREYXRhRnJvbUxvY2FsKCk7XHJcbiAgICBsZXQgY291bnRzID0gMDtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb3VudHMgKz0gZGF0YVtpXS5jb3VudHM7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY291bnRzO1xyXG4gIH1cclxuXHJcbiAgLypcclxuICAgKiDkv67mlLnllYblk4HmlbDnm65cclxuICAgKiBwYXJhbXM6XHJcbiAgICogaWQgLSB7aW50fSDllYblk4FpZFxyXG4gICAqIGNvdW50cyAte2ludH0g5pWw55uuXHJcbiAgICogKi9cclxuICBfY2hhbmdlQ291bnRzKGlkOiBudW1iZXIsIGNvdW50czogbnVtYmVyKSB7XHJcbiAgICBjb25zdCBjYXJ0RGF0YSA9IHRoaXMuZ2V0Q2FydERhdGFGcm9tTG9jYWwoKTtcclxuICAgIGNvbnN0IGlzSGFzSW5mbyA9IHRoaXMuX2lzSGFzVGhhdE9uZShpZCwgY2FydERhdGEpO1xyXG4gICAgaWYgKGlzSGFzSW5mby5pbmRleCAhPSAtMSkge1xyXG4gICAgICBpZiAoaXNIYXNJbmZvLmRhdGEuY291bnRzID4gMSkge1xyXG4gICAgICAgIGNhcnREYXRhW2lzSGFzSW5mby5pbmRleF0uY291bnRzICs9IGNvdW50cztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5leGVjU2V0U3RvcmFnZVN5bmMoY2FydERhdGEpO1xyXG4gIH1cclxuXHJcbiAgLypcclxuICAgKiDlop7liqDllYblk4HmlbDnm65cclxuICAgKiAqL1xyXG4gIGFkZENvdW50cyhpZDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLl9jaGFuZ2VDb3VudHMoaWQsIDEpO1xyXG4gIH1cclxuXHJcbiAgLypcclxuICAgKiDlh4/lsJHllYblk4HmlbDnm65cclxuICAgKiAqL1xyXG4gIGN1dENvdW50cyhpZDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLl9jaGFuZ2VDb3VudHMoaWQsIC0xKTtcclxuICB9XHJcblxyXG4gIC8qXHJcbiAgICog5Yig6Zmk5p+Q5Lqb5ZWG5ZOBXHJcbiAgICovXHJcbiAgZGVsZXRlKGlkczogbnVtYmVyW10pIHtcclxuICAgIGlmICghKGlkcyBpbnN0YW5jZW9mIEFycmF5KSkge1xyXG4gICAgICBpZHMgPSBbaWRzXTtcclxuICAgIH1cclxuICAgIHZhciBjYXJ0RGF0YSA9IHRoaXMuZ2V0Q2FydERhdGFGcm9tTG9jYWwoKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaWRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHZhciBoYXNJbmZvID0gdGhpcy5faXNIYXNUaGF0T25lKGlkc1tpXSwgY2FydERhdGEpO1xyXG4gICAgICBpZiAoaGFzSW5mby5pbmRleCAhPSAtMSkge1xyXG4gICAgICAgIGNhcnREYXRhLnNwbGljZShoYXNJbmZvLmluZGV4LCAxKTsgLy/liKDpmaTmlbDnu4Tmn5DkuIDpoblcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5leGVjU2V0U3RvcmFnZVN5bmMoY2FydERhdGEpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDYXJ0SXRlbSB7XHJcbiAgaWQ6IG51bWJlcjtcclxuICBuYW1lPzogc3RyaW5nO1xyXG4gIG1haW5faW1nX3VybD86IHN0cmluZztcclxuICBwcmljZT86IG51bWJlcjtcclxuICBjb3VudHM6IG51bWJlcjtcclxuICBzZWxlY3RTdGF0dXM/OiBib29sZWFuO1xyXG59XHJcbiJdfQ==