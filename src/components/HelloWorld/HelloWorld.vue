<script setup lang="ts">
// import { useCounterStore } from "../../stores/counter";

defineProps<{
  msg: string;
}>();

//const store = useCounterStore();
</script>

<template>
  <h1 class="green">{{ msg }}</h1>
</template>
