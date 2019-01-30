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
    return Home;
}(base_1.Base));
exports.Home = Home;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhvbWUtbW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EseUNBQXdDO0FBSXhDO0lBQTBCLHdCQUFJO0lBQzVCO2VBQ0UsaUJBQU87SUFDVCxDQUFDO0lBRUQsNEJBQWEsR0FBYixVQUFjLEVBQVUsRUFBRSxRQUFrQjtRQUMxQyxJQUFNLEtBQUssR0FBVTtZQUNuQixHQUFHLEVBQUUsWUFBVSxFQUFJO1lBQ25CLFNBQVMsRUFBRSxVQUFDLEdBQVEsSUFBSyxPQUFBLFFBQVEsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQW5CLENBQW1CO1NBQzdDLENBQUM7UUFDRixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3RCLENBQUM7SUFFRCwyQkFBWSxHQUFaLFVBQWEsUUFBa0I7UUFDN0IsSUFBTSxLQUFLLEdBQVU7WUFDbkIsR0FBRyxFQUFFLGlCQUFpQjtZQUN0QixTQUFTLEVBQUUsVUFBQyxHQUFRLElBQUssT0FBQSxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQWIsQ0FBYTtTQUN2QyxDQUFDO1FBQ0YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN0QixDQUFDO0lBQ0gsV0FBQztBQUFELENBQUMsQUFwQkQsQ0FBMEIsV0FBSSxHQW9CN0I7QUFwQlksb0JBQUkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQYXJhbSB9IGZyb20gXCIuLy4uLy4uL3V0aWxzL2Jhc2VcIjtcclxuaW1wb3J0IHsgQmFzZSB9IGZyb20gXCIuLi8uLi91dGlscy9iYXNlXCI7XHJcblxyXG4vLyBpbXBvcnQgeyB3eCB9IGZyb20gJy4uLy4uL2FwcCdcclxuXHJcbmV4cG9ydCBjbGFzcyBIb21lIGV4dGVuZHMgQmFzZSB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgZ2V0QmFubmVyRGF0YShpZDogbnVtYmVyLCBjYWxsQmFjazogRnVuY3Rpb24pIHtcclxuICAgIGNvbnN0IHBhcmFtOiBQYXJhbSA9IHtcclxuICAgICAgdXJsOiBgYmFubmVyLyR7aWR9YCxcclxuICAgICAgc0NhbGxCYWNrOiAocmVzOiBhbnkpID0+IGNhbGxCYWNrKHJlcy5pdGVtcylcclxuICAgIH07XHJcbiAgICB0aGlzLnJlcXVlc3QocGFyYW0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0VGhlbWVEYXRhKGNhbGxCYWNrOiBGdW5jdGlvbikge1xyXG4gICAgY29uc3QgcGFyYW06IFBhcmFtID0ge1xyXG4gICAgICB1cmw6IGB0aGVtZT9pZHM9MSwyLDNgLFxyXG4gICAgICBzQ2FsbEJhY2s6IChyZXM6IGFueSkgPT4gY2FsbEJhY2socmVzKVxyXG4gICAgfTtcclxuICAgIHRoaXMucmVxdWVzdChwYXJhbSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==