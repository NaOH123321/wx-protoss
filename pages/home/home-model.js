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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhvbWUtbW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EseUNBQXdDO0FBRXhDO0lBQTBCLHdCQUFJO0lBQzVCO2VBQ0UsaUJBQU87SUFDVCxDQUFDO0lBRUQsNEJBQWEsR0FBYixVQUFjLEVBQVUsRUFBRSxRQUFrQjtRQUMxQyxJQUFNLEtBQUssR0FBVTtZQUNuQixHQUFHLEVBQUUsWUFBVSxFQUFJO1lBQ25CLFNBQVMsRUFBRSxVQUFDLEdBQVEsSUFBSyxPQUFBLFFBQVMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQXBCLENBQW9CO1NBQzlDLENBQUM7UUFDRixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3RCLENBQUM7SUFFRCwyQkFBWSxHQUFaLFVBQWEsUUFBa0I7UUFDN0IsSUFBTSxLQUFLLEdBQVU7WUFDbkIsR0FBRyxFQUFFLGlCQUFpQjtZQUN0QixTQUFTLEVBQUUsVUFBQyxHQUFRLElBQUssT0FBQSxRQUFTLENBQUMsR0FBRyxDQUFDLEVBQWQsQ0FBYztTQUN4QyxDQUFDO1FBQ0YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN0QixDQUFDO0lBRUQsOEJBQWUsR0FBZixVQUFnQixRQUFrQjtRQUNoQyxJQUFNLEtBQUssR0FBVTtZQUNuQixHQUFHLEVBQUUsZ0JBQWdCO1lBQ3JCLFNBQVMsRUFBRSxVQUFDLEdBQVEsSUFBSyxPQUFBLFFBQVMsQ0FBQyxHQUFHLENBQUMsRUFBZCxDQUFjO1NBQ3hDLENBQUM7UUFDRixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3RCLENBQUM7SUFDSCxXQUFDO0FBQUQsQ0FBQyxBQTVCRCxDQUEwQixXQUFJLEdBNEI3QjtBQTVCWSxvQkFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBhcmFtIH0gZnJvbSAnLi8uLi8uLi91dGlscy9iYXNlJztcclxuaW1wb3J0IHsgQmFzZSB9IGZyb20gJy4uLy4uL3V0aWxzL2Jhc2UnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEhvbWUgZXh0ZW5kcyBCYXNlIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICBnZXRCYW5uZXJEYXRhKGlkOiBudW1iZXIsIGNhbGxCYWNrOiBGdW5jdGlvbikge1xyXG4gICAgY29uc3QgcGFyYW06IFBhcmFtID0ge1xyXG4gICAgICB1cmw6IGBiYW5uZXIvJHtpZH1gLFxyXG4gICAgICBzQ2FsbEJhY2s6IChyZXM6IGFueSkgPT4gY2FsbEJhY2shKHJlcy5pdGVtcylcclxuICAgIH07XHJcbiAgICB0aGlzLnJlcXVlc3QocGFyYW0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0VGhlbWVEYXRhKGNhbGxCYWNrOiBGdW5jdGlvbikge1xyXG4gICAgY29uc3QgcGFyYW06IFBhcmFtID0ge1xyXG4gICAgICB1cmw6IGB0aGVtZT9pZHM9MSwyLDNgLFxyXG4gICAgICBzQ2FsbEJhY2s6IChyZXM6IGFueSkgPT4gY2FsbEJhY2shKHJlcylcclxuICAgIH07XHJcbiAgICB0aGlzLnJlcXVlc3QocGFyYW0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0UHJvZHVjdHNEYXRhKGNhbGxCYWNrOiBGdW5jdGlvbikge1xyXG4gICAgY29uc3QgcGFyYW06IFBhcmFtID0ge1xyXG4gICAgICB1cmw6IGBwcm9kdWN0L3JlY2VudGAsXHJcbiAgICAgIHNDYWxsQmFjazogKHJlczogYW55KSA9PiBjYWxsQmFjayEocmVzKVxyXG4gICAgfTtcclxuICAgIHRoaXMucmVxdWVzdChwYXJhbSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==