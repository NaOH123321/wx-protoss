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
var Order = (function (_super) {
    __extends(Order, _super);
    function Order() {
        var _this = _super.call(this) || this;
        _this._storageKeyName = 'newOrder';
        return _this;
    }
    Order.prototype.doOrder = function (param, callBack) {
        var allParams = {
            url: 'order',
            type: 'POST',
            data: { products: param },
            sCallBack: function (res) {
                callBack(res);
            }
        };
        this.request(allParams);
    };
    Order.prototype.execSetStorageSync = function (data) {
        wx.setStorageSync(this._storageKeyName, data);
    };
    Order.prototype.hasNewOrder = function () {
        var flag = wx.getStorageSync(this._storageKeyName);
        return flag == true;
    };
    return Order;
}(base_1.Base));
exports.Order = Order;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItbW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJvcmRlci1tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5Q0FBK0M7QUFHL0M7SUFBMkIseUJBQUk7SUFHN0I7UUFBQSxZQUNFLGlCQUFPLFNBRVI7UUFEQyxLQUFJLENBQUMsZUFBZSxHQUFHLFVBQVUsQ0FBQzs7SUFDcEMsQ0FBQztJQUdELHVCQUFPLEdBQVAsVUFBUSxLQUFnQixFQUFFLFFBQWtCO1FBQzFDLElBQU0sU0FBUyxHQUFVO1lBQ3ZCLEdBQUcsRUFBRSxPQUFPO1lBQ1osSUFBSSxFQUFFLE1BQU07WUFDWixJQUFJLEVBQUUsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFO1lBQ3pCLFNBQVMsRUFBRSxVQUFDLEdBQVE7Z0JBRWxCLFFBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNqQixDQUFDO1NBQ0YsQ0FBQztRQUNGLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQWtFRCxrQ0FBa0IsR0FBbEIsVUFBbUIsSUFBUztRQUMxQixFQUFFLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUdELDJCQUFXLEdBQVg7UUFDRSxJQUFJLElBQUksR0FBRyxFQUFFLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUNuRCxPQUFPLElBQUksSUFBSSxJQUFJLENBQUM7SUFDdEIsQ0FBQztJQUNILFlBQUM7QUFBRCxDQUFDLEFBL0ZELENBQTJCLFdBQUksR0ErRjlCO0FBL0ZZLHNCQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmFzZSwgUGFyYW0gfSBmcm9tICcuLi8uLi91dGlscy9iYXNlJztcclxuaW1wb3J0IHsgUHJvZHVjdCB9IGZyb20gJy4uL3Byb2R1Y3QvcHJvZHVjdC1tb2RlbCc7XHJcblxyXG5leHBvcnQgY2xhc3MgT3JkZXIgZXh0ZW5kcyBCYXNlIHtcclxuICBfc3RvcmFnZUtleU5hbWU6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5fc3RvcmFnZUtleU5hbWUgPSAnbmV3T3JkZXInO1xyXG4gIH1cclxuXHJcbiAgLyrkuIvorqLljZUqL1xyXG4gIGRvT3JkZXIocGFyYW06IFByb2R1Y3RbXSwgY2FsbEJhY2s6IEZ1bmN0aW9uKSB7XHJcbiAgICBjb25zdCBhbGxQYXJhbXM6IFBhcmFtID0ge1xyXG4gICAgICB1cmw6ICdvcmRlcicsXHJcbiAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgZGF0YTogeyBwcm9kdWN0czogcGFyYW0gfSxcclxuICAgICAgc0NhbGxCYWNrOiAocmVzOiBhbnkpID0+IHtcclxuICAgICAgICAvLyB0aGlzLmV4ZWNTZXRTdG9yYWdlU3luYyh0cnVlKTtcclxuICAgICAgICBjYWxsQmFjayEocmVzKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIHRoaXMucmVxdWVzdChhbGxQYXJhbXMpO1xyXG4gIH1cclxuXHJcbiAgLypcclxuICAgKiDmi4notbflvq7kv6HmlK/ku5hcclxuICAgKiBwYXJhbXM6XHJcbiAgICogbm9yZGVyTnVtYmVyIC0ge2ludH0g6K6i5Y2VaWRcclxuICAgKiByZXR1cm7vvJpcclxuICAgKiBjYWxsYmFjayAtIHtvYmp9IOWbnuiwg+aWueazlSDvvIzov5Tlm57lj4LmlbAg5Y+v6IO95YC8IDA65ZWG5ZOB57y66LSn562J5Y6f5Zug5a+86Ie06K6i5Y2V5LiN6IO95pSv5LuYOyAgMTog5pSv5LuY5aSx6LSl5oiW6ICF5pSv5LuY5Y+W5raI77ybIDI65pSv5LuY5oiQ5Yqf77ybXHJcbiAgICogKi9cclxuICAvLyAgIGV4ZWNQYXkob3JkZXJOdW1iZXIsIGNhbGxiYWNrKSB7XHJcbiAgLy8gICAgIHZhciBhbGxQYXJhbXMgPSB7XHJcbiAgLy8gICAgICAgdXJsOiAncGF5L3ByZV9vcmRlcicsXHJcbiAgLy8gICAgICAgdHlwZTogJ3Bvc3QnLFxyXG4gIC8vICAgICAgIGRhdGE6IHsgaWQ6IG9yZGVyTnVtYmVyIH0sXHJcbiAgLy8gICAgICAgc0NhbGxiYWNrOiBmdW5jdGlvbihkYXRhKSB7XHJcbiAgLy8gICAgICAgICB2YXIgdGltZVN0YW1wID0gZGF0YS50aW1lU3RhbXA7XHJcbiAgLy8gICAgICAgICBpZiAodGltZVN0YW1wKSB7XHJcbiAgLy8gICAgICAgICAgIC8v5Y+v5Lul5pSv5LuYXHJcbiAgLy8gICAgICAgICAgIHd4LnJlcXVlc3RQYXltZW50KHtcclxuICAvLyAgICAgICAgICAgICB0aW1lU3RhbXA6IHRpbWVTdGFtcC50b1N0cmluZygpLFxyXG4gIC8vICAgICAgICAgICAgIG5vbmNlU3RyOiBkYXRhLm5vbmNlU3RyLFxyXG4gIC8vICAgICAgICAgICAgIHBhY2thZ2U6IGRhdGEucGFja2FnZSxcclxuICAvLyAgICAgICAgICAgICBzaWduVHlwZTogZGF0YS5zaWduVHlwZSxcclxuICAvLyAgICAgICAgICAgICBwYXlTaWduOiBkYXRhLnBheVNpZ24sXHJcbiAgLy8gICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oKSB7XHJcbiAgLy8gICAgICAgICAgICAgICBjYWxsYmFjayAmJiBjYWxsYmFjaygyKTtcclxuICAvLyAgICAgICAgICAgICB9LFxyXG4gIC8vICAgICAgICAgICAgIGZhaWw6IGZ1bmN0aW9uKCkge1xyXG4gIC8vICAgICAgICAgICAgICAgY2FsbGJhY2sgJiYgY2FsbGJhY2soMSk7XHJcbiAgLy8gICAgICAgICAgICAgfVxyXG4gIC8vICAgICAgICAgICB9KTtcclxuICAvLyAgICAgICAgIH0gZWxzZSB7XHJcbiAgLy8gICAgICAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKDApO1xyXG4gIC8vICAgICAgICAgfVxyXG4gIC8vICAgICAgIH1cclxuICAvLyAgICAgfTtcclxuICAvLyAgICAgdGhpcy5yZXF1ZXN0KGFsbFBhcmFtcyk7XHJcbiAgLy8gICB9XHJcblxyXG4gIC8q6I635b6X5omA5pyJ6K6i5Y2VLHBhZ2VJbmRleCDku44x5byA5aeLKi9cclxuICAvLyAgIGdldE9yZGVycyhwYWdlSW5kZXgsIGNhbGxiYWNrKSB7XHJcbiAgLy8gICAgIHZhciBhbGxQYXJhbXMgPSB7XHJcbiAgLy8gICAgICAgdXJsOiAnb3JkZXIvYnlfdXNlcicsXHJcbiAgLy8gICAgICAgZGF0YTogeyBwYWdlOiBwYWdlSW5kZXggfSxcclxuICAvLyAgICAgICB0eXBlOiAnZ2V0JyxcclxuICAvLyAgICAgICBzQ2FsbGJhY2s6IGZ1bmN0aW9uKGRhdGEpIHtcclxuICAvLyAgICAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKGRhdGEpOyAvLzEg5pyq5pSv5LuYICAy77yM5bey5pSv5LuYICAz77yM5bey5Y+R6LSn77yMNOW3suaUr+S7mO+8jOS9huW6k+WtmOS4jei2s1xyXG4gIC8vICAgICAgIH1cclxuICAvLyAgICAgfTtcclxuICAvLyAgICAgdGhpcy5yZXF1ZXN0KGFsbFBhcmFtcyk7XHJcbiAgLy8gICB9XHJcblxyXG4gIC8q6I635b6X6K6i5Y2V55qE5YW35L2T5YaF5a65Ki9cclxuICAvLyAgIGdldE9yZGVySW5mb0J5SWQoaWQsIGNhbGxiYWNrKSB7XHJcbiAgLy8gICAgIHZhciB0aGF0ID0gdGhpcztcclxuICAvLyAgICAgdmFyIGFsbFBhcmFtcyA9IHtcclxuICAvLyAgICAgICB1cmw6ICdvcmRlci8nICsgaWQsXHJcbiAgLy8gICAgICAgc0NhbGxiYWNrOiBmdW5jdGlvbihkYXRhKSB7XHJcbiAgLy8gICAgICAgICBjYWxsYmFjayAmJiBjYWxsYmFjayhkYXRhKTtcclxuICAvLyAgICAgICB9LFxyXG4gIC8vICAgICAgIGVDYWxsYmFjazogZnVuY3Rpb24oKSB7fVxyXG4gIC8vICAgICB9O1xyXG4gIC8vICAgICB0aGlzLnJlcXVlc3QoYWxsUGFyYW1zKTtcclxuICAvLyAgIH1cclxuXHJcbiAgLyrmnKzlnLDnvJPlrZgg5L+d5a2Y77yP5pu05pawKi9cclxuICBleGVjU2V0U3RvcmFnZVN5bmMoZGF0YTogYW55KSB7XHJcbiAgICB3eC5zZXRTdG9yYWdlU3luYyh0aGlzLl9zdG9yYWdlS2V5TmFtZSwgZGF0YSk7XHJcbiAgfVxyXG5cclxuICAvKuaYr+WQpuacieaWsOeahOiuouWNlSovXHJcbiAgaGFzTmV3T3JkZXIoKSB7XHJcbiAgICB2YXIgZmxhZyA9IHd4LmdldFN0b3JhZ2VTeW5jKHRoaXMuX3N0b3JhZ2VLZXlOYW1lKTtcclxuICAgIHJldHVybiBmbGFnID09IHRydWU7XHJcbiAgfVxyXG59XHJcbiJdfQ==