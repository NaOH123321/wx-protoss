"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("./config");
var token_1 = require("./token");
var Base = (function () {
    function Base() {
        this.baseRequestUrl = config_1.Config.restUrl;
    }
    Base.prototype.request = function (params, noRefetch) {
        var _this = this;
        if (noRefetch === void 0) { noRefetch = false; }
        var url = this.baseRequestUrl + params.url;
        if (!params.type) {
            params.type = 'GET';
        }
        wx.request({
            url: url,
            data: params.data,
            method: params.type,
            header: {
                'content-type': 'application/json',
                token: wx.getStorageSync('token')
            },
            success: function (res) {
                var code = res.statusCode.toString();
                var startChar = code.charAt(0);
                if (startChar == '2') {
                    params.sCallBack && params.sCallBack(res.data);
                }
                else {
                    if (code == '401') {
                        if (!noRefetch) {
                            _this._refetch(params);
                        }
                    }
                    _this._processError(res);
                    params.eCallBack && params.eCallBack(res.data);
                }
            },
            fail: function (err) {
                _this._processError(err);
            }
        });
    };
    Base.prototype.getDataSet = function (event, key) {
        return event.currentTarget.dataset[key];
    };
    Base.prototype._processError = function (err) {
        console.log(err);
    };
    Base.prototype._refetch = function (param) {
        var _this = this;
        var token = new token_1.Token();
        token.getTokenFromServer(function () {
            _this.request(param, true);
        });
    };
    return Base;
}());
exports.Base = Base;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtQ0FBa0M7QUFDbEMsaUNBQWdDO0FBRWhDO0lBRUU7UUFDRSxJQUFJLENBQUMsY0FBYyxHQUFHLGVBQU0sQ0FBQyxPQUFPLENBQUM7SUFDdkMsQ0FBQztJQUVELHNCQUFPLEdBQVAsVUFBUSxNQUFhLEVBQUUsU0FBaUI7UUFBeEMsaUJBcUNDO1FBckNzQiwwQkFBQSxFQUFBLGlCQUFpQjtRQUN0QyxJQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsY0FBYyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUM7UUFDN0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUU7WUFDaEIsTUFBTSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7U0FDckI7UUFFRCxFQUFFLENBQUMsT0FBTyxDQUFDO1lBQ1QsR0FBRyxFQUFFLEdBQUc7WUFDUixJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUk7WUFDakIsTUFBTSxFQUFFLE1BQU0sQ0FBQyxJQUFJO1lBQ25CLE1BQU0sRUFBRTtnQkFDTixjQUFjLEVBQUUsa0JBQWtCO2dCQUNsQyxLQUFLLEVBQUUsRUFBRSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUM7YUFDbEM7WUFDRCxPQUFPLEVBQUUsVUFBQSxHQUFHO2dCQUdWLElBQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQ3ZDLElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pDLElBQUksU0FBUyxJQUFJLEdBQUcsRUFBRTtvQkFDcEIsTUFBTSxDQUFDLFNBQVMsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDaEQ7cUJBQU07b0JBQ0wsSUFBSSxJQUFJLElBQUksS0FBSyxFQUFFO3dCQUNqQixJQUFJLENBQUMsU0FBUyxFQUFFOzRCQUNkLEtBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7eUJBQ3ZCO3FCQUNGO29CQUNELEtBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ3hCLE1BQU0sQ0FBQyxTQUFTLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQ2hEO1lBQ0gsQ0FBQztZQUNELElBQUksRUFBRSxVQUFBLEdBQUc7Z0JBRVAsS0FBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUUxQixDQUFDO1NBQ0YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELHlCQUFVLEdBQVYsVUFBVyxLQUFVLEVBQUUsR0FBVztRQUNoQyxPQUFPLEtBQUssQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRCw0QkFBYSxHQUFiLFVBQWMsR0FBUTtRQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ25CLENBQUM7SUFFRCx1QkFBUSxHQUFSLFVBQVMsS0FBWTtRQUFyQixpQkFLQztRQUpDLElBQU0sS0FBSyxHQUFHLElBQUksYUFBSyxFQUFFLENBQUM7UUFDMUIsS0FBSyxDQUFDLGtCQUFrQixDQUFDO1lBQ3ZCLEtBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzVCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNILFdBQUM7QUFBRCxDQUFDLEFBM0RELElBMkRDO0FBM0RZLG9CQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnLi9jb25maWcnO1xyXG5pbXBvcnQgeyBUb2tlbiB9IGZyb20gJy4vdG9rZW4nO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJhc2Uge1xyXG4gIGJhc2VSZXF1ZXN0VXJsOiBzdHJpbmc7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLmJhc2VSZXF1ZXN0VXJsID0gQ29uZmlnLnJlc3RVcmw7XHJcbiAgfVxyXG5cclxuICByZXF1ZXN0KHBhcmFtczogUGFyYW0sIG5vUmVmZXRjaCA9IGZhbHNlKSB7XHJcbiAgICBjb25zdCB1cmwgPSB0aGlzLmJhc2VSZXF1ZXN0VXJsICsgcGFyYW1zLnVybDtcclxuICAgIGlmICghcGFyYW1zLnR5cGUpIHtcclxuICAgICAgcGFyYW1zLnR5cGUgPSAnR0VUJztcclxuICAgIH1cclxuXHJcbiAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgdXJsOiB1cmwsXHJcbiAgICAgIGRhdGE6IHBhcmFtcy5kYXRhLFxyXG4gICAgICBtZXRob2Q6IHBhcmFtcy50eXBlLFxyXG4gICAgICBoZWFkZXI6IHtcclxuICAgICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgIHRva2VuOiB3eC5nZXRTdG9yYWdlU3luYygndG9rZW4nKVxyXG4gICAgICB9LFxyXG4gICAgICBzdWNjZXNzOiByZXMgPT4ge1xyXG4gICAgICAgIC8vIOWIpOaWreS7pTLvvIgyeHgp5byA5aS055qE54q25oCB56CB5Li65q2j56GuXHJcbiAgICAgICAgLy8g5byC5bi45LiN6KaB6L+U5Zue5Yiw5Zue6LCD5Lit77yM5bCx5ZyocmVxdWVzdOS4reWkhOeQhu+8jOiusOW9leaXpeW/l+W5tnNob3dUb2FzdOS4gOS4que7n+S4gOeahOmUmeivr+WNs+WPr1xyXG4gICAgICAgIGNvbnN0IGNvZGUgPSByZXMuc3RhdHVzQ29kZS50b1N0cmluZygpO1xyXG4gICAgICAgIGNvbnN0IHN0YXJ0Q2hhciA9IGNvZGUuY2hhckF0KDApO1xyXG4gICAgICAgIGlmIChzdGFydENoYXIgPT0gJzInKSB7XHJcbiAgICAgICAgICBwYXJhbXMuc0NhbGxCYWNrICYmIHBhcmFtcy5zQ2FsbEJhY2socmVzLmRhdGEpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpZiAoY29kZSA9PSAnNDAxJykge1xyXG4gICAgICAgICAgICBpZiAoIW5vUmVmZXRjaCkge1xyXG4gICAgICAgICAgICAgIHRoaXMuX3JlZmV0Y2gocGFyYW1zKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGhpcy5fcHJvY2Vzc0Vycm9yKHJlcyk7XHJcbiAgICAgICAgICBwYXJhbXMuZUNhbGxCYWNrICYmIHBhcmFtcy5lQ2FsbEJhY2socmVzLmRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgZmFpbDogZXJyID0+IHtcclxuICAgICAgICAvL3d4LmhpZGVOYXZpZ2F0aW9uQmFyTG9hZGluZygpO1xyXG4gICAgICAgIHRoaXMuX3Byb2Nlc3NFcnJvcihlcnIpO1xyXG4gICAgICAgIC8vIHBhcmFtcy5lQ2FsbGJhY2sgJiYgcGFyYW1zLmVDYWxsYmFjayhlcnIpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldERhdGFTZXQoZXZlbnQ6IGFueSwga2V5OiBzdHJpbmcpIHtcclxuICAgIHJldHVybiBldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXRba2V5XTtcclxuICB9XHJcblxyXG4gIF9wcm9jZXNzRXJyb3IoZXJyOiBhbnkpIHtcclxuICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgfVxyXG5cclxuICBfcmVmZXRjaChwYXJhbTogUGFyYW0pIHtcclxuICAgIGNvbnN0IHRva2VuID0gbmV3IFRva2VuKCk7XHJcbiAgICB0b2tlbi5nZXRUb2tlbkZyb21TZXJ2ZXIoKCkgPT4ge1xyXG4gICAgICB0aGlzLnJlcXVlc3QocGFyYW0sIHRydWUpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFBhcmFtIHtcclxuICB1cmw6IHN0cmluZztcclxuICB0eXBlPzogJ0dFVCcgfCAnUE9TVCc7XHJcbiAgZGF0YT86IGFueTtcclxuICBzQ2FsbEJhY2s6IEZ1bmN0aW9uO1xyXG4gIGVDYWxsQmFjaz86IEZ1bmN0aW9uO1xyXG59XHJcbiJdfQ==