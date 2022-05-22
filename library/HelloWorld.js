import { defineComponent, openBlock, createElementBlock, toDisplayString } from "vue";
var HelloWorld_vue_vue_type_style_index_0_scoped_true_lang = "";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _hoisted_1 = { class: "green" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  name: "HelloWorld",
  props: {
    msg: null
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("h1", _hoisted_1, toDisplayString(__props.msg), 1);
    };
  }
});
var HelloWorld = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3b7b64fc"]]);
export { HelloWorld as default };
