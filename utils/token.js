"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("./config");
var Token = (function () {
    function Token() {
        this.verifyUrl = config_1.Config.restUrl + 'token/verify';
        this.tokenUrl = config_1.Config.restUrl + 'token/user';
    }
    Token.prototype.verify = function () {
        var token = wx.getStorageSync('token');
        if (!token) {
            this.getTokenFromServer();
        }
        else {
            this._veirfyFromServer(token);
        }
    };
    Token.prototype._veirfyFromServer = function (token) {
        var _this = this;
        wx.request({
            url: this.verifyUrl,
            method: 'POST',
            data: {
                token: token
            },
            success: function (res) {
                var data = res.data;
                var valid = data.isValid;
                if (!valid) {
                    _this.getTokenFromServer();
                }
            }
        });
    };
    Token.prototype.getTokenFromServer = function (callBack) {
        var _this = this;
        wx.login({
            success: function (res) {
                wx.request({
                    url: _this.tokenUrl,
                    method: 'POST',
                    data: {
                        code: res.code
                    },
                    success: function (res) {
                        var data = res.data;
                        wx.setStorageSync('token', data.token);
                        callBack && callBack(data.token);
                    }
                });
            }
        });
    };
    return Token;
}());
exports.Token = Token;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9rZW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0b2tlbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUlBLG1DQUFrQztBQUVsQztJQUlFO1FBQ0UsSUFBSSxDQUFDLFNBQVMsR0FBRyxlQUFNLENBQUMsT0FBTyxHQUFHLGNBQWMsQ0FBQztRQUNqRCxJQUFJLENBQUMsUUFBUSxHQUFHLGVBQU0sQ0FBQyxPQUFPLEdBQUcsWUFBWSxDQUFDO0lBQ2hELENBQUM7SUFFRCxzQkFBTSxHQUFOO1FBQ0UsSUFBTSxLQUFLLEdBQUcsRUFBRSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1YsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7U0FDM0I7YUFBTTtZQUNMLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUMvQjtJQUNILENBQUM7SUFFRCxpQ0FBaUIsR0FBakIsVUFBa0IsS0FBYTtRQUEvQixpQkFlQztRQWRDLEVBQUUsQ0FBQyxPQUFPLENBQUM7WUFDVCxHQUFHLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDbkIsTUFBTSxFQUFFLE1BQU07WUFDZCxJQUFJLEVBQUU7Z0JBQ0osS0FBSyxFQUFFLEtBQUs7YUFDYjtZQUNELE9BQU8sRUFBRSxVQUFBLEdBQUc7Z0JBQ1YsSUFBTSxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQTJCLENBQUM7Z0JBQzdDLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQzNCLElBQUksQ0FBQyxLQUFLLEVBQUU7b0JBQ1YsS0FBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7aUJBQzNCO1lBQ0gsQ0FBQztTQUNGLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxrQ0FBa0IsR0FBbEIsVUFBbUIsUUFBbUI7UUFBdEMsaUJBaUJDO1FBaEJDLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDUCxPQUFPLEVBQUUsVUFBQSxHQUFHO2dCQUNWLEVBQUUsQ0FBQyxPQUFPLENBQUM7b0JBQ1QsR0FBRyxFQUFFLEtBQUksQ0FBQyxRQUFRO29CQUNsQixNQUFNLEVBQUUsTUFBTTtvQkFDZCxJQUFJLEVBQUU7d0JBQ0osSUFBSSxFQUFFLEdBQUcsQ0FBQyxJQUFJO3FCQUNmO29CQUNELE9BQU8sRUFBRSxVQUFBLEdBQUc7d0JBQ1YsSUFBTSxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQTJCLENBQUM7d0JBQzdDLEVBQUUsQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzt3QkFDdkMsUUFBUSxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ25DLENBQUM7aUJBQ0YsQ0FBQyxDQUFDO1lBQ0wsQ0FBQztTQUNGLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDSCxZQUFDO0FBQUQsQ0FBQyxBQXJERCxJQXFEQztBQXJEWSxzQkFBSyIsInNvdXJjZXNDb250ZW50IjpbIi8vIOW8leeUqOS9v+eUqGVzNueahG1vZHVsZeW8leWFpeWSjOWumuS5iVxyXG4vLyDlhajlsYDlj5jph4/ku6VnX+W8gOWktFxyXG4vLyDnp4HmnInlh73mlbDku6Vf5byA5aS0XHJcblxyXG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICcuL2NvbmZpZyc7XHJcblxyXG5leHBvcnQgY2xhc3MgVG9rZW4ge1xyXG4gIHZlcmlmeVVybDogc3RyaW5nO1xyXG4gIHRva2VuVXJsOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy52ZXJpZnlVcmwgPSBDb25maWcucmVzdFVybCArICd0b2tlbi92ZXJpZnknO1xyXG4gICAgdGhpcy50b2tlblVybCA9IENvbmZpZy5yZXN0VXJsICsgJ3Rva2VuL3VzZXInO1xyXG4gIH1cclxuXHJcbiAgdmVyaWZ5KCkge1xyXG4gICAgY29uc3QgdG9rZW4gPSB3eC5nZXRTdG9yYWdlU3luYygndG9rZW4nKTtcclxuICAgIGlmICghdG9rZW4pIHtcclxuICAgICAgdGhpcy5nZXRUb2tlbkZyb21TZXJ2ZXIoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX3ZlaXJmeUZyb21TZXJ2ZXIodG9rZW4pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgX3ZlaXJmeUZyb21TZXJ2ZXIodG9rZW46IHN0cmluZykge1xyXG4gICAgd3gucmVxdWVzdCh7XHJcbiAgICAgIHVybDogdGhpcy52ZXJpZnlVcmwsXHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgdG9rZW46IHRva2VuXHJcbiAgICAgIH0sXHJcbiAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHJlcy5kYXRhIGFzIFJlY29yZDxzdHJpbmcsIGFueT47XHJcbiAgICAgICAgY29uc3QgdmFsaWQgPSBkYXRhLmlzVmFsaWQ7XHJcbiAgICAgICAgaWYgKCF2YWxpZCkge1xyXG4gICAgICAgICAgdGhpcy5nZXRUb2tlbkZyb21TZXJ2ZXIoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0VG9rZW5Gcm9tU2VydmVyKGNhbGxCYWNrPzogRnVuY3Rpb24pIHtcclxuICAgIHd4LmxvZ2luKHtcclxuICAgICAgc3VjY2VzczogcmVzID0+IHtcclxuICAgICAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgICAgIHVybDogdGhpcy50b2tlblVybCxcclxuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBjb2RlOiByZXMuY29kZVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSByZXMuZGF0YSBhcyBSZWNvcmQ8c3RyaW5nLCBhbnk+O1xyXG4gICAgICAgICAgICB3eC5zZXRTdG9yYWdlU3luYygndG9rZW4nLCBkYXRhLnRva2VuKTtcclxuICAgICAgICAgICAgY2FsbEJhY2sgJiYgY2FsbEJhY2soZGF0YS50b2tlbik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=