import App from "./App.svelte";

const app = new App({
  target: document.body,
  props: {
    name: "store demo combo",
  },
});

export default app;
