import { Param } from "./../../utils/base";
import { Base } from "../../utils/base";

// import { wx } from '../../app'

export class Home extends Base {
  constructor() {
    super();
  }

  getBannerData(id: number, callBack: Function) {
    const param: Param = {
      url: `banner/${id}`,
      sCallBack: (res: any) => callBack(res.items)
    };
    this.request(param);
  }

  getThemeData(callBack: Function) {
    const param: Param = {
      url: `theme?ids=1,2,3`,
      sCallBack: (res: any) => callBack(res)
    };
    this.request(param);
  }
}
