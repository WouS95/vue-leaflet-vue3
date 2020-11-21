import { h } from "vue";

export const props = {
  content: {
    type: String,
    default: null,
  },
};

export const setup = (props, leafletRef) => {
  const options = {};
  const methods = {
    setContent(newVal) {
      if (leafletRef.value && newVal !== null && newVal !== undefined) {
        leafletRef.value.setContent(newVal);
      }
    },
  };
  return { options, methods };
};

export const render = (slots) => {
  if (slots.default) {
    return h("div", { ref: "root" }, slots.default());
  }
  return null;
};
