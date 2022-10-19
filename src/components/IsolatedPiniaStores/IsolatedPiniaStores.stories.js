import IsolatedPiniaStores from "./IsolatedPiniaStores.vue";

export default {
  title: "Components/IsolatedPiniaStores",
  component: IsolatedPiniaStores,
};

// More on component templates:
// https://storybook.js.org/docs/vue/writing-stories/introduction#using-args

//👇 We create a “template” of how args map to rendering.
// ------------------------------------------------------
const Template = (args) => ({
  components: { IsolatedPiniaStores },
  setup() {
    return { args };
  },
  template: '<IsolatedPiniaStores v-bind="args" />',
});

//👇 Each story then reuses that template.
// ---------------------------------------
export const Default = Template.bind({});
Default.args = {};

Default.parameters = {
  docs: {
    source: {
      code:`
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
`},
  },
};
