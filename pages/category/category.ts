import { Category } from './category-model';

const category = new Category();

Page({
  data: {
    categoryTypeArr: [{ img: { url: '' }, name: {} }],
    currentMenuIndex: 0,
    loadedData: [{}]
  },
  onLoad: function(options: any) {
    this._loadData();
  },

  _loadData: function() {
    category.getCategoryType((categoryData: any) => {
      this.setData!({
        categoryTypeArr: categoryData
      });

      category.getProductsByCategory(categoryData[0].id, (data: any) => {
        const dataObj = {
          products: data,
          topImgUrl: categoryData[0].img.url,
          title: categoryData[0].name
        };

        this.setData!({
          categoryProducts: dataObj
        });

        this.data.loadedData[0] = dataObj;
      });
    });
  },

  // 判断当前分类下的商品数据是否已经被加载过
  isLoadedData: function(index: number) {
    if (this.data.loadedData[index]) {
      return true;
    }
    return false;
  },

  changeCategory: function(event: any) {
    const index = category.getDataSet(event, 'index');
    const id = category.getDataSet(event, 'id');

    this.setData!({
      currentMenuIndex: index
    });

    if (!this.isLoadedData(index)) {
      category.getProductsByCategory(id, (data: any) => {
        const dataObj = {
          products: data,
          topImgUrl: this.data.categoryTypeArr[index].img.url,
          title: this.data.categoryTypeArr[index].name
        };

        this.setData!({
          categoryProducts: dataObj
        });

        this.data.loadedData[index] = dataObj;
      });
    } else {
      this.setData!({
        categoryProducts: this.data.loadedData[index]
      });
    }
  },

  onProductsItemTap: function(event: any) {
    const id = category.getDataSet(event, 'id');
    wx.navigateTo({
      url: `../product/product?id=${id}`
    });
  }
});
