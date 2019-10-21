"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var address_1 = require("./../../utils/address");
var order_model_1 = require("../order/order-model");
var cart_model_js_1 = require("../cart/cart-model.js");
var order = new order_model_1.Order();
var cart = new cart_model_js_1.Cart();
var address = new address_1.Address();
Page({
    data: {
        productsArr: [],
        account: 0,
        orderStatus: 0,
        fromCartFlag: true,
        addressInfo: null
    },
    onLoad: function (options) {
        var _this = this;
        var flag = options.from === 'cart';
        this.data.fromCartFlag = flag;
        this.data.account = options.account;
        if (flag) {
            this.setData({
                productsArr: cart.getCartDataFromLocal(true),
                account: options.account,
                orderStatus: 0
            });
            address.getAddress(function (res) {
                _this._bindAddressInfo(res);
            });
        }
    },
    editAddress: function () {
        var _this = this;
        wx.chooseAddress({
            success: function (res) {
                var addressInfo = {
                    name: res.userName,
                    mobile: res.telNumber,
                    province: res.provinceName,
                    city: res.cityName,
                    country: res.countyName,
                    detail: res.detailInfo,
                    totalDetail: address.setAddressInfo(res)
                };
                _this._bindAddressInfo(addressInfo);
                address.submitAddress(addressInfo, function (flag) {
                    if (!flag) {
                        _this.showTips('操作提示', '地址信息更新失败！', true);
                    }
                });
            },
            fail: function (err) {
                console.log(err);
            }
        });
    },
    _bindAddressInfo: function (addressInfo) {
        this.setData({
            addressInfo: addressInfo
        });
    },
    showTips: function (title, content, flag) {
        wx.showModal({
            title: title,
            content: content,
            showCancel: false,
            success: function (res) {
                if (flag) {
                    wx.switchTab({
                        url: '/pages/my/my'
                    });
                }
            }
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJvcmRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlEQUE0RTtBQUM1RSxvREFBNkM7QUFDN0MsdURBQXVEO0FBR3ZELElBQU0sS0FBSyxHQUFHLElBQUksbUJBQUssRUFBRSxDQUFDO0FBQzFCLElBQU0sSUFBSSxHQUFHLElBQUksb0JBQUksRUFBRSxDQUFDO0FBQ3hCLElBQU0sT0FBTyxHQUFHLElBQUksaUJBQU8sRUFBRSxDQUFDO0FBRTlCLElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUNKLFdBQVcsRUFBRSxFQUFnQjtRQUM3QixPQUFPLEVBQUUsQ0FBQztRQUNWLFdBQVcsRUFBRSxDQUFDO1FBQ2QsWUFBWSxFQUFFLElBQUk7UUFDbEIsV0FBVyxFQUFFLElBQUk7S0FDbEI7SUFPRCxNQUFNLEVBQUUsVUFBUyxPQUFZO1FBQXJCLGlCQXVCUDtRQXRCQyxJQUFNLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxLQUFLLE1BQU0sQ0FBQztRQUNyQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7UUFDOUIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQztRQUdwQyxJQUFJLElBQUksRUFBRTtZQUNSLElBQUksQ0FBQyxPQUFRLENBQUM7Z0JBQ1osV0FBVyxFQUFFLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUM7Z0JBQzVDLE9BQU8sRUFBRSxPQUFPLENBQUMsT0FBTztnQkFDeEIsV0FBVyxFQUFFLENBQUM7YUFDZixDQUFDLENBQUM7WUFHSCxPQUFPLENBQUMsVUFBVSxDQUFDLFVBQUMsR0FBZ0I7Z0JBQ2xDLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUM3QixDQUFDLENBQUMsQ0FBQztTQUNKO0lBTUgsQ0FBQztJQUdELFdBQVcsRUFBRTtRQUFBLGlCQXlCWjtRQXhCQyxFQUFFLENBQUMsYUFBYSxDQUFDO1lBQ2YsT0FBTyxFQUFFLFVBQUMsR0FBa0I7Z0JBQzFCLElBQU0sV0FBVyxHQUFnQjtvQkFDL0IsSUFBSSxFQUFFLEdBQUcsQ0FBQyxRQUFRO29CQUNsQixNQUFNLEVBQUUsR0FBRyxDQUFDLFNBQVM7b0JBQ3JCLFFBQVEsRUFBRSxHQUFHLENBQUMsWUFBWTtvQkFDMUIsSUFBSSxFQUFFLEdBQUcsQ0FBQyxRQUFRO29CQUNsQixPQUFPLEVBQUUsR0FBRyxDQUFDLFVBQVU7b0JBQ3ZCLE1BQU0sRUFBRSxHQUFHLENBQUMsVUFBVTtvQkFDdEIsV0FBVyxFQUFFLE9BQU8sQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDO2lCQUN6QyxDQUFDO2dCQUNGLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFHbkMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUUsVUFBQyxJQUFhO29CQUMvQyxJQUFJLENBQUMsSUFBSSxFQUFFO3dCQUNULEtBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztxQkFDMUM7Z0JBQ0gsQ0FBQyxDQUFDLENBQUM7WUFDTCxDQUFDO1lBQ0QsSUFBSSxFQUFFLFVBQUEsR0FBRztnQkFDUCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ25CLENBQUM7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDO0lBR0QsZ0JBQWdCLEVBQUUsVUFBUyxXQUF3QjtRQUNqRCxJQUFJLENBQUMsT0FBUSxDQUFDO1lBQ1osV0FBVyxFQUFFLFdBQVc7U0FDekIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQVNELFFBQVEsRUFBRSxVQUFTLEtBQWEsRUFBRSxPQUFlLEVBQUUsSUFBYTtRQUM5RCxFQUFFLENBQUMsU0FBUyxDQUFDO1lBQ1gsS0FBSyxFQUFFLEtBQUs7WUFDWixPQUFPLEVBQUUsT0FBTztZQUNoQixVQUFVLEVBQUUsS0FBSztZQUNqQixPQUFPLEVBQUUsVUFBQyxHQUFRO2dCQUNoQixJQUFJLElBQUksRUFBRTtvQkFDUixFQUFFLENBQUMsU0FBUyxDQUFDO3dCQUNYLEdBQUcsRUFBRSxjQUFjO3FCQUNwQixDQUFDLENBQUM7aUJBQ0o7WUFDSCxDQUFDO1NBQ0YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFkZHJlc3NJdGVtLCBXeEFkZHJlc3NJdGVtLCBBZGRyZXNzIH0gZnJvbSAnLi8uLi8uLi91dGlscy9hZGRyZXNzJztcclxuaW1wb3J0IHsgT3JkZXIgfSBmcm9tICcuLi9vcmRlci9vcmRlci1tb2RlbCc7XHJcbmltcG9ydCB7IENhcnQsIENhcnRJdGVtIH0gZnJvbSAnLi4vY2FydC9jYXJ0LW1vZGVsLmpzJztcclxuLy8gaW1wb3J0IHtBZGRyZXNzfSBmcm9tICcuLi8uLi91dGlscy9hZGRyZXNzLmpzJztcclxuXHJcbmNvbnN0IG9yZGVyID0gbmV3IE9yZGVyKCk7XHJcbmNvbnN0IGNhcnQgPSBuZXcgQ2FydCgpO1xyXG5jb25zdCBhZGRyZXNzID0gbmV3IEFkZHJlc3MoKTtcclxuXHJcblBhZ2Uoe1xyXG4gIGRhdGE6IHtcclxuICAgIHByb2R1Y3RzQXJyOiBbXSBhcyBDYXJ0SXRlbVtdLFxyXG4gICAgYWNjb3VudDogMCxcclxuICAgIG9yZGVyU3RhdHVzOiAwLFxyXG4gICAgZnJvbUNhcnRGbGFnOiB0cnVlLFxyXG4gICAgYWRkcmVzc0luZm86IG51bGxcclxuICB9LFxyXG5cclxuICAvKlxyXG4gICAqIOiuouWNleaVsOaNruadpea6kOWMheaLrOS4pOS4qu+8mlxyXG4gICAqIDEu6LSt54mp6L2m5LiL5Y2VXHJcbiAgICogMi7ml6fnmoTorqLljZVcclxuICAgKiAqL1xyXG4gIG9uTG9hZDogZnVuY3Rpb24ob3B0aW9uczogYW55KSB7XHJcbiAgICBjb25zdCBmbGFnID0gb3B0aW9ucy5mcm9tID09PSAnY2FydCc7XHJcbiAgICB0aGlzLmRhdGEuZnJvbUNhcnRGbGFnID0gZmxhZztcclxuICAgIHRoaXMuZGF0YS5hY2NvdW50ID0gb3B0aW9ucy5hY2NvdW50O1xyXG5cclxuICAgIC8v5p2l6Ieq5LqO6LSt54mp6L2mXHJcbiAgICBpZiAoZmxhZykge1xyXG4gICAgICB0aGlzLnNldERhdGEhKHtcclxuICAgICAgICBwcm9kdWN0c0FycjogY2FydC5nZXRDYXJ0RGF0YUZyb21Mb2NhbCh0cnVlKSxcclxuICAgICAgICBhY2NvdW50OiBvcHRpb25zLmFjY291bnQsXHJcbiAgICAgICAgb3JkZXJTdGF0dXM6IDBcclxuICAgICAgfSk7XHJcblxyXG4gICAgICAvKuaYvuekuuaUtuiOt+WcsOWdgCovXHJcbiAgICAgIGFkZHJlc3MuZ2V0QWRkcmVzcygocmVzOiBBZGRyZXNzSXRlbSkgPT4ge1xyXG4gICAgICAgIHRoaXMuX2JpbmRBZGRyZXNzSW5mbyhyZXMpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvL+aXp+iuouWNlVxyXG4gICAgLy8gZWxzZSB7XHJcbiAgICAvLyAgIHRoaXMuZGF0YS5pZCA9IG9wdGlvbnMuaWQ7XHJcbiAgICAvLyB9XHJcbiAgfSxcclxuXHJcbiAgLyrkv67mlLnmiJbogIXmt7vliqDlnLDlnYDkv6Hmga8qL1xyXG4gIGVkaXRBZGRyZXNzOiBmdW5jdGlvbigpIHtcclxuICAgIHd4LmNob29zZUFkZHJlc3Moe1xyXG4gICAgICBzdWNjZXNzOiAocmVzOiBXeEFkZHJlc3NJdGVtKSA9PiB7XHJcbiAgICAgICAgY29uc3QgYWRkcmVzc0luZm86IEFkZHJlc3NJdGVtID0ge1xyXG4gICAgICAgICAgbmFtZTogcmVzLnVzZXJOYW1lLFxyXG4gICAgICAgICAgbW9iaWxlOiByZXMudGVsTnVtYmVyLFxyXG4gICAgICAgICAgcHJvdmluY2U6IHJlcy5wcm92aW5jZU5hbWUsXHJcbiAgICAgICAgICBjaXR5OiByZXMuY2l0eU5hbWUsXHJcbiAgICAgICAgICBjb3VudHJ5OiByZXMuY291bnR5TmFtZSxcclxuICAgICAgICAgIGRldGFpbDogcmVzLmRldGFpbEluZm8sXHJcbiAgICAgICAgICB0b3RhbERldGFpbDogYWRkcmVzcy5zZXRBZGRyZXNzSW5mbyhyZXMpXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLl9iaW5kQWRkcmVzc0luZm8oYWRkcmVzc0luZm8pO1xyXG5cclxuICAgICAgICAvL+S/neWtmOWcsOWdgFxyXG4gICAgICAgIGFkZHJlc3Muc3VibWl0QWRkcmVzcyhhZGRyZXNzSW5mbywgKGZsYWc6IGJvb2xlYW4pID0+IHtcclxuICAgICAgICAgIGlmICghZmxhZykge1xyXG4gICAgICAgICAgICB0aGlzLnNob3dUaXBzKCfmk43kvZzmj5DnpLonLCAn5Zyw5Z2A5L+h5oGv5pu05paw5aSx6LSl77yBJywgdHJ1ZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGZhaWw6IGVyciA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgLyrnu5HlrprlnLDlnYDkv6Hmga8qL1xyXG4gIF9iaW5kQWRkcmVzc0luZm86IGZ1bmN0aW9uKGFkZHJlc3NJbmZvOiBBZGRyZXNzSXRlbSkge1xyXG4gICAgdGhpcy5zZXREYXRhISh7XHJcbiAgICAgIGFkZHJlc3NJbmZvOiBhZGRyZXNzSW5mb1xyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgLypcclxuICAgKiDmj5DnpLrnqpflj6NcclxuICAgKiBwYXJhbXM6XHJcbiAgICogdGl0bGUgLSB7c3RyaW5nfeagh+mimFxyXG4gICAqIGNvbnRlbnQgLSB7c3RyaW5nfeWGheWuuVxyXG4gICAqIGZsYWcgLSB7Ym9vbH3mmK/lkKbot7PovazliLAgXCLmiJHnmoTpobXpnaJcIlxyXG4gICAqL1xyXG4gIHNob3dUaXBzOiBmdW5jdGlvbih0aXRsZTogc3RyaW5nLCBjb250ZW50OiBzdHJpbmcsIGZsYWc6IGJvb2xlYW4pIHtcclxuICAgIHd4LnNob3dNb2RhbCh7XHJcbiAgICAgIHRpdGxlOiB0aXRsZSxcclxuICAgICAgY29udGVudDogY29udGVudCxcclxuICAgICAgc2hvd0NhbmNlbDogZmFsc2UsXHJcbiAgICAgIHN1Y2Nlc3M6IChyZXM6IGFueSkgPT4ge1xyXG4gICAgICAgIGlmIChmbGFnKSB7XHJcbiAgICAgICAgICB3eC5zd2l0Y2hUYWIoe1xyXG4gICAgICAgICAgICB1cmw6ICcvcGFnZXMvbXkvbXknXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufSk7XHJcbiJdfQ==