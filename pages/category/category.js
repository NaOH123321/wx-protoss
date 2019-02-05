"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var category_model_1 = require("./category-model");
var category = new category_model_1.Category();
Page({
    data: {
        categoryTypeArr: [{ img: { url: '' }, name: {} }],
        currentMenuIndex: 0,
        loadedData: [{}]
    },
    onLoad: function (options) {
        this._loadData();
    },
    _loadData: function () {
        var _this = this;
        category.getCategoryType(function (categoryData) {
            _this.setData({
                categoryTypeArr: categoryData
            });
            category.getProductsByCategory(categoryData[0].id, function (data) {
                var dataObj = {
                    products: data,
                    topImgUrl: categoryData[0].img.url,
                    title: categoryData[0].name
                };
                _this.setData({
                    categoryProducts: dataObj
                });
                _this.data.loadedData[0] = dataObj;
            });
        });
    },
    isLoadedData: function (index) {
        if (this.data.loadedData[index]) {
            return true;
        }
        return false;
    },
    changeCategory: function (event) {
        var _this = this;
        var index = category.getDataSet(event, 'index');
        var id = category.getDataSet(event, 'id');
        this.setData({
            currentMenuIndex: index
        });
        if (!this.isLoadedData(index)) {
            category.getProductsByCategory(id, function (data) {
                var dataObj = {
                    products: data,
                    topImgUrl: _this.data.categoryTypeArr[index].img.url,
                    title: _this.data.categoryTypeArr[index].name
                };
                _this.setData({
                    categoryProducts: dataObj
                });
                _this.data.loadedData[index] = dataObj;
            });
        }
        else {
            this.setData({
                categoryProducts: this.data.loadedData[index]
            });
        }
    },
    onProductsItemTap: function (event) {
        var id = category.getDataSet(event, 'id');
        wx.navigateTo({
            url: "../product/product?id=" + id
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjYXRlZ29yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG1EQUE0QztBQUU1QyxJQUFNLFFBQVEsR0FBRyxJQUFJLHlCQUFRLEVBQUUsQ0FBQztBQUVoQyxJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixlQUFlLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLENBQUM7UUFDakQsZ0JBQWdCLEVBQUUsQ0FBQztRQUNuQixVQUFVLEVBQUUsQ0FBQyxFQUFFLENBQUM7S0FDakI7SUFDRCxNQUFNLEVBQUUsVUFBUyxPQUFZO1FBQzNCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRUQsU0FBUyxFQUFFO1FBQUEsaUJBb0JWO1FBbkJDLFFBQVEsQ0FBQyxlQUFlLENBQUMsVUFBQyxZQUFpQjtZQUN6QyxLQUFJLENBQUMsT0FBUSxDQUFDO2dCQUNaLGVBQWUsRUFBRSxZQUFZO2FBQzlCLENBQUMsQ0FBQztZQUVILFFBQVEsQ0FBQyxxQkFBcUIsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLFVBQUMsSUFBUztnQkFDM0QsSUFBTSxPQUFPLEdBQUc7b0JBQ2QsUUFBUSxFQUFFLElBQUk7b0JBQ2QsU0FBUyxFQUFFLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRztvQkFDbEMsS0FBSyxFQUFFLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJO2lCQUM1QixDQUFDO2dCQUVGLEtBQUksQ0FBQyxPQUFRLENBQUM7b0JBQ1osZ0JBQWdCLEVBQUUsT0FBTztpQkFDMUIsQ0FBQyxDQUFDO2dCQUVILEtBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQztZQUNwQyxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUdELFlBQVksRUFBRSxVQUFTLEtBQWE7UUFDbEMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUMvQixPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRUQsY0FBYyxFQUFFLFVBQVMsS0FBVTtRQUFuQixpQkEyQmY7UUExQkMsSUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDbEQsSUFBTSxFQUFFLEdBQUcsUUFBUSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFNUMsSUFBSSxDQUFDLE9BQVEsQ0FBQztZQUNaLGdCQUFnQixFQUFFLEtBQUs7U0FDeEIsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDN0IsUUFBUSxDQUFDLHFCQUFxQixDQUFDLEVBQUUsRUFBRSxVQUFDLElBQVM7Z0JBQzNDLElBQU0sT0FBTyxHQUFHO29CQUNkLFFBQVEsRUFBRSxJQUFJO29CQUNkLFNBQVMsRUFBRSxLQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRztvQkFDbkQsS0FBSyxFQUFFLEtBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUk7aUJBQzdDLENBQUM7Z0JBRUYsS0FBSSxDQUFDLE9BQVEsQ0FBQztvQkFDWixnQkFBZ0IsRUFBRSxPQUFPO2lCQUMxQixDQUFDLENBQUM7Z0JBRUgsS0FBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEdBQUcsT0FBTyxDQUFDO1lBQ3hDLENBQUMsQ0FBQyxDQUFDO1NBQ0o7YUFBTTtZQUNMLElBQUksQ0FBQyxPQUFRLENBQUM7Z0JBQ1osZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDO2FBQzlDLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQztJQUVELGlCQUFpQixFQUFFLFVBQVMsS0FBVTtRQUNwQyxJQUFNLEVBQUUsR0FBRyxRQUFRLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM1QyxFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1osR0FBRyxFQUFFLDJCQUF5QixFQUFJO1NBQ25DLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYXRlZ29yeSB9IGZyb20gJy4vY2F0ZWdvcnktbW9kZWwnO1xyXG5cclxuY29uc3QgY2F0ZWdvcnkgPSBuZXcgQ2F0ZWdvcnkoKTtcclxuXHJcblBhZ2Uoe1xyXG4gIGRhdGE6IHtcclxuICAgIGNhdGVnb3J5VHlwZUFycjogW3sgaW1nOiB7IHVybDogJycgfSwgbmFtZToge30gfV0sXHJcbiAgICBjdXJyZW50TWVudUluZGV4OiAwLFxyXG4gICAgbG9hZGVkRGF0YTogW3t9XVxyXG4gIH0sXHJcbiAgb25Mb2FkOiBmdW5jdGlvbihvcHRpb25zOiBhbnkpIHtcclxuICAgIHRoaXMuX2xvYWREYXRhKCk7XHJcbiAgfSxcclxuXHJcbiAgX2xvYWREYXRhOiBmdW5jdGlvbigpIHtcclxuICAgIGNhdGVnb3J5LmdldENhdGVnb3J5VHlwZSgoY2F0ZWdvcnlEYXRhOiBhbnkpID0+IHtcclxuICAgICAgdGhpcy5zZXREYXRhISh7XHJcbiAgICAgICAgY2F0ZWdvcnlUeXBlQXJyOiBjYXRlZ29yeURhdGFcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBjYXRlZ29yeS5nZXRQcm9kdWN0c0J5Q2F0ZWdvcnkoY2F0ZWdvcnlEYXRhWzBdLmlkLCAoZGF0YTogYW55KSA9PiB7XHJcbiAgICAgICAgY29uc3QgZGF0YU9iaiA9IHtcclxuICAgICAgICAgIHByb2R1Y3RzOiBkYXRhLFxyXG4gICAgICAgICAgdG9wSW1nVXJsOiBjYXRlZ29yeURhdGFbMF0uaW1nLnVybCxcclxuICAgICAgICAgIHRpdGxlOiBjYXRlZ29yeURhdGFbMF0ubmFtZVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuc2V0RGF0YSEoe1xyXG4gICAgICAgICAgY2F0ZWdvcnlQcm9kdWN0czogZGF0YU9ialxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmRhdGEubG9hZGVkRGF0YVswXSA9IGRhdGFPYmo7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgLy8g5Yik5pat5b2T5YmN5YiG57G75LiL55qE5ZWG5ZOB5pWw5o2u5piv5ZCm5bey57uP6KKr5Yqg6L296L+HXHJcbiAgaXNMb2FkZWREYXRhOiBmdW5jdGlvbihpbmRleDogbnVtYmVyKSB7XHJcbiAgICBpZiAodGhpcy5kYXRhLmxvYWRlZERhdGFbaW5kZXhdKSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH0sXHJcblxyXG4gIGNoYW5nZUNhdGVnb3J5OiBmdW5jdGlvbihldmVudDogYW55KSB7XHJcbiAgICBjb25zdCBpbmRleCA9IGNhdGVnb3J5LmdldERhdGFTZXQoZXZlbnQsICdpbmRleCcpO1xyXG4gICAgY29uc3QgaWQgPSBjYXRlZ29yeS5nZXREYXRhU2V0KGV2ZW50LCAnaWQnKTtcclxuXHJcbiAgICB0aGlzLnNldERhdGEhKHtcclxuICAgICAgY3VycmVudE1lbnVJbmRleDogaW5kZXhcclxuICAgIH0pO1xyXG5cclxuICAgIGlmICghdGhpcy5pc0xvYWRlZERhdGEoaW5kZXgpKSB7XHJcbiAgICAgIGNhdGVnb3J5LmdldFByb2R1Y3RzQnlDYXRlZ29yeShpZCwgKGRhdGE6IGFueSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGRhdGFPYmogPSB7XHJcbiAgICAgICAgICBwcm9kdWN0czogZGF0YSxcclxuICAgICAgICAgIHRvcEltZ1VybDogdGhpcy5kYXRhLmNhdGVnb3J5VHlwZUFycltpbmRleF0uaW1nLnVybCxcclxuICAgICAgICAgIHRpdGxlOiB0aGlzLmRhdGEuY2F0ZWdvcnlUeXBlQXJyW2luZGV4XS5uYW1lXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXREYXRhISh7XHJcbiAgICAgICAgICBjYXRlZ29yeVByb2R1Y3RzOiBkYXRhT2JqXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuZGF0YS5sb2FkZWREYXRhW2luZGV4XSA9IGRhdGFPYmo7XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZXREYXRhISh7XHJcbiAgICAgICAgY2F0ZWdvcnlQcm9kdWN0czogdGhpcy5kYXRhLmxvYWRlZERhdGFbaW5kZXhdXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIG9uUHJvZHVjdHNJdGVtVGFwOiBmdW5jdGlvbihldmVudDogYW55KSB7XHJcbiAgICBjb25zdCBpZCA9IGNhdGVnb3J5LmdldERhdGFTZXQoZXZlbnQsICdpZCcpO1xyXG4gICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgIHVybDogYC4uL3Byb2R1Y3QvcHJvZHVjdD9pZD0ke2lkfWBcclxuICAgIH0pO1xyXG4gIH1cclxufSk7XHJcbiJdfQ==