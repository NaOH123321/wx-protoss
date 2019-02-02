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
var Theme = (function (_super) {
    __extends(Theme, _super);
    function Theme() {
        return _super.call(this) || this;
    }
    Theme.prototype.getThemeData = function (id, callBack) {
        var param = {
            url: "theme/" + id,
            sCallBack: function (res) { return callBack(res); }
        };
        this.request(param);
    };
    return Theme;
}(base_1.Base));
exports.Theme = Theme;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtbW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0aGVtZS1tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDQSx5Q0FBd0M7QUFFeEM7SUFBMkIseUJBQUk7SUFDN0I7ZUFDRSxpQkFBTztJQUNULENBQUM7SUFFRCw0QkFBWSxHQUFaLFVBQWEsRUFBVSxFQUFFLFFBQWtCO1FBQ3pDLElBQU0sS0FBSyxHQUFVO1lBQ25CLEdBQUcsRUFBRSxXQUFTLEVBQUk7WUFDbEIsU0FBUyxFQUFFLFVBQUMsR0FBUSxJQUFLLE9BQUEsUUFBUyxDQUFDLEdBQUcsQ0FBQyxFQUFkLENBQWM7U0FDeEMsQ0FBQztRQUNGLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdEIsQ0FBQztJQUNILFlBQUM7QUFBRCxDQUFDLEFBWkQsQ0FBMkIsV0FBSSxHQVk5QjtBQVpZLHNCQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGFyYW0gfSBmcm9tIFwiLi8uLi8uLi91dGlscy9iYXNlXCI7XHJcbmltcG9ydCB7IEJhc2UgfSBmcm9tIFwiLi4vLi4vdXRpbHMvYmFzZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRoZW1lIGV4dGVuZHMgQmFzZSB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgZ2V0VGhlbWVEYXRhKGlkOiBudW1iZXIsIGNhbGxCYWNrOiBGdW5jdGlvbikge1xyXG4gICAgY29uc3QgcGFyYW06IFBhcmFtID0ge1xyXG4gICAgICB1cmw6IGB0aGVtZS8ke2lkfWAsXHJcbiAgICAgIHNDYWxsQmFjazogKHJlczogYW55KSA9PiBjYWxsQmFjayEocmVzKVxyXG4gICAgfTtcclxuICAgIHRoaXMucmVxdWVzdChwYXJhbSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==