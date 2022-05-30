<script setup lang="ts">
import { useCounterStore } from "@/stores/counter";
import { useCounter2Store } from "@/stores/counter2";
const store = useCounterStore();
const store2 = useCounter2Store();

defineProps<{
  msg: string;
}>();
</script>

<template>
  <h1 class="green">{{ msg }} {{ store.counter }} {{ store2.counter }}</h1>
</template>
