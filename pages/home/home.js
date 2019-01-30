"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var home_model_1 = require("./home-model");
var home = new home_model_1.Home();
Page({
    onLoad: function () {
        this._loadData();
    },
    _loadData: function () {
        var _this = this;
        var id = 1;
        home.getBannerData(id, function (res) {
            _this.setData({
                bannerArr: res
            });
        });
        home.getThemeData(function (data) {
            _this.setData({
                themeArr: data
            });
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhvbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBb0M7QUFFcEMsSUFBSSxJQUFJLEdBQUcsSUFBSSxpQkFBSSxFQUFFLENBQUM7QUFFdEIsSUFBSSxDQUFDO0lBQ0gsTUFBTSxFQUFFO1FBQ04sSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFFRCxTQUFTLEVBQUU7UUFBQSxpQkFhVjtRQVpDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNYLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxFQUFFLFVBQUMsR0FBUTtZQUM5QixLQUFJLENBQUMsT0FBUSxDQUFDO2dCQUNaLFNBQVMsRUFBRSxHQUFHO2FBQ2YsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQUMsSUFBUztZQUMxQixLQUFJLENBQUMsT0FBUSxDQUFDO2dCQUNaLFFBQVEsRUFBRSxJQUFJO2FBQ2YsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0NBRUYsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSG9tZSB9IGZyb20gXCIuL2hvbWUtbW9kZWxcIjtcclxuXHJcbnZhciBob21lID0gbmV3IEhvbWUoKTtcclxuXHJcblBhZ2Uoe1xyXG4gIG9uTG9hZDogZnVuY3Rpb24oKSB7XHJcbiAgICB0aGlzLl9sb2FkRGF0YSgpO1xyXG4gIH0sXHJcblxyXG4gIF9sb2FkRGF0YTogZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgaWQgPSAxO1xyXG4gICAgaG9tZS5nZXRCYW5uZXJEYXRhKGlkLCAocmVzOiBhbnkpID0+IHtcclxuICAgICAgdGhpcy5zZXREYXRhISh7XHJcbiAgICAgICAgYmFubmVyQXJyOiByZXNcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBob21lLmdldFRoZW1lRGF0YSgoZGF0YTogYW55KSA9PiB7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSEoe1xyXG4gICAgICAgIHRoZW1lQXJyOiBkYXRhXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIFxyXG59KTtcclxuIl19