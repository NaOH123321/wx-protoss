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
var Product = (function (_super) {
    __extends(Product, _super);
    function Product() {
        return _super.call(this) || this;
    }
    Product.prototype.getDetailInfo = function (id, callBack) {
        var param = {
            url: "product/" + id,
            sCallBack: function (res) { return callBack(res); }
        };
        this.request(param);
    };
    return Product;
}(base_1.Base));
exports.Product = Product;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInByb2R1Y3QtbW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EseUNBQXdDO0FBRXhDO0lBQTZCLDJCQUFJO0lBQy9CO2VBQ0UsaUJBQU87SUFDVCxDQUFDO0lBRUQsK0JBQWEsR0FBYixVQUFjLEVBQVUsRUFBRSxRQUFrQjtRQUMxQyxJQUFNLEtBQUssR0FBVTtZQUNuQixHQUFHLEVBQUUsYUFBVyxFQUFJO1lBQ3BCLFNBQVMsRUFBRSxVQUFDLEdBQVEsSUFBSyxPQUFBLFFBQVMsQ0FBQyxHQUFHLENBQUMsRUFBZCxDQUFjO1NBQ3hDLENBQUM7UUFDRixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3RCLENBQUM7SUFDSCxjQUFDO0FBQUQsQ0FBQyxBQVpELENBQTZCLFdBQUksR0FZaEM7QUFaWSwwQkFBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBhcmFtIH0gZnJvbSBcIi4vLi4vLi4vdXRpbHMvYmFzZVwiO1xyXG5pbXBvcnQgeyBCYXNlIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2Jhc2VcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQcm9kdWN0IGV4dGVuZHMgQmFzZSB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgZ2V0RGV0YWlsSW5mbyhpZDogbnVtYmVyLCBjYWxsQmFjazogRnVuY3Rpb24pIHtcclxuICAgIGNvbnN0IHBhcmFtOiBQYXJhbSA9IHtcclxuICAgICAgdXJsOiBgcHJvZHVjdC8ke2lkfWAsXHJcbiAgICAgIHNDYWxsQmFjazogKHJlczogYW55KSA9PiBjYWxsQmFjayEocmVzKVxyXG4gICAgfTtcclxuICAgIHRoaXMucmVxdWVzdChwYXJhbSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==