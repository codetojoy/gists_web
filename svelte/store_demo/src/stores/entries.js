import { writable } from "svelte/store";

export default (function () {
  let counter = 1;
  const seed = ["5150", "6160", "7170"];
  const { subscribe, set, update } = writable(seed);

  const addRandom = () => update((entries) => [...entries, `NEW_${counter++}`]);
  /*
  const addRandom = function () {
    update((entries) => [...entries, `NEW_${counter}`]);
    counter++;
    console.log("TRACER sanity-check from addRandom");
  };
  */

  const reset = () => update((entries) => seed);

  const clearAll = () => set([]);

  return { subscribe, addRandom, reset, clearAll };
})();
