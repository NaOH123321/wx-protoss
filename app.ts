import { Token } from './utils/token';

//app.ts
export interface IMyApp {
  userInfoReadyCallback?(res: wx.UserInfo): void;
  globalData: {
    userInfo?: wx.UserInfo;
  };
}

App<IMyApp>({
  onLaunch() {
    var token = new Token();
    token.verify();
  },
  globalData: {}
});
