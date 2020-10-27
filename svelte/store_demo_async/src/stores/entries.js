import { writable } from "svelte/store";

const ITEMS_JSON_URL = "./items.json";

async function fetchJSON(url) {
  let results = [];

  await fetch(url)
    .then((res) => res.json())
    .then((data) => {
      results = data;
    });

  return results;
}

export default (function () {
  let counter = 1;

  let seed = [];
  const { subscribe, set, update } = writable(seed);

  (async function () {
    const fetchData = await fetchJSON(ITEMS_JSON_URL);
    seed = fetchData;
    update((entries) => seed);
  })();

  const addRandom = () => update((entries) => [...entries, `NEW_${counter++}`]);

  const reset = () => update((entries) => seed);

  const clearAll = () => set([]);

  return { subscribe, addRandom, reset, clearAll };
})();
