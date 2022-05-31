import CustomButton from "./CustomButton.vue";

export default {
  title: "Components/CustomButton",
  component: CustomButton,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    click: {
      description: "Reacts when the button gets clicked",
      control: {
        type: null,
      },
    },
    isDisabled: {
      description: "Sets if button is enabled.",
      control: {
        type: "boolean",
      },
    },
    label: {
      description: "Defines the label of the button",
    },
  },
};

// More on component templates:
// https://storybook.js.org/docs/vue/writing-stories/introduction#using-args

//👇 We create a “template” of how args map to rendering.
// ------------------------------------------------------
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

//👇 Each story then reuses that template.
// ---------------------------------------
export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Default.args = {
  label: "Click and see (Default)",
  isDisabled: false,
};

Default.parameters = {
  docs: {
    source: {
      code:
        'import CustomButton from "@/components/CustomButton/CustomButton.vue"; \n\n' +
        "<template>\n" +
        '  <CustomButton :isDisabled="false" label="Click and see (Default)" />\n' +
        "</template>",
    },
  },
};

export const Big = Template.bind({});
Big.args = {
  label: "Click and see (Big)",
  isDisabled: false,
};

Big.parameters = {
  docs: {
    source: {
      code:
        'import CustomButton from "@/components/CustomButton/CustomButton.vue"; \n\n' +
        "<template>\n" +
        '  <CustomButton :isDisabled="false" label="Click and see (Big)" />\n' +
        "</template>",
    },
  },
};

export const Biggest = Template.bind({});
Biggest.args = {
  label: "Click and see (Biggest)",
  isDisabled: false,
};

Biggest.parameters = {
  docs: {
    source: {
      code:
        'import CustomButton from "@/components/CustomButton/CustomButton.vue"; \n\n' +
        "<template>\n" +
        '  <CustomButton :isDisabled="false" label="Click and see (Biggest)" />\n' +
        "</template>",
    },
  },
};
