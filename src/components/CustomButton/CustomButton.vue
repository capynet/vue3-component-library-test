<template>
  <button type="button" @click="onClick">
    {{ label }} {{ store.counter }} {{ store2.counter }}
  </button>
</template>

<script setup lang="ts">
import { useCounterStore } from "@/stores/counter";
import { useCounter2Store } from "@/stores/counter2";
const store = useCounterStore();
const store2 = useCounter2Store();

defineProps<{
  label: string;
}>();

const emit = defineEmits<{
  (e: "click"): void;
}>();

const onClick = () => {
  emit("click");
  store.increment();
  store2.duplicate();
};
</script>
