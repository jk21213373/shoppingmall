"use strict";
const common_vendor = require("../../common/vendor.js");
const composables_index = require("../../composables/index.js");
if (!Array) {
  const _easycom_XRBFGuess2 = common_vendor.resolveComponent("XRBFGuess");
  _easycom_XRBFGuess2();
}
const _easycom_XRBFGuess = () => "../../components/XRBFGuess.js";
if (!Math) {
  _easycom_XRBFGuess();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "payment",
  props: {
    id: null
  },
  setup(__props) {
    const query = __props;
    const { guessRef, onScrolltolower } = composables_index.useGuessList();
    return (_ctx, _cache) => {
      return {
        a: `/pagesOrder/detail/detail?id=${query.id}`,
        b: common_vendor.sr(guessRef, "6064d2bb-0", {
          "k": "guessRef"
        }),
        c: common_vendor.o(
          //@ts-ignore
          (...args) => common_vendor.unref(onScrolltolower) && common_vendor.unref(onScrolltolower)(...args)
        )
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/Dell/Desktop/test/summer-fun-shopping/src/pagesOrder/payment/payment.vue"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=payment.js.map
