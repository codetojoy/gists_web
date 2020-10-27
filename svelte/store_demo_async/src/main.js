import App from "./App.svelte";

const app = new App({
  target: document.body,
  props: {
    name: "store_demo_async",
  },
});

export default app;
