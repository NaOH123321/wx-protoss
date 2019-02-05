import { Param } from './../../utils/base';
import { Base } from '../../utils/base';

export class Category extends Base {
  constructor() {
    super();
  }

  getCategoryType(callBack: Function) {
    const param: Param = {
      url: `category/all`,
      sCallBack: (res: any) => callBack!(res)
    };
    this.request(param);
  }

  getProductsByCategory(id: number, callBack: Function) {
    const param: Param = {
      url: `product/by_category?id=${id}`,
      sCallBack: (res: any) => callBack!(res)
    };
    this.request(param);
  }
}
