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
        home.getProductsData(function (data) {
            _this.setData({
                productsArr: data
            });
        });
    },
    onProductsItemTap: function (event) {
        var id = home.getDataSet(event, "id");
        wx.navigateTo({
            url: "../product/product?id=" + id
        });
    },
    onThemesItemTap: function (event) {
        var id = home.getDataSet(event, "id");
        var name = home.getDataSet(event, "name");
        wx.navigateTo({
            url: "../theme/theme?id=" + id + "&name=" + name
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhvbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBb0M7QUFFcEMsSUFBTSxJQUFJLEdBQUcsSUFBSSxpQkFBSSxFQUFFLENBQUM7QUFFeEIsSUFBSSxDQUFDO0lBQ0gsTUFBTSxFQUFFO1FBQ04sSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFFRCxTQUFTLEVBQUU7UUFBQSxpQkFtQlY7UUFsQkMsSUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ2IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFLEVBQUUsVUFBQyxHQUFRO1lBQzlCLEtBQUksQ0FBQyxPQUFRLENBQUM7Z0JBQ1osU0FBUyxFQUFFLEdBQUc7YUFDZixDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxZQUFZLENBQUMsVUFBQyxJQUFTO1lBQzFCLEtBQUksQ0FBQyxPQUFRLENBQUM7Z0JBQ1osUUFBUSxFQUFFLElBQUk7YUFDZixDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxlQUFlLENBQUMsVUFBQyxJQUFTO1lBQzdCLEtBQUksQ0FBQyxPQUFRLENBQUM7Z0JBQ1osV0FBVyxFQUFFLElBQUk7YUFDbEIsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsaUJBQWlCLEVBQUUsVUFBUyxLQUFVO1FBQ3BDLElBQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3hDLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDWixHQUFHLEVBQUUsMkJBQXlCLEVBQUk7U0FDbkMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELGVBQWUsRUFBRSxVQUFTLEtBQVU7UUFDbEMsSUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDeEMsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDNUMsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNaLEdBQUcsRUFBRSx1QkFBcUIsRUFBRSxjQUFTLElBQU07U0FDNUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEhvbWUgfSBmcm9tIFwiLi9ob21lLW1vZGVsXCI7XHJcblxyXG5jb25zdCBob21lID0gbmV3IEhvbWUoKTtcclxuXHJcblBhZ2Uoe1xyXG4gIG9uTG9hZDogZnVuY3Rpb24oKSB7XHJcbiAgICB0aGlzLl9sb2FkRGF0YSgpO1xyXG4gIH0sXHJcblxyXG4gIF9sb2FkRGF0YTogZnVuY3Rpb24oKSB7XHJcbiAgICBjb25zdCBpZCA9IDE7XHJcbiAgICBob21lLmdldEJhbm5lckRhdGEoaWQsIChyZXM6IGFueSkgPT4ge1xyXG4gICAgICB0aGlzLnNldERhdGEhKHtcclxuICAgICAgICBiYW5uZXJBcnI6IHJlc1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIGhvbWUuZ2V0VGhlbWVEYXRhKChkYXRhOiBhbnkpID0+IHtcclxuICAgICAgdGhpcy5zZXREYXRhISh7XHJcbiAgICAgICAgdGhlbWVBcnI6IGRhdGFcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBob21lLmdldFByb2R1Y3RzRGF0YSgoZGF0YTogYW55KSA9PiB7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSEoe1xyXG4gICAgICAgIHByb2R1Y3RzQXJyOiBkYXRhXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgb25Qcm9kdWN0c0l0ZW1UYXA6IGZ1bmN0aW9uKGV2ZW50OiBhbnkpIHtcclxuICAgIGNvbnN0IGlkID0gaG9tZS5nZXREYXRhU2V0KGV2ZW50LCBcImlkXCIpO1xyXG4gICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgIHVybDogYC4uL3Byb2R1Y3QvcHJvZHVjdD9pZD0ke2lkfWBcclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIG9uVGhlbWVzSXRlbVRhcDogZnVuY3Rpb24oZXZlbnQ6IGFueSkge1xyXG4gICAgY29uc3QgaWQgPSBob21lLmdldERhdGFTZXQoZXZlbnQsIFwiaWRcIik7XHJcbiAgICBjb25zdCBuYW1lID0gaG9tZS5nZXREYXRhU2V0KGV2ZW50LCBcIm5hbWVcIik7XHJcbiAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgdXJsOiBgLi4vdGhlbWUvdGhlbWU/aWQ9JHtpZH0mbmFtZT0ke25hbWV9YFxyXG4gICAgfSk7XHJcbiAgfVxyXG59KTtcclxuIl19