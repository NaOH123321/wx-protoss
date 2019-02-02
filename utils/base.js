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
    Base.prototype.getDataSet = function (event, key) {
        return event.currentTarget.dataset[key];
    };
    return Base;
}());
exports.Base = Base;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtQ0FBa0M7QUFFbEM7SUFFRTtRQUNFLElBQUksQ0FBQyxjQUFjLEdBQUcsZUFBTSxDQUFDLE9BQU8sQ0FBQztJQUN2QyxDQUFDO0lBRUQsc0JBQU8sR0FBUCxVQUFRLE1BQWE7UUFDbkIsSUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLGNBQWMsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDO1FBQzdDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFO1lBQ2hCLE1BQU0sQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO1NBQ3JCO1FBRUQsRUFBRSxDQUFDLE9BQU8sQ0FBQztZQUNULEdBQUcsRUFBRSxHQUFHO1lBQ1IsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJO1lBQ2pCLE1BQU0sRUFBRSxNQUFNLENBQUMsSUFBSTtZQUNuQixNQUFNLEVBQUU7Z0JBQ04sY0FBYyxFQUFFLGtCQUFrQjtnQkFDbEMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDO2FBQ2xDO1lBQ0QsT0FBTyxFQUFFLFVBQUEsR0FBRztnQkFDVixNQUFNLENBQUMsU0FBUyxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2pELENBQUM7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQseUJBQVUsR0FBVixVQUFXLEtBQVUsRUFBRSxHQUFXO1FBQ2hDLE9BQU8sS0FBSyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUNILFdBQUM7QUFBRCxDQUFDLEFBN0JELElBNkJDO0FBN0JZLG9CQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSBcIi4vY29uZmlnXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQmFzZSB7XHJcbiAgYmFzZVJlcXVlc3RVcmw6IHN0cmluZztcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuYmFzZVJlcXVlc3RVcmwgPSBDb25maWcucmVzdFVybDtcclxuICB9XHJcblxyXG4gIHJlcXVlc3QocGFyYW1zOiBQYXJhbSkge1xyXG4gICAgY29uc3QgdXJsID0gdGhpcy5iYXNlUmVxdWVzdFVybCArIHBhcmFtcy51cmw7XHJcbiAgICBpZiAoIXBhcmFtcy50eXBlKSB7XHJcbiAgICAgIHBhcmFtcy50eXBlID0gXCJHRVRcIjtcclxuICAgIH1cclxuXHJcbiAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgdXJsOiB1cmwsXHJcbiAgICAgIGRhdGE6IHBhcmFtcy5kYXRhLFxyXG4gICAgICBtZXRob2Q6IHBhcmFtcy50eXBlLFxyXG4gICAgICBoZWFkZXI6IHtcclxuICAgICAgICBcImNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICB0b2tlbjogd3guZ2V0U3RvcmFnZVN5bmMoXCJ0b2tlblwiKVxyXG4gICAgICB9LFxyXG4gICAgICBzdWNjZXNzOiByZXMgPT4ge1xyXG4gICAgICAgIHBhcmFtcy5zQ2FsbEJhY2sgJiYgcGFyYW1zLnNDYWxsQmFjayhyZXMuZGF0YSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0RGF0YVNldChldmVudDogYW55LCBrZXk6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldFtrZXldO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQYXJhbSB7XHJcbiAgdXJsOiBzdHJpbmc7XHJcbiAgdHlwZT86IFwiR0VUXCIgfCBcIlBPU1RcIjtcclxuICBkYXRhPzogYW55O1xyXG4gIHNDYWxsQmFjazogRnVuY3Rpb247XHJcbn1cclxuIl19