"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var token_1 = require("./utils/token");
App({
    onLaunch: function () {
        var token = new token_1.Token();
        token.verify();
    },
    globalData: {}
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsdUNBQXNDO0FBVXRDLEdBQUcsQ0FBUztJQUNWLFFBQVE7UUFDTixJQUFJLEtBQUssR0FBRyxJQUFJLGFBQUssRUFBRSxDQUFDO1FBQ3hCLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBQ0QsVUFBVSxFQUFFLEVBQUU7Q0FDZixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUb2tlbiB9IGZyb20gJy4vdXRpbHMvdG9rZW4nO1xuXG4vL2FwcC50c1xuZXhwb3J0IGludGVyZmFjZSBJTXlBcHAge1xuICB1c2VySW5mb1JlYWR5Q2FsbGJhY2s/KHJlczogd3guVXNlckluZm8pOiB2b2lkO1xuICBnbG9iYWxEYXRhOiB7XG4gICAgdXNlckluZm8/OiB3eC5Vc2VySW5mbztcbiAgfTtcbn1cblxuQXBwPElNeUFwcD4oe1xuICBvbkxhdW5jaCgpIHtcbiAgICB2YXIgdG9rZW4gPSBuZXcgVG9rZW4oKTtcbiAgICB0b2tlbi52ZXJpZnkoKTtcbiAgfSxcbiAgZ2xvYmFsRGF0YToge31cbn0pO1xuIl19