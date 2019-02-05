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
var Category = (function (_super) {
    __extends(Category, _super);
    function Category() {
        return _super.call(this) || this;
    }
    Category.prototype.getCategoryType = function (callBack) {
        var param = {
            url: "category/all",
            sCallBack: function (res) { return callBack(res); }
        };
        this.request(param);
    };
    Category.prototype.getProductsByCategory = function (id, callBack) {
        var param = {
            url: "product/by_category?id=" + id,
            sCallBack: function (res) { return callBack(res); }
        };
        this.request(param);
    };
    return Category;
}(base_1.Base));
exports.Category = Category;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnktbW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjYXRlZ29yeS1tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDQSx5Q0FBd0M7QUFFeEM7SUFBOEIsNEJBQUk7SUFDaEM7ZUFDRSxpQkFBTztJQUNULENBQUM7SUFFRCxrQ0FBZSxHQUFmLFVBQWdCLFFBQWtCO1FBQ2hDLElBQU0sS0FBSyxHQUFVO1lBQ25CLEdBQUcsRUFBRSxjQUFjO1lBQ25CLFNBQVMsRUFBRSxVQUFDLEdBQVEsSUFBSyxPQUFBLFFBQVMsQ0FBQyxHQUFHLENBQUMsRUFBZCxDQUFjO1NBQ3hDLENBQUM7UUFDRixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3RCLENBQUM7SUFFRCx3Q0FBcUIsR0FBckIsVUFBc0IsRUFBVSxFQUFFLFFBQWtCO1FBQ2xELElBQU0sS0FBSyxHQUFVO1lBQ25CLEdBQUcsRUFBRSw0QkFBMEIsRUFBSTtZQUNuQyxTQUFTLEVBQUUsVUFBQyxHQUFRLElBQUssT0FBQSxRQUFTLENBQUMsR0FBRyxDQUFDLEVBQWQsQ0FBYztTQUN4QyxDQUFDO1FBQ0YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN0QixDQUFDO0lBQ0gsZUFBQztBQUFELENBQUMsQUFwQkQsQ0FBOEIsV0FBSSxHQW9CakM7QUFwQlksNEJBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQYXJhbSB9IGZyb20gJy4vLi4vLi4vdXRpbHMvYmFzZSc7XHJcbmltcG9ydCB7IEJhc2UgfSBmcm9tICcuLi8uLi91dGlscy9iYXNlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBDYXRlZ29yeSBleHRlbmRzIEJhc2Uge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIGdldENhdGVnb3J5VHlwZShjYWxsQmFjazogRnVuY3Rpb24pIHtcclxuICAgIGNvbnN0IHBhcmFtOiBQYXJhbSA9IHtcclxuICAgICAgdXJsOiBgY2F0ZWdvcnkvYWxsYCxcclxuICAgICAgc0NhbGxCYWNrOiAocmVzOiBhbnkpID0+IGNhbGxCYWNrIShyZXMpXHJcbiAgICB9O1xyXG4gICAgdGhpcy5yZXF1ZXN0KHBhcmFtKTtcclxuICB9XHJcblxyXG4gIGdldFByb2R1Y3RzQnlDYXRlZ29yeShpZDogbnVtYmVyLCBjYWxsQmFjazogRnVuY3Rpb24pIHtcclxuICAgIGNvbnN0IHBhcmFtOiBQYXJhbSA9IHtcclxuICAgICAgdXJsOiBgcHJvZHVjdC9ieV9jYXRlZ29yeT9pZD0ke2lkfWAsXHJcbiAgICAgIHNDYWxsQmFjazogKHJlczogYW55KSA9PiBjYWxsQmFjayEocmVzKVxyXG4gICAgfTtcclxuICAgIHRoaXMucmVxdWVzdChwYXJhbSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==