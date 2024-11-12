"use strict";
const common_vendor = require("../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "XRBFSwiper",
  props: {
    list: null
  },
  setup(__props) {
    const activeIndex = common_vendor.ref(0);
    const onChange = (ev) => {
      activeIndex.value = ev.detail.current;
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(__props.list, (item, k0, i0) => {
          return {
            a: item.imgUrl,
            b: item.id
          };
        }),
        b: common_vendor.o(onChange),
        c: common_vendor.f(__props.list, (item, index, i0) => {
          return {
            a: item.id,
            b: index === activeIndex.value ? 1 : ""
          };
        })
      };
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/Dell/Desktop/test/summer-fun-shopping/src/components/XRBFSwiper.vue"]]);
wx.createComponent(Component);
//# sourceMappingURL=XRBFSwiper.js.map
