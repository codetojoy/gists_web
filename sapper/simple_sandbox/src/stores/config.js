import { writable } from "svelte/store";

export default (function () {
  const seed = { numToAdd: 1 };

  const { subscribe, update } = writable(seed);

  const reset = () => update((config) => seed);

  const setNumToAdd = function (n) {
    console.log(`TRACER config::setNumToAdd n: ${n}`);
    update(function (config) {
      config.numToAdd = n;
      return config;
    });
  };

  return { subscribe, setNumToAdd, reset };
})();
