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
var Theme = (function (_super) {
    __extends(Theme, _super);
    function Theme() {
        return _super.call(this) || this;
    }
    Theme.prototype.getThemeData = function (id, callBack) {
        var param = {
            url: "theme/" + id,
            sCallBack: function (res) { return callBack(res); }
        };
        this.request(param);
    };
    return Theme;
}(base_1.Base));
exports.Theme = Theme;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtbW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0aGVtZS1tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDQSx5Q0FBd0M7QUFFeEM7SUFBMkIseUJBQUk7SUFDN0I7ZUFDRSxpQkFBTztJQUNULENBQUM7SUFFRCw0QkFBWSxHQUFaLFVBQWEsRUFBVSxFQUFFLFFBQWtCO1FBQ3pDLElBQU0sS0FBSyxHQUFVO1lBQ25CLEdBQUcsRUFBRSxXQUFTLEVBQUk7WUFDbEIsU0FBUyxFQUFFLFVBQUMsR0FBUSxJQUFLLE9BQUEsUUFBUyxDQUFDLEdBQUcsQ0FBQyxFQUFkLENBQWM7U0FDeEMsQ0FBQztRQUNGLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdEIsQ0FBQztJQUNILFlBQUM7QUFBRCxDQUFDLEFBWkQsQ0FBMkIsV0FBSSxHQVk5QjtBQVpZLHNCQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGFyYW0gfSBmcm9tICcuLy4uLy4uL3V0aWxzL2Jhc2UnO1xyXG5pbXBvcnQgeyBCYXNlIH0gZnJvbSAnLi4vLi4vdXRpbHMvYmFzZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgVGhlbWUgZXh0ZW5kcyBCYXNlIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICBnZXRUaGVtZURhdGEoaWQ6IG51bWJlciwgY2FsbEJhY2s6IEZ1bmN0aW9uKSB7XHJcbiAgICBjb25zdCBwYXJhbTogUGFyYW0gPSB7XHJcbiAgICAgIHVybDogYHRoZW1lLyR7aWR9YCxcclxuICAgICAgc0NhbGxCYWNrOiAocmVzOiBhbnkpID0+IGNhbGxCYWNrIShyZXMpXHJcbiAgICB9O1xyXG4gICAgdGhpcy5yZXF1ZXN0KHBhcmFtKTtcclxuICB9XHJcbn1cclxuIl19