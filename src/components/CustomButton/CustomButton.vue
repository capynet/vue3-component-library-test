<template>
  <button type="button" @click="onClick">{{ label }}</button>
</template>

<script setup lang="ts">
// import { useCounterStore } from "../../stores/counter";
// const store = useCounterStore();

defineProps<{
  label: string;
}>();

const emit = defineEmits<{
  (e: "click"): void;
}>();

const onClick = () => {
  emit("click");
  // store.increment();
};
</script>
