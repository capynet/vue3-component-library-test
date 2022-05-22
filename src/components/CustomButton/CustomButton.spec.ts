import { mount } from "@cypress/vue";
import Button from "./CustomButton.vue";

describe("Button", () => {
  it("playground from the component", () => {
    mount(Button, { props: { label: "Testing button" } });
  });

  it("renders properly", () => {
    mount(Button, { props: { label: "Testing button" } });
    cy.get("button").should("contain", "Testing button");
  });
});
