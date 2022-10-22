<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  label: {
    type: string;
    default: "Button";
    required: true;
  };

  isDisabled: {
    type: boolean;
    default: false;
    required: false;
  };

  size: {
    type: "normal | big | bigger";
    default: "normal";
    required: false;
  };

  bgColor: {
    type: string;
    default: "primary-color";
    required: false;
  };

  textColor: {
    type: string;
    default: "color-white";
    required: false;
  };

  icon: {
    type: string;
    default: false;
    required: false;
  };
}>();

const emit = defineEmits<{
  (e: "button.clicked"): void;
}>();

const onClick = () => {
  emit("button.clicked");
};

const classList = computed(() => {
  return [
    `btn-size--${props.size}`,
    `btn-bgColor--${props.bgColor}`,
    `btn-textColor--${props.textColor}`,
  ];
});
</script>

<template>
  <button
    type="button"
    @click.prevent="onClick"
    :disabled="isDisabled"
    :class="classList"
  >
    {{ label }} <img :src="icon" alt="" />
  </button>
</template>

<style lang="scss" scoped>
button {
  border: none;
  padding: 10px;
  background: #369;
  color: white;
  cursor: pointer;
  transition: all 400ms;

  &:hover {
    background: #008eff;
  }

  &:disabled {
    background: #bbbbbb;
    color: black;
  }
}
</style>
