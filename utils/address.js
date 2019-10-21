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
var base_1 = require("./base");
var Address = (function (_super) {
    __extends(Address, _super);
    function Address() {
        return _super.call(this) || this;
    }
    Address.prototype.getAddress = function (callback) {
        var _this = this;
        var param = {
            url: 'address',
            sCallBack: function (res) {
                if (res != null) {
                    res.totalDetail = _this.setAddressInfo(res);
                    callback(res);
                }
            }
        };
        this.request(param);
    };
    Address.prototype.submitAddress = function (data, callback) {
        console.log(data);
        var param = {
            url: 'address',
            type: 'POST',
            data: data,
            sCallBack: function (res) {
                callback(true, res);
            },
            eCallBack: function (res) {
                callback(false, res);
            }
        };
        this.request(param);
    };
    Address.prototype.isCenterCity = function (name) {
        var centerCitys = ['北京市', '天津市', '上海市', '重庆市'];
        var flag = centerCitys.indexOf(name) >= 0;
        return flag;
    };
    Address.prototype.setAddressInfo = function (res) {
        var province = res.provinceName || res.province;
        var city = res.cityName || res.city;
        var country = res.countyName || res.country;
        var detail = res.detailInfo || res.detail;
        var totalDetail = city + country + detail;
        if (!this.isCenterCity(province)) {
            totalDetail = province + totalDetail;
        }
        return totalDetail;
    };
    return Address;
}(base_1.Base));
exports.Address = Address;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFkZHJlc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0JBQXFDO0FBRXJDO0lBQTZCLDJCQUFJO0lBQy9CO2VBQ0UsaUJBQU87SUFDVCxDQUFDO0lBR0QsNEJBQVUsR0FBVixVQUFXLFFBQWtCO1FBQTdCLGlCQVdDO1FBVkMsSUFBTSxLQUFLLEdBQVU7WUFDbkIsR0FBRyxFQUFFLFNBQVM7WUFDZCxTQUFTLEVBQUUsVUFBQyxHQUFnQjtnQkFDMUIsSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFO29CQUNmLEdBQUcsQ0FBQyxXQUFXLEdBQUcsS0FBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDM0MsUUFBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2lCQUNoQjtZQUNILENBQUM7U0FDRixDQUFDO1FBQ0YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN0QixDQUFDO0lBR0QsK0JBQWEsR0FBYixVQUFjLElBQWlCLEVBQUUsUUFBa0I7UUFDakQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsQixJQUFJLEtBQUssR0FBVTtZQUNqQixHQUFHLEVBQUUsU0FBUztZQUNkLElBQUksRUFBRSxNQUFNO1lBQ1osSUFBSSxFQUFFLElBQUk7WUFDVixTQUFTLEVBQUUsVUFBQyxHQUFRO2dCQUNsQixRQUFTLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQ3ZCLENBQUM7WUFDRCxTQUFTLEVBQUUsVUFBQyxHQUFRO2dCQUNsQixRQUFTLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQ3hCLENBQUM7U0FDRixDQUFDO1FBQ0YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN0QixDQUFDO0lBR0QsOEJBQVksR0FBWixVQUFhLElBQVk7UUFDdkIsSUFBTSxXQUFXLEdBQUcsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNqRCxJQUFNLElBQUksR0FBRyxXQUFXLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1QyxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFNRCxnQ0FBYyxHQUFkLFVBQWUsR0FBZ0M7UUFDN0MsSUFBTSxRQUFRLEdBQ1gsR0FBcUIsQ0FBQyxZQUFZLElBQUssR0FBbUIsQ0FBQyxRQUFRLENBQUM7UUFDdkUsSUFBTSxJQUFJLEdBQUksR0FBcUIsQ0FBQyxRQUFRLElBQUssR0FBbUIsQ0FBQyxJQUFJLENBQUM7UUFDMUUsSUFBTSxPQUFPLEdBQ1YsR0FBcUIsQ0FBQyxVQUFVLElBQUssR0FBbUIsQ0FBQyxPQUFPLENBQUM7UUFDcEUsSUFBTSxNQUFNLEdBQ1QsR0FBcUIsQ0FBQyxVQUFVLElBQUssR0FBbUIsQ0FBQyxNQUFNLENBQUM7UUFDbkUsSUFBSSxXQUFXLEdBQUcsSUFBSSxHQUFHLE9BQU8sR0FBRyxNQUFNLENBQUM7UUFLMUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDaEMsV0FBVyxHQUFHLFFBQVEsR0FBRyxXQUFXLENBQUM7U0FDdEM7UUFDRCxPQUFPLFdBQVcsQ0FBQztJQUNyQixDQUFDO0lBQ0gsY0FBQztBQUFELENBQUMsQUFqRUQsQ0FBNkIsV0FBSSxHQWlFaEM7QUFqRVksMEJBQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCYXNlLCBQYXJhbSB9IGZyb20gJy4vYmFzZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgQWRkcmVzcyBleHRlbmRzIEJhc2Uge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIC8q6I635b6X5oiR6Ieq5bex55qE5pS26LSn5Zyw5Z2AKi9cclxuICBnZXRBZGRyZXNzKGNhbGxiYWNrOiBGdW5jdGlvbikge1xyXG4gICAgY29uc3QgcGFyYW06IFBhcmFtID0ge1xyXG4gICAgICB1cmw6ICdhZGRyZXNzJyxcclxuICAgICAgc0NhbGxCYWNrOiAocmVzOiBBZGRyZXNzSXRlbSkgPT4ge1xyXG4gICAgICAgIGlmIChyZXMgIT0gbnVsbCkge1xyXG4gICAgICAgICAgcmVzLnRvdGFsRGV0YWlsID0gdGhpcy5zZXRBZGRyZXNzSW5mbyhyZXMpO1xyXG4gICAgICAgICAgY2FsbGJhY2shKHJlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgdGhpcy5yZXF1ZXN0KHBhcmFtKTtcclxuICB9XHJcblxyXG4gIC8q5pu05paw5L+d5a2Y5Zyw5Z2AKi9cclxuICBzdWJtaXRBZGRyZXNzKGRhdGE6IEFkZHJlc3NJdGVtLCBjYWxsYmFjazogRnVuY3Rpb24pIHtcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgdmFyIHBhcmFtOiBQYXJhbSA9IHtcclxuICAgICAgdXJsOiAnYWRkcmVzcycsXHJcbiAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgZGF0YTogZGF0YSxcclxuICAgICAgc0NhbGxCYWNrOiAocmVzOiBhbnkpID0+IHtcclxuICAgICAgICBjYWxsYmFjayEodHJ1ZSwgcmVzKTtcclxuICAgICAgfSxcclxuICAgICAgZUNhbGxCYWNrOiAocmVzOiBhbnkpID0+IHtcclxuICAgICAgICBjYWxsYmFjayEoZmFsc2UsIHJlcyk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICB0aGlzLnJlcXVlc3QocGFyYW0pO1xyXG4gIH1cclxuXHJcbiAgLyrmmK/lkKbkuLrnm7TovpbluIIqL1xyXG4gIGlzQ2VudGVyQ2l0eShuYW1lOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IGNlbnRlckNpdHlzID0gWyfljJfkuqzluIInLCAn5aSp5rSl5biCJywgJ+S4iua1t+W4gicsICfph43luobluIInXTtcclxuICAgIGNvbnN0IGZsYWcgPSBjZW50ZXJDaXR5cy5pbmRleE9mKG5hbWUpID49IDA7XHJcbiAgICByZXR1cm4gZmxhZztcclxuICB9XHJcblxyXG4gIC8qXHJcbiAgICrmoLnmja7nnIHluILljr/kv6Hmga/nu4Too4XlnLDlnYDkv6Hmga9cclxuICAgKiBwcm92aW5jZU5hbWUgLCBwcm92aW5jZSDliY3ogIXkuLog5b6u5L+h6YCJ5oup5o6n5Lu26L+U5Zue57uT5p6c77yM5ZCO6ICF5Li65p+l6K+i5Zyw5Z2A5pe277yM6Ieq5bex5pyN5Yqh5Zmo5ZCO5Y+w6L+U5Zue57uT5p6cXHJcbiAgICovXHJcbiAgc2V0QWRkcmVzc0luZm8ocmVzOiBXeEFkZHJlc3NJdGVtIHwgQWRkcmVzc0l0ZW0pOiBzdHJpbmcge1xyXG4gICAgY29uc3QgcHJvdmluY2UgPVxyXG4gICAgICAocmVzIGFzIFd4QWRkcmVzc0l0ZW0pLnByb3ZpbmNlTmFtZSB8fCAocmVzIGFzIEFkZHJlc3NJdGVtKS5wcm92aW5jZTtcclxuICAgIGNvbnN0IGNpdHkgPSAocmVzIGFzIFd4QWRkcmVzc0l0ZW0pLmNpdHlOYW1lIHx8IChyZXMgYXMgQWRkcmVzc0l0ZW0pLmNpdHk7XHJcbiAgICBjb25zdCBjb3VudHJ5ID1cclxuICAgICAgKHJlcyBhcyBXeEFkZHJlc3NJdGVtKS5jb3VudHlOYW1lIHx8IChyZXMgYXMgQWRkcmVzc0l0ZW0pLmNvdW50cnk7XHJcbiAgICBjb25zdCBkZXRhaWwgPVxyXG4gICAgICAocmVzIGFzIFd4QWRkcmVzc0l0ZW0pLmRldGFpbEluZm8gfHwgKHJlcyBhcyBBZGRyZXNzSXRlbSkuZGV0YWlsO1xyXG4gICAgbGV0IHRvdGFsRGV0YWlsID0gY2l0eSArIGNvdW50cnkgKyBkZXRhaWw7XHJcblxyXG4gICAgLy8gY29uc29sZS5sb2cocmVzKTtcclxuXHJcbiAgICAvL+ebtOi+luW4gu+8jOWPluWHuuecgemDqOWIhlxyXG4gICAgaWYgKCF0aGlzLmlzQ2VudGVyQ2l0eShwcm92aW5jZSkpIHtcclxuICAgICAgdG90YWxEZXRhaWwgPSBwcm92aW5jZSArIHRvdGFsRGV0YWlsO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRvdGFsRGV0YWlsO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBZGRyZXNzSXRlbSB7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIHByb3ZpbmNlOiBzdHJpbmc7XHJcbiAgY2l0eTogc3RyaW5nO1xyXG4gIGNvdW50cnk6IHN0cmluZztcclxuICBkZXRhaWw6IHN0cmluZztcclxuICBtb2JpbGU6IHN0cmluZztcclxuICB0b3RhbERldGFpbD86IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBXeEFkZHJlc3NJdGVtIHtcclxuICBwcm92aW5jZU5hbWU6IHN0cmluZztcclxuICBjaXR5TmFtZTogc3RyaW5nO1xyXG4gIGNvdW50eU5hbWU6IHN0cmluZztcclxuICBkZXRhaWxJbmZvOiBzdHJpbmc7XHJcbiAgdXNlck5hbWU6IHN0cmluZztcclxuICB0ZWxOdW1iZXI6IHN0cmluZztcclxufVxyXG4iXX0=