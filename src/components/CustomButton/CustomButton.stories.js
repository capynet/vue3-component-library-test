import CustomButton from "./CustomButton.vue";

// More on default export:
// https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "Components/Button",
  component: CustomButton,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    onClick: {},
  },
};

// More on component templates:
// https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  components: { CustomButton },
  // The story's `args` need to be mapped into the template through the
  // `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<CustomButton v-bind="args" />',
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.args = {
  label: "Primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Secondary",
};

export const Large = Template.bind({});
Large.args = {
  label: "Large",
};
