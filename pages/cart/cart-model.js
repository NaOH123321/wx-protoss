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
        wx.setStorageSync(this._storageKeyName, cartData);
    };
    Cart.prototype.getCartDataFromLocal = function () {
        var res = wx.getStorageSync(this._storageKeyName);
        if (!res) {
            res = [];
        }
        return res;
    };
    Cart.prototype._isHasThatOne = function (id, arr) {
        var item;
        var result = { index: -1, data: {} };
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
    return Cart;
}(base_1.Base));
exports.Cart = Cart;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNhcnQtbW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseUNBQXdDO0FBRXhDO0lBQTBCLHdCQUFJO0lBRzVCO1FBQUEsWUFDRSxpQkFBTyxTQUVSO1FBREMsS0FBSSxDQUFDLGVBQWUsR0FBRyxNQUFNLENBQUM7O0lBQ2hDLENBQUM7SUFVRCxrQkFBRyxHQUFILFVBQUksSUFBYyxFQUFFLE1BQWM7UUFDaEMsSUFBTSxRQUFRLEdBQWUsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7UUFFekQsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ3hELElBQUksU0FBUyxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsRUFBRTtZQUN6QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztZQUNyQixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztZQUN6QixRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3JCO2FBQU07WUFDTCxRQUFRLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sSUFBSSxNQUFNLENBQUM7U0FDNUM7UUFDRCxFQUFFLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUlELG1DQUFvQixHQUFwQjtRQUNFLElBQUksR0FBRyxHQUFlLEVBQUUsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQzlELElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDUixHQUFHLEdBQUcsRUFBRSxDQUFDO1NBQ1Y7UUFDRCxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7SUFNRCw0QkFBYSxHQUFiLFVBQWMsRUFBVSxFQUFFLEdBQWU7UUFDdkMsSUFBSSxJQUFJLENBQUM7UUFDVCxJQUFJLE1BQU0sR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLENBQUM7UUFDckMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDbkMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNkLElBQUksSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUU7Z0JBQ2pCLE1BQU0sR0FBRztvQkFDUCxLQUFLLEVBQUUsQ0FBQztvQkFDUixJQUFJLEVBQUUsSUFBSTtpQkFDWCxDQUFDO2dCQUNGLE1BQU07YUFDUDtTQUNGO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUVELGlDQUFrQixHQUFsQjtRQUNFLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1FBQ3pDLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQztRQUNmLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3BDLE1BQU0sSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO1NBQzFCO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUNILFdBQUM7QUFBRCxDQUFDLEFBcEVELENBQTBCLFdBQUksR0FvRTdCO0FBcEVZLG9CQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmFzZSB9IGZyb20gJy4uLy4uL3V0aWxzL2Jhc2UnO1xyXG5cclxuZXhwb3J0IGNsYXNzIENhcnQgZXh0ZW5kcyBCYXNlIHtcclxuICBfc3RvcmFnZUtleU5hbWU6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5fc3RvcmFnZUtleU5hbWUgPSAnY2FydCc7XHJcbiAgfVxyXG5cclxuICAvKlxyXG4gICAqIOWKoOWFpeWIsOi0reeJqei9plxyXG4gICAqIOWmguaenOS5i+WJjeayoeaciei/meagt+eahOWVhuWTge+8jOWImeebtOaOpea3u+WKoOS4gOadoeaWsOeahOiusOW9le+8jOaVsOmHj+S4uiBjb3VudHNcclxuICAgKiDlpoLmnpzmnInvvIzliJnlj6rlsIbnm7jlupTmlbDph48gKyBjb3VudHNcclxuICAgKiBAcGFyYW1zOlxyXG4gICAqIGl0ZW0gLSB7b2JqfSDllYblk4Hlr7nosaEsXHJcbiAgICogY291bnRzIC0ge2ludH0g5ZWG5ZOB5pWw55uuLFxyXG4gICAqICovXHJcbiAgYWRkKGl0ZW06IENhcnRJdGVtLCBjb3VudHM6IG51bWJlcikge1xyXG4gICAgY29uc3QgY2FydERhdGE6IENhcnRJdGVtW10gPSB0aGlzLmdldENhcnREYXRhRnJvbUxvY2FsKCk7XHJcblxyXG4gICAgY29uc3QgaXNIYXNJbmZvID0gdGhpcy5faXNIYXNUaGF0T25lKGl0ZW0uaWQsIGNhcnREYXRhKTtcclxuICAgIGlmIChpc0hhc0luZm8uaW5kZXggPT0gLTEpIHtcclxuICAgICAgaXRlbS5jb3VudHMgPSBjb3VudHM7XHJcbiAgICAgIGl0ZW0uc2VsZWN0U3RhdHVzID0gdHJ1ZTsgLy/orr7nva7pgInkuK3nirbmgIFcclxuICAgICAgY2FydERhdGEucHVzaChpdGVtKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNhcnREYXRhW2lzSGFzSW5mby5pbmRleF0uY291bnRzICs9IGNvdW50cztcclxuICAgIH1cclxuICAgIHd4LnNldFN0b3JhZ2VTeW5jKHRoaXMuX3N0b3JhZ2VLZXlOYW1lLCBjYXJ0RGF0YSk7XHJcbiAgfVxyXG4gIC8qXHJcbiAgICog5LuO57yT5a2Y5Lit6K+75Y+W6LSt54mp6L2m5pWw5o2uXHJcbiAgICovXHJcbiAgZ2V0Q2FydERhdGFGcm9tTG9jYWwoKSB7XHJcbiAgICBsZXQgcmVzOiBDYXJ0SXRlbVtdID0gd3guZ2V0U3RvcmFnZVN5bmModGhpcy5fc3RvcmFnZUtleU5hbWUpO1xyXG4gICAgaWYgKCFyZXMpIHtcclxuICAgICAgcmVzID0gW107XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzO1xyXG4gIH1cclxuXHJcbiAgLypcclxuICAgKiDliKTmlq3mn5DkuKrllYblk4HmmK/lkKblt7Lnu4/ooqvmt7vliqDliLDotK3nianovabkuK3vvIzlubbkuJTov5Tlm57ov5nkuKrllYblk4HnmoRcclxuICAgKiDmlbDmja7ku6Xlj4rmiYDlnKjmlbDnu4TkuK3nmoTluo/lj7dcclxuICAgKi9cclxuICBfaXNIYXNUaGF0T25lKGlkOiBudW1iZXIsIGFycjogQ2FydEl0ZW1bXSkge1xyXG4gICAgbGV0IGl0ZW07XHJcbiAgICBsZXQgcmVzdWx0ID0geyBpbmRleDogLTEsIGRhdGE6IHt9IH07XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpdGVtID0gYXJyW2ldO1xyXG4gICAgICBpZiAoaXRlbS5pZCA9PSBpZCkge1xyXG4gICAgICAgIHJlc3VsdCA9IHtcclxuICAgICAgICAgIGluZGV4OiBpLFxyXG4gICAgICAgICAgZGF0YTogaXRlbVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG5cclxuICBnZXRDYXJ0VG90YWxDb3VudHMoKSB7XHJcbiAgICBjb25zdCBkYXRhID0gdGhpcy5nZXRDYXJ0RGF0YUZyb21Mb2NhbCgpO1xyXG4gICAgbGV0IGNvdW50cyA9IDA7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY291bnRzICs9IGRhdGFbaV0uY291bnRzO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNvdW50cztcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ2FydEl0ZW0ge1xyXG4gIGlkOiBudW1iZXI7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIG1haW5faW1nX3VybDogc3RyaW5nO1xyXG4gIHByaWNlOiBudW1iZXI7XHJcbiAgY291bnRzOiBudW1iZXI7XHJcbiAgc2VsZWN0U3RhdHVzOiBib29sZWFuO1xyXG59XHJcbiJdfQ==