"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var theme_model_1 = require("./theme-model");
var theme = new theme_model_1.Theme();
Page({
    data: {
        id: 0,
        name: ""
    },
    onLoad: function (options) {
        this.data.id = options.id;
        this.data.name = options.name;
        this._loadData();
    },
    onReady: function () {
        wx.setNavigationBarTitle({
            title: this.data.name
        });
    },
    _loadData: function () {
        var _this = this;
        theme.getThemeData(this.data.id, function (data) {
            _this.setData({
                themeInfo: data
            });
        });
    },
    onProductsItemTap: function (event) {
        var id = theme.getDataSet(event, "id");
        wx.navigateTo({
            url: "../product/product?id=" + id
        });
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0aGVtZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZDQUFzQztBQUV0QyxJQUFNLEtBQUssR0FBRyxJQUFJLG1CQUFLLEVBQUUsQ0FBQztBQUUxQixJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixFQUFFLEVBQUUsQ0FBQztRQUNMLElBQUksRUFBRSxFQUFFO0tBQ1Q7SUFFRCxNQUFNLEVBQUUsVUFBUyxPQUFZO1FBQzNCLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLE9BQU8sQ0FBQyxFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQztRQUM5QixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUVELE9BQU8sRUFBRTtRQUNQLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztZQUN2QixLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO1NBQ3RCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxTQUFTLEVBQUU7UUFBQSxpQkFNVjtRQUxDLEtBQUssQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsVUFBQyxJQUFTO1lBQ3pDLEtBQUksQ0FBQyxPQUFRLENBQUM7Z0JBQ1osU0FBUyxFQUFFLElBQUk7YUFDaEIsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsaUJBQWlCLEVBQUUsVUFBUyxLQUFVO1FBQ3BDLElBQU0sRUFBRSxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3pDLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDWixHQUFHLEVBQUUsMkJBQXlCLEVBQUk7U0FDbkMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRoZW1lIH0gZnJvbSBcIi4vdGhlbWUtbW9kZWxcIjtcclxuXHJcbmNvbnN0IHRoZW1lID0gbmV3IFRoZW1lKCk7XHJcblxyXG5QYWdlKHtcclxuICBkYXRhOiB7XHJcbiAgICBpZDogMCxcclxuICAgIG5hbWU6IFwiXCJcclxuICB9LFxyXG5cclxuICBvbkxvYWQ6IGZ1bmN0aW9uKG9wdGlvbnM6IGFueSkge1xyXG4gICAgdGhpcy5kYXRhLmlkID0gb3B0aW9ucy5pZDtcclxuICAgIHRoaXMuZGF0YS5uYW1lID0gb3B0aW9ucy5uYW1lO1xyXG4gICAgdGhpcy5fbG9hZERhdGEoKTtcclxuICB9LFxyXG5cclxuICBvblJlYWR5OiBmdW5jdGlvbigpIHtcclxuICAgIHd4LnNldE5hdmlnYXRpb25CYXJUaXRsZSh7XHJcbiAgICAgIHRpdGxlOiB0aGlzLmRhdGEubmFtZVxyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgX2xvYWREYXRhOiBmdW5jdGlvbigpIHtcclxuICAgIHRoZW1lLmdldFRoZW1lRGF0YSh0aGlzLmRhdGEuaWQsIChkYXRhOiBhbnkpID0+IHtcclxuICAgICAgdGhpcy5zZXREYXRhISh7XHJcbiAgICAgICAgdGhlbWVJbmZvOiBkYXRhXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgb25Qcm9kdWN0c0l0ZW1UYXA6IGZ1bmN0aW9uKGV2ZW50OiBhbnkpIHtcclxuICAgIGNvbnN0IGlkID0gdGhlbWUuZ2V0RGF0YVNldChldmVudCwgXCJpZFwiKTtcclxuICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICB1cmw6IGAuLi9wcm9kdWN0L3Byb2R1Y3Q/aWQ9JHtpZH1gXHJcbiAgICB9KTtcclxuICB9LFxyXG59KTtcclxuIl19