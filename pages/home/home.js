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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhvbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBb0M7QUFFcEMsSUFBSSxJQUFJLEdBQUcsSUFBSSxpQkFBSSxFQUFFLENBQUM7QUFFdEIsSUFBSSxDQUFDO0lBQ0gsTUFBTSxFQUFFO1FBQ04sSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFFRCxTQUFTLEVBQUU7UUFBQSxpQkFlVjtRQWRDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNYLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxFQUFFLFVBQUMsR0FBUTtZQUU5QixLQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNYLFNBQVMsRUFBRSxHQUFHO2FBQ2YsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQUMsSUFBUztZQUUxQixLQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNYLFFBQVEsRUFBRSxJQUFJO2FBQ2YsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0YsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSG9tZSB9IGZyb20gXCIuL2hvbWUtbW9kZWxcIjtcclxuXHJcbnZhciBob21lID0gbmV3IEhvbWUoKTtcclxuXHJcblBhZ2Uoe1xyXG4gIG9uTG9hZDogZnVuY3Rpb24oKSB7XHJcbiAgICB0aGlzLl9sb2FkRGF0YSgpO1xyXG4gIH0sXHJcblxyXG4gIF9sb2FkRGF0YTogZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgaWQgPSAxO1xyXG4gICAgaG9tZS5nZXRCYW5uZXJEYXRhKGlkLCAocmVzOiBhbnkpID0+IHtcclxuICAgICAgLy8gY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBiYW5uZXJBcnI6IHJlc1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIGhvbWUuZ2V0VGhlbWVEYXRhKChkYXRhOiBhbnkpID0+IHtcclxuICAgICAgLy8gY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgdGhlbWVBcnI6IGRhdGFcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcbn0pO1xyXG4iXX0=