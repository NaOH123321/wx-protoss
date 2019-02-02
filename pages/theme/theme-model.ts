import { Param } from "./../../utils/base";
import { Base } from "../../utils/base";

export class Theme extends Base {
  constructor() {
    super();
  }

  getThemeData(id: number, callBack: Function) {
    const param: Param = {
      url: `theme/${id}`,
      sCallBack: (res: any) => callBack!(res)
    };
    this.request(param);
  }
}
