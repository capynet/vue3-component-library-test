<template>
  <button type="button" @click="onClick">Test</button>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  (e: "click"): void;
}>();

const onClick = () => {
  emit("click");
};
</script>
