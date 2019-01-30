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
                bannerArr: res.items
            });
        });
        home.getThemeData(function (data) {
            _this.setData({
                themeArr: data
            });
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhvbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBb0M7QUFFcEMsSUFBSSxJQUFJLEdBQUcsSUFBSSxpQkFBSSxFQUFFLENBQUM7QUFFdEIsSUFBSSxDQUFDO0lBQ0gsTUFBTSxFQUFFO1FBQ04sSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFFRCxTQUFTLEVBQUU7UUFBQSxpQkFhVjtRQVpDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNYLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxFQUFFLFVBQUMsR0FBUTtZQUM5QixLQUFJLENBQUMsT0FBUSxDQUFDO2dCQUNaLFNBQVMsRUFBRSxHQUFHLENBQUMsS0FBSzthQUNyQixDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxZQUFZLENBQUMsVUFBQyxJQUFTO1lBQzFCLEtBQUksQ0FBQyxPQUFRLENBQUM7Z0JBQ1osUUFBUSxFQUFFLElBQUk7YUFDZixDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FFRixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIb21lIH0gZnJvbSBcIi4vaG9tZS1tb2RlbFwiO1xyXG5cclxudmFyIGhvbWUgPSBuZXcgSG9tZSgpO1xyXG5cclxuUGFnZSh7XHJcbiAgb25Mb2FkOiBmdW5jdGlvbigpIHtcclxuICAgIHRoaXMuX2xvYWREYXRhKCk7XHJcbiAgfSxcclxuXHJcbiAgX2xvYWREYXRhOiBmdW5jdGlvbigpIHtcclxuICAgIHZhciBpZCA9IDE7XHJcbiAgICBob21lLmdldEJhbm5lckRhdGEoaWQsIChyZXM6IGFueSkgPT4ge1xyXG4gICAgICB0aGlzLnNldERhdGEhKHtcclxuICAgICAgICBiYW5uZXJBcnI6IHJlcy5pdGVtc1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIGhvbWUuZ2V0VGhlbWVEYXRhKChkYXRhOiBhbnkpID0+IHtcclxuICAgICAgdGhpcy5zZXREYXRhISh7XHJcbiAgICAgICAgdGhlbWVBcnI6IGRhdGFcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgXHJcbn0pO1xyXG4iXX0=