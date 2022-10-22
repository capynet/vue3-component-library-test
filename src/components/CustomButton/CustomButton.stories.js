import CustomButton from "./CustomButton.vue";
import IconArrowDown from "./icons/arrow-down.svg";
import IconArrowUp from "./icons/arrow-up.svg";
import IconArrowLeft from "./icons/arrow-left.svg";
import IconConfig from "./icons/config.svg";

const icons = {
  IconArrowDown,
  IconArrowUp,
  IconArrowLeft,
  IconConfig,
};

export default {
  title: "Components/CustomButton",
  component: CustomButton,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    onClick: {
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

    size: {
      description: "Sets size.",
      options: ["foo", "nelo", "bar"],
      control: {
        type: "inline-radio",
        labels: {
          foo: "FOO",
          nelo: "PriO",
          bar: "BAR",
        },
      },
    },

    label: {
      description: "Defines the label of the button",
    },

    bgColor: {
      description: "Defines the label of the button",
      control: { type: "color", presetColors: ["red", "green"] },
    },

    textColor: {
      description: "Defines the label of the button",
      control: {
        type: "color",
        presetColors: [
          { color: "#321234", title: "white" },
          { color: "#ff4785", title: "Coral" },
          { color: "#369", title: "Furulanga" },
        ],
      },
    },

    icon: {
      description: "Sets an icon",
      options: Object.keys(icons),
      mapping: icons,
      control: {
        type: "inline-radio",
        // labels: {
        //   IconArrowDown: "Arrow down",
        //   IconArrowUp: "Arrow up",
        //   IconArrowLeft: "Arrow left",
        //   IconConfig: "Config"
        // }
      },
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
  size: "nelo",
  icon: IconArrowLeft,
};

Default.parameters = {
  docs: {
    source: {
      code: `
import CustomButton from "@/components/CustomButton/CustomButton.vue";

<template>
  <CustomButton :isDisabled="false" label="Click and see (Default)" />
</template>`,
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
