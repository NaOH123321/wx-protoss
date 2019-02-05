import { Param } from "./../../utils/base";
import { Base } from "../../utils/base";

export class Product extends Base {
  constructor() {
    super();
  }

  getDetailInfo(id: number, callBack: Function) {
    const param: Param = {
      url: `product/${id}`,
      sCallBack: (res: any) => callBack!(res)
    };
    this.request(param);
  }
}
