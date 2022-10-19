<script setup lang="ts">
defineProps<{
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
}>();

const emit = defineEmits<{
  (e: "click"): void;
}>();

const onClick = (e: Event) => {
  emit("click");
};
</script>

<template>
  <button type="button" @click.prevent="onClick" :disabled="isDisabled">
    {{ label }}
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
