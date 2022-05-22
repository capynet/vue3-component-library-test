import { defineComponent, computed, openBlock, createElementBlock, normalizeClass, unref, normalizeStyle, toDisplayString } from "vue";
var CustomButton_vue_vue_type_style_index_0_lang = "";
const _sfc_main = /* @__PURE__ */ defineComponent({
  name: "CustomButton",
  props: {
    label: null,
    primary: { type: Boolean },
    size: null,
    backgroundColor: null
  },
  emits: ["click"],
  setup(__props, { emit }) {
    const props = __props;
    const classes = computed(() => ({
      "storybook-button": true,
      "storybook-button--primary": props.primary,
      "storybook-button--secondary": !props.primary,
      [`storybook-button--${props.size || "medium"}`]: true
    }));
    const style = computed(() => ({
      backgroundColor: props.backgroundColor
    }));
    const onClick = () => {
      emit("click");
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", {
        type: "button",
        class: normalizeClass(unref(classes)),
        onClick,
        style: normalizeStyle(unref(style))
      }, toDisplayString(__props.label), 7);
    };
  }
});
export { _sfc_main as default };
