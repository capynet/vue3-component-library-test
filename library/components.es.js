import { defineAsyncComponent } from "vue";
const HelloWorld = defineAsyncComponent(() => import("./HelloWorld.js"));
const CustomButton = defineAsyncComponent(() => import("./CustomButton.js"));
export { CustomButton, HelloWorld };
