"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("./config");
var Base = (function () {
    function Base() {
        this.baseRequestUrl = config_1.Config.restUrl;
    }
    Base.prototype.request = function (params) {
        var url = this.baseRequestUrl + params.url;
        if (!params.type) {
            params.type = "GET";
        }
        wx.request({
            url: url,
            data: params.data,
            method: params.type,
            header: {
                "content-type": "application/json",
                token: wx.getStorageSync("token")
            },
            success: function (res) {
                params.sCallBack && params.sCallBack(res.data);
            }
        });
    };
    return Base;
}());
exports.Base = Base;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtQ0FBa0M7QUFFbEM7SUFFRTtRQUNFLElBQUksQ0FBQyxjQUFjLEdBQUcsZUFBTSxDQUFDLE9BQU8sQ0FBQztJQUN2QyxDQUFDO0lBRUQsc0JBQU8sR0FBUCxVQUFRLE1BQWE7UUFDbkIsSUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLGNBQWMsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDO1FBQzdDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFO1lBQ2hCLE1BQU0sQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO1NBQ3JCO1FBRUQsRUFBRSxDQUFDLE9BQU8sQ0FBQztZQUNULEdBQUcsRUFBRSxHQUFHO1lBQ1IsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJO1lBQ2pCLE1BQU0sRUFBRSxNQUFNLENBQUMsSUFBSTtZQUNuQixNQUFNLEVBQUU7Z0JBQ04sY0FBYyxFQUFFLGtCQUFrQjtnQkFDbEMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDO2FBQ2xDO1lBQ0QsT0FBTyxFQUFFLFVBQUEsR0FBRztnQkFDVixNQUFNLENBQUMsU0FBUyxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2pELENBQUM7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0gsV0FBQztBQUFELENBQUMsQUF6QkQsSUF5QkM7QUF6Qlksb0JBQUkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25maWcgfSBmcm9tIFwiLi9jb25maWdcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBCYXNlIHtcclxuICBiYXNlUmVxdWVzdFVybDogc3RyaW5nO1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5iYXNlUmVxdWVzdFVybCA9IENvbmZpZy5yZXN0VXJsO1xyXG4gIH1cclxuXHJcbiAgcmVxdWVzdChwYXJhbXM6IFBhcmFtKSB7XHJcbiAgICBjb25zdCB1cmwgPSB0aGlzLmJhc2VSZXF1ZXN0VXJsICsgcGFyYW1zLnVybDtcclxuICAgIGlmICghcGFyYW1zLnR5cGUpIHtcclxuICAgICAgcGFyYW1zLnR5cGUgPSBcIkdFVFwiO1xyXG4gICAgfVxyXG5cclxuICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICB1cmw6IHVybCxcclxuICAgICAgZGF0YTogcGFyYW1zLmRhdGEsXHJcbiAgICAgIG1ldGhvZDogcGFyYW1zLnR5cGUsXHJcbiAgICAgIGhlYWRlcjoge1xyXG4gICAgICAgIFwiY29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIHRva2VuOiB3eC5nZXRTdG9yYWdlU3luYyhcInRva2VuXCIpXHJcbiAgICAgIH0sXHJcbiAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XHJcbiAgICAgICAgcGFyYW1zLnNDYWxsQmFjayAmJiBwYXJhbXMuc0NhbGxCYWNrKHJlcy5kYXRhKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFBhcmFtIHtcclxuICB1cmw6IHN0cmluZztcclxuICB0eXBlPzogXCJHRVRcIiB8IFwiUE9TVFwiO1xyXG4gIGRhdGE/OiBhbnk7XHJcbiAgc0NhbGxCYWNrOiBGdW5jdGlvbjtcclxufVxyXG4iXX0=