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
var Home = (function (_super) {
    __extends(Home, _super);
    function Home() {
        return _super.call(this) || this;
    }
    Home.prototype.getBannerData = function (id, callBack) {
        var param = {
            url: "banner/" + id,
            sCallBack: function (res) { return callBack(res.items); }
        };
        this.request(param);
    };
    Home.prototype.getThemeData = function (callBack) {
        var param = {
            url: "theme?ids=1,2,3",
            sCallBack: function (res) { return callBack(res); }
        };
        this.request(param);
    };
    Home.prototype.getProductsData = function (callBack) {
        var param = {
            url: "product/recent",
            sCallBack: function (res) { return callBack(res); }
        };
        this.request(param);
    };
    return Home;
}(base_1.Base));
exports.Home = Home;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhvbWUtbW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EseUNBQXdDO0FBRXhDO0lBQTBCLHdCQUFJO0lBQzVCO2VBQ0UsaUJBQU87SUFDVCxDQUFDO0lBRUQsNEJBQWEsR0FBYixVQUFjLEVBQVUsRUFBRSxRQUFrQjtRQUMxQyxJQUFNLEtBQUssR0FBVTtZQUNuQixHQUFHLEVBQUUsWUFBVSxFQUFJO1lBQ25CLFNBQVMsRUFBRSxVQUFDLEdBQVEsSUFBSyxPQUFBLFFBQVMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQXBCLENBQW9CO1NBQzlDLENBQUM7UUFDRixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3RCLENBQUM7SUFFRCwyQkFBWSxHQUFaLFVBQWEsUUFBa0I7UUFDN0IsSUFBTSxLQUFLLEdBQVU7WUFDbkIsR0FBRyxFQUFFLGlCQUFpQjtZQUN0QixTQUFTLEVBQUUsVUFBQyxHQUFRLElBQUssT0FBQSxRQUFTLENBQUMsR0FBRyxDQUFDLEVBQWQsQ0FBYztTQUN4QyxDQUFDO1FBQ0YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN0QixDQUFDO0lBRUQsOEJBQWUsR0FBZixVQUFnQixRQUFrQjtRQUNoQyxJQUFNLEtBQUssR0FBVTtZQUNuQixHQUFHLEVBQUUsZ0JBQWdCO1lBQ3JCLFNBQVMsRUFBRSxVQUFDLEdBQVEsSUFBSyxPQUFBLFFBQVMsQ0FBQyxHQUFHLENBQUMsRUFBZCxDQUFjO1NBQ3hDLENBQUM7UUFDRixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3RCLENBQUM7SUFDSCxXQUFDO0FBQUQsQ0FBQyxBQTVCRCxDQUEwQixXQUFJLEdBNEI3QjtBQTVCWSxvQkFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBhcmFtIH0gZnJvbSBcIi4vLi4vLi4vdXRpbHMvYmFzZVwiO1xyXG5pbXBvcnQgeyBCYXNlIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2Jhc2VcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBIb21lIGV4dGVuZHMgQmFzZSB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgZ2V0QmFubmVyRGF0YShpZDogbnVtYmVyLCBjYWxsQmFjazogRnVuY3Rpb24pIHtcclxuICAgIGNvbnN0IHBhcmFtOiBQYXJhbSA9IHtcclxuICAgICAgdXJsOiBgYmFubmVyLyR7aWR9YCxcclxuICAgICAgc0NhbGxCYWNrOiAocmVzOiBhbnkpID0+IGNhbGxCYWNrIShyZXMuaXRlbXMpXHJcbiAgICB9O1xyXG4gICAgdGhpcy5yZXF1ZXN0KHBhcmFtKTtcclxuICB9XHJcblxyXG4gIGdldFRoZW1lRGF0YShjYWxsQmFjazogRnVuY3Rpb24pIHtcclxuICAgIGNvbnN0IHBhcmFtOiBQYXJhbSA9IHtcclxuICAgICAgdXJsOiBgdGhlbWU/aWRzPTEsMiwzYCxcclxuICAgICAgc0NhbGxCYWNrOiAocmVzOiBhbnkpID0+IGNhbGxCYWNrIShyZXMpXHJcbiAgICB9O1xyXG4gICAgdGhpcy5yZXF1ZXN0KHBhcmFtKTtcclxuICB9XHJcblxyXG4gIGdldFByb2R1Y3RzRGF0YShjYWxsQmFjazogRnVuY3Rpb24pIHtcclxuICAgIGNvbnN0IHBhcmFtOiBQYXJhbSA9IHtcclxuICAgICAgdXJsOiBgcHJvZHVjdC9yZWNlbnRgLFxyXG4gICAgICBzQ2FsbEJhY2s6IChyZXM6IGFueSkgPT4gY2FsbEJhY2shKHJlcylcclxuICAgIH07XHJcbiAgICB0aGlzLnJlcXVlc3QocGFyYW0pO1xyXG4gIH1cclxufVxyXG4iXX0=