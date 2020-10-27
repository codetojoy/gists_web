import { writable } from "svelte/store";

const STORAGE_KEY = "codetojoy-items";

function loadData() {
  let items = [];
  const text = localStorage.getItem(STORAGE_KEY);
  if (text && text !== "{}") {
    items = JSON.parse(text);
  }
  return items;
}

function persist(items) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}

export default (function () {
  let counter = 1;
  const seed = loadData();
  const { subscribe, set, update } = writable(seed);

  const addRandom = function () {
    update(function (entries) {
      const newEntries = [...entries, `item_${counter}`];
      counter++;
      persist(newEntries);
      return newEntries;
    });
  };

  const reset = () => update((entries) => loadData());

  const clearAll = function () {
    persist([]);
    set([]);
  };

  return { subscribe, addRandom, reset, clearAll };
})();

/*
  // Must do this before first call to persist.
  restore();

  // Any time categories changes, persist it to localStorage.
  $: if (categories) persist();

  function persist() {
    localStorage.setItem('travel-packing', JSON.stringify(categories));
  }

  function restore() {
    const text = localStorage.getItem('travel-packing');
    if (text && text !== '{}') {
      categories = JSON.parse(text);
    }
  }

*/
