<template>
  <button type="button" @click="onClick" :disabled="isDisabled">
    {{ label }} {{ store.counter }} {{ store2.counter }}
  </button>
</template>

<script setup lang="ts">
import { useCounterStore } from "@/stores/counter";
import { useCounter2Store } from "@/stores/counter2";
const store = useCounterStore();
const store2 = useCounter2Store();

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
  e.preventDefault();
  emit("click");
  store.increment();
  store2.duplicate();
};
</script>

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
