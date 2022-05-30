import { defineComponent, openBlock, createElementBlock, toDisplayString } from "vue";
const _hoisted_1 = { class: "green" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
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
const _sfc_main = /* @__PURE__ */ defineComponent({
  name: "CustomButton",
  emits: ["click"],
  setup(__props, { emit }) {
    const onClick = () => {
      emit("click");
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", {
        type: "button",
        onClick
      }, "Test");
    };
  }
});
export { _sfc_main as CustomButton, _sfc_main$1 as HelloWorld };
