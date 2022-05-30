<template>
  <button type="button" @click="onClick">{{ label }}</button>
</template>

<script setup lang="ts">
defineProps<{
  label: string;
}>();

const emit = defineEmits<{
  (e: "click"): void;
}>();

const onClick = () => {
  emit("click");
};
</script>
