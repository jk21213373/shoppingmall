"use strict";
const common_vendor = require("../../common/vendor.js");
const services_cart = require("../../services/cart.js");
const services_goods = require("../../services/goods.js");
require("../../utils/http.js");
require("../../stores/index.js");
require("../../stores/modules/member.js");
if (!Array) {
  const _easycom_vk_data_goods_sku_popup2 = common_vendor.resolveComponent("vk-data-goods-sku-popup");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_easycom_vk_data_goods_sku_popup2 + _easycom_uni_popup2)();
}
const _easycom_vk_data_goods_sku_popup = () => "../../components/vk-data-goods-sku-popup/vk-data-goods-sku-popup.js";
const _easycom_uni_popup = () => "../../node-modules/@dcloudio/uni-ui/lib/uni-popup/uni-popup.js";
if (!Math) {
  (_easycom_vk_data_goods_sku_popup + AddressPanel + ServicePanel + _easycom_uni_popup)();
}
const AddressPanel = () => "./components/AddressPanel.js";
const ServicePanel = () => "./components/ServicePanel.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "goods",
  props: {
    id: null
  },
  setup(__props) {
    const query = __props;
    const { safeAreaInsets } = common_vendor.index.getSystemInfoSync();
    const goods = common_vendor.ref();
    const getGoodsByIdData = async () => {
      const res = await services_goods.getGoodsByIdAPI(query.id);
      goods.value = res.result;
      localdata.value = {
        _id: res.result.id,
        name: res.result.name,
        goods_thumb: res.result.mainPictures[0],
        spec_list: res.result.specs.map((v) => {
          return {
            name: v.name,
            list: v.values
          };
        }),
        sku_list: res.result.skus.map((v) => {
          return {
            _id: v.id,
            goods_id: res.result.id,
            goods_name: res.result.name,
            image: v.picture,
            price: v.price * 100,
            // 注意：需要乘以 100
            stock: v.inventory,
            sku_name_arr: v.specs.map((vv) => vv.valueName)
          };
        })
      };
    };
    common_vendor.onLoad(() => {
      getGoodsByIdData();
    });
    const currentIndex = common_vendor.ref(0);
    const onChange = (ev) => {
      currentIndex.value = ev.detail.current;
    };
    const onTapImage = (url) => {
      common_vendor.index.previewImage({
        current: url,
        urls: goods.value.mainPictures
      });
    };
    const popup = common_vendor.ref();
    const popupName = common_vendor.ref();
    const openPopup = (name) => {
      var _a;
      popupName.value = name;
      (_a = popup.value) == null ? void 0 : _a.open();
    };
    const isShowSku = common_vendor.ref(false);
    const localdata = common_vendor.ref({});
    const mode = common_vendor.ref(
      2
      /* Cart */
    );
    const openSkuPopup = (val) => {
      isShowSku.value = true;
      mode.value = val;
    };
    const skuPopupRef = common_vendor.ref();
    const selectArrText = common_vendor.computed(() => {
      var _a, _b;
      return ((_b = (_a = skuPopupRef.value) == null ? void 0 : _a.selectArr) == null ? void 0 : _b.join(" ").trim()) || "请选择商品规格";
    });
    const onAddCart = async (ev) => {
      await services_cart.postMemberCartAPI({ skuId: ev._id, count: ev.buy_num });
      common_vendor.index.showToast({ title: "添加成功" });
      isShowSku.value = false;
    };
    const onBuyNow = (ev) => {
      common_vendor.index.navigateTo({ url: `/pagesOrder/create/create?skuId=${ev._id}&count=${ev.buy_num}` });
    };
    return (_ctx, _cache) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i;
      return common_vendor.e({
        a: common_vendor.sr(skuPopupRef, "6cadf902-0", {
          "k": "skuPopupRef"
        }),
        b: common_vendor.o(onAddCart),
        c: common_vendor.o(onBuyNow),
        d: common_vendor.o(($event) => isShowSku.value = $event),
        e: common_vendor.p({
          localdata: localdata.value,
          mode: mode.value,
          ["add-cart-background-color"]: "#FFA868",
          ["buy-now-background-color"]: "#27BA9B",
          ["actived-style"]: {
            color: "#27BA9B",
            borderColor: "#27BA9B",
            backgroundColor: "#E9F8F5"
          },
          modelValue: isShowSku.value
        }),
        f: common_vendor.f((_a = goods.value) == null ? void 0 : _a.mainPictures, (item, k0, i0) => {
          return {
            a: common_vendor.o(($event) => onTapImage(item), item),
            b: item,
            c: item
          };
        }),
        g: common_vendor.o(onChange),
        h: common_vendor.t(currentIndex.value + 1),
        i: common_vendor.t((_b = goods.value) == null ? void 0 : _b.mainPictures.length),
        j: common_vendor.t((_c = goods.value) == null ? void 0 : _c.price),
        k: common_vendor.t((_d = goods.value) == null ? void 0 : _d.name),
        l: common_vendor.t((_e = goods.value) == null ? void 0 : _e.desc),
        m: common_vendor.t(common_vendor.unref(selectArrText)),
        n: common_vendor.o(($event) => openSkuPopup(
          1
          /* Both */
        )),
        o: common_vendor.o(($event) => openPopup("address")),
        p: common_vendor.o(($event) => openPopup("service")),
        q: common_vendor.f((_f = goods.value) == null ? void 0 : _f.details.properties, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.name),
            b: common_vendor.t(item.value),
            c: item.name
          };
        }),
        r: common_vendor.f((_g = goods.value) == null ? void 0 : _g.details.pictures, (item, k0, i0) => {
          return {
            a: item,
            b: item
          };
        }),
        s: common_vendor.f((_h = goods.value) == null ? void 0 : _h.similarProducts, (item, k0, i0) => {
          return {
            a: item.picture,
            b: common_vendor.t(item.name),
            c: common_vendor.t(item.price),
            d: item.id,
            e: `/pages/goods/goods?id=${item.id}`
          };
        }),
        t: goods.value
      }, goods.value ? {
        v: common_vendor.o(($event) => openSkuPopup(
          2
          /* Cart */
        )),
        w: common_vendor.o(($event) => openSkuPopup(
          3
          /* Buy */
        )),
        x: ((_i = common_vendor.unref(safeAreaInsets)) == null ? void 0 : _i.bottom) + "px"
      } : {}, {
        y: popupName.value === "address"
      }, popupName.value === "address" ? {
        z: common_vendor.o(($event) => {
          var _a2;
          return (_a2 = popup.value) == null ? void 0 : _a2.close();
        })
      } : {}, {
        A: popupName.value === "service"
      }, popupName.value === "service" ? {
        B: common_vendor.o(($event) => {
          var _a2;
          return (_a2 = popup.value) == null ? void 0 : _a2.close();
        })
      } : {}, {
        C: common_vendor.sr(popup, "6cadf902-1", {
          "k": "popup"
        }),
        D: common_vendor.p({
          type: "bottom",
          ["background-color"]: "#fff"
        })
      });
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/Dell/Desktop/test/summer-fun-shopping/src/pages/goods/goods.vue"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=goods.js.map
