"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cart_model_1 = require("./cart-model");
var cart = new cart_model_1.Cart();
Page({
    data: {},
    onShow: function () {
        var cartData = cart.getCartDataFromLocal();
        var cal = this._calcTotalAccountAndCounts(cartData);
        this.setData({
            selectedCounts: cal.selectedCounts,
            selectedTypeCounts: cal.selectedTypeCounts,
            account: cal.account,
            cartData: cartData
        });
    },
    _calcTotalAccountAndCounts: function (data) {
        var account = 0;
        var selectedCounts = 0;
        var selectedTypeCounts = 0;
        var multiple = 100;
        for (var i = 0; i < data.length; i++) {
            if (data[i].selectStatus) {
                account += data[i].counts * Number(data[i].price) * multiple;
                selectedCounts += data[i].counts;
                selectedTypeCounts++;
            }
        }
        return {
            selectedCounts: selectedCounts,
            selectedTypeCounts: selectedTypeCounts,
            account: account / multiple
        };
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNhcnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBb0M7QUFFcEMsSUFBTSxJQUFJLEdBQUcsSUFBSSxpQkFBSSxFQUFFLENBQUM7QUFFeEIsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFLEVBQUU7SUFDUixNQUFNLEVBQUU7UUFDTixJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUM3QyxJQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsMEJBQTBCLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFdEQsSUFBSSxDQUFDLE9BQVEsQ0FBQztZQUNaLGNBQWMsRUFBRSxHQUFHLENBQUMsY0FBYztZQUNsQyxrQkFBa0IsRUFBRSxHQUFHLENBQUMsa0JBQWtCO1lBQzFDLE9BQU8sRUFBRSxHQUFHLENBQUMsT0FBTztZQUNwQixRQUFRLEVBQUUsUUFBUTtTQUNuQixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsMEJBQTBCLEVBQUUsVUFBUyxJQUFTO1FBRTVDLElBQUksT0FBTyxHQUFHLENBQUMsQ0FBQztRQUVoQixJQUFJLGNBQWMsR0FBRyxDQUFDLENBQUM7UUFFdkIsSUFBSSxrQkFBa0IsR0FBRyxDQUFDLENBQUM7UUFFM0IsSUFBSSxRQUFRLEdBQUcsR0FBRyxDQUFDO1FBRW5CLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBRXBDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksRUFBRTtnQkFDeEIsT0FBTyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxRQUFRLENBQUM7Z0JBQzdELGNBQWMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO2dCQUNqQyxrQkFBa0IsRUFBRSxDQUFDO2FBQ3RCO1NBQ0Y7UUFFRCxPQUFPO1lBQ0wsY0FBYyxFQUFFLGNBQWM7WUFDOUIsa0JBQWtCLEVBQUUsa0JBQWtCO1lBQ3RDLE9BQU8sRUFBRSxPQUFPLEdBQUcsUUFBUTtTQUM1QixDQUFDO0lBQ0osQ0FBQztDQUNGLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhcnQgfSBmcm9tICcuL2NhcnQtbW9kZWwnO1xyXG5cclxuY29uc3QgY2FydCA9IG5ldyBDYXJ0KCk7XHJcblxyXG5QYWdlKHtcclxuICBkYXRhOiB7fSxcclxuICBvblNob3c6IGZ1bmN0aW9uKCkge1xyXG4gICAgY29uc3QgY2FydERhdGEgPSBjYXJ0LmdldENhcnREYXRhRnJvbUxvY2FsKCk7XHJcbiAgICBjb25zdCBjYWwgPSB0aGlzLl9jYWxjVG90YWxBY2NvdW50QW5kQ291bnRzKGNhcnREYXRhKTtcclxuXHJcbiAgICB0aGlzLnNldERhdGEhKHtcclxuICAgICAgc2VsZWN0ZWRDb3VudHM6IGNhbC5zZWxlY3RlZENvdW50cyxcclxuICAgICAgc2VsZWN0ZWRUeXBlQ291bnRzOiBjYWwuc2VsZWN0ZWRUeXBlQ291bnRzLFxyXG4gICAgICBhY2NvdW50OiBjYWwuYWNjb3VudCxcclxuICAgICAgY2FydERhdGE6IGNhcnREYXRhXHJcbiAgICB9KTtcclxuICB9LFxyXG5cclxuICBfY2FsY1RvdGFsQWNjb3VudEFuZENvdW50czogZnVuY3Rpb24oZGF0YTogYW55KSB7XHJcbiAgICAvLyDmiYDpnIDopoHorqHnrpfnmoTmgLvku7fmoLzvvIzkvYbmmK/opoHms6jmhI/mjpLpmaTmjonmnKrpgInkuK3nmoTllYblk4FcclxuICAgIGxldCBhY2NvdW50ID0gMDtcclxuICAgIC8vIOi0reS5sOWVhuWTgeeahOaAu+S4quaVsFxyXG4gICAgbGV0IHNlbGVjdGVkQ291bnRzID0gMDtcclxuICAgIC8vIOi0reS5sOWVhuWTgeenjeexu+eahOaAu+aVsFxyXG4gICAgbGV0IHNlbGVjdGVkVHlwZUNvdW50cyA9IDA7XHJcblxyXG4gICAgbGV0IG11bHRpcGxlID0gMTAwO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAvL+mBv+WFjSAwLjA1ICsgMC4wMSA9IDAuMDYwIDAwMCAwMDAgMDAwIDAwMCAwMDUg55qE6Zeu6aKY77yM5LmY5LulIDEwMCAqMTAwXHJcbiAgICAgIGlmIChkYXRhW2ldLnNlbGVjdFN0YXR1cykge1xyXG4gICAgICAgIGFjY291bnQgKz0gZGF0YVtpXS5jb3VudHMgKiBOdW1iZXIoZGF0YVtpXS5wcmljZSkgKiBtdWx0aXBsZTtcclxuICAgICAgICBzZWxlY3RlZENvdW50cyArPSBkYXRhW2ldLmNvdW50cztcclxuICAgICAgICBzZWxlY3RlZFR5cGVDb3VudHMrKztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHNlbGVjdGVkQ291bnRzOiBzZWxlY3RlZENvdW50cyxcclxuICAgICAgc2VsZWN0ZWRUeXBlQ291bnRzOiBzZWxlY3RlZFR5cGVDb3VudHMsXHJcbiAgICAgIGFjY291bnQ6IGFjY291bnQgLyBtdWx0aXBsZVxyXG4gICAgfTtcclxuICB9XHJcbn0pO1xyXG4iXX0=