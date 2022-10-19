<script setup lang="ts">
import { useCounterStore } from "@/stores/counter";
import { useCounter2Store } from "@/stores/counter2";
const store = useCounterStore();
const store2 = useCounter2Store();

const onClickStore1 = (e: Event) => {
  store.increment();
};

const onClickStore2 = (e: Event) => {
  store2.duplicate();
};
</script>

<template>
  <a href="#" @click.prevent="onClickStore1">
    Update first Pinia store counter
  </a>
  <h3>First Pinia store counter: {{ store.counter }}</h3>

  <hr />

  <a href="#" @click.prevent="onClickStore2">
    Update second Pinia store counter
  </a>

  <h3>Second Pinia store counter: {{ store2.counter }}</h3>
</template>
