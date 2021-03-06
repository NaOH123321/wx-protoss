"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var theme_model_1 = require("./theme-model");
var theme = new theme_model_1.Theme();
Page({
    data: {
        id: 0,
        name: ''
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
        var id = theme.getDataSet(event, 'id');
        wx.navigateTo({
            url: "../product/product?id=" + id
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0aGVtZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZDQUFzQztBQUV0QyxJQUFNLEtBQUssR0FBRyxJQUFJLG1CQUFLLEVBQUUsQ0FBQztBQUUxQixJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixFQUFFLEVBQUUsQ0FBQztRQUNMLElBQUksRUFBRSxFQUFFO0tBQ1Q7SUFFRCxNQUFNLEVBQUUsVUFBUyxPQUFZO1FBQzNCLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLE9BQU8sQ0FBQyxFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQztRQUM5QixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUVELE9BQU8sRUFBRTtRQUNQLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztZQUN2QixLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO1NBQ3RCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxTQUFTLEVBQUU7UUFBQSxpQkFNVjtRQUxDLEtBQUssQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsVUFBQyxJQUFTO1lBQ3pDLEtBQUksQ0FBQyxPQUFRLENBQUM7Z0JBQ1osU0FBUyxFQUFFLElBQUk7YUFDaEIsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsaUJBQWlCLEVBQUUsVUFBUyxLQUFVO1FBQ3BDLElBQU0sRUFBRSxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3pDLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDWixHQUFHLEVBQUUsMkJBQXlCLEVBQUk7U0FDbkMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRoZW1lIH0gZnJvbSAnLi90aGVtZS1tb2RlbCc7XHJcblxyXG5jb25zdCB0aGVtZSA9IG5ldyBUaGVtZSgpO1xyXG5cclxuUGFnZSh7XHJcbiAgZGF0YToge1xyXG4gICAgaWQ6IDAsXHJcbiAgICBuYW1lOiAnJ1xyXG4gIH0sXHJcblxyXG4gIG9uTG9hZDogZnVuY3Rpb24ob3B0aW9uczogYW55KSB7XHJcbiAgICB0aGlzLmRhdGEuaWQgPSBvcHRpb25zLmlkO1xyXG4gICAgdGhpcy5kYXRhLm5hbWUgPSBvcHRpb25zLm5hbWU7XHJcbiAgICB0aGlzLl9sb2FkRGF0YSgpO1xyXG4gIH0sXHJcblxyXG4gIG9uUmVhZHk6IGZ1bmN0aW9uKCkge1xyXG4gICAgd3guc2V0TmF2aWdhdGlvbkJhclRpdGxlKHtcclxuICAgICAgdGl0bGU6IHRoaXMuZGF0YS5uYW1lXHJcbiAgICB9KTtcclxuICB9LFxyXG5cclxuICBfbG9hZERhdGE6IGZ1bmN0aW9uKCkge1xyXG4gICAgdGhlbWUuZ2V0VGhlbWVEYXRhKHRoaXMuZGF0YS5pZCwgKGRhdGE6IGFueSkgPT4ge1xyXG4gICAgICB0aGlzLnNldERhdGEhKHtcclxuICAgICAgICB0aGVtZUluZm86IGRhdGFcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9LFxyXG5cclxuICBvblByb2R1Y3RzSXRlbVRhcDogZnVuY3Rpb24oZXZlbnQ6IGFueSkge1xyXG4gICAgY29uc3QgaWQgPSB0aGVtZS5nZXREYXRhU2V0KGV2ZW50LCAnaWQnKTtcclxuICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICB1cmw6IGAuLi9wcm9kdWN0L3Byb2R1Y3Q/aWQ9JHtpZH1gXHJcbiAgICB9KTtcclxuICB9XHJcbn0pO1xyXG4iXX0=