import { writable } from "svelte/store";

const ITEMS_JSON_URL = "./items.json";
const STORAGE_KEY = "codetojoy-items";

async function fetchJSON(url) {
  let results = [];

  await fetch(url)
    .then((res) => res.json())
    .then((data) => {
      results = data;
    });

  return results;
}

function getFromLocalStorage(key) {
  let items = [];
  const text = localStorage.getItem(key);
  if (text && text !== "{}") {
    items = JSON.parse(text);
  }
  return items;
}

function persist(key, items) {
  localStorage.setItem(key, JSON.stringify(items));
}

function clearLocalStorage(key) {
  localStorage.removeItem(key);
}

export default (function () {
  let counter = 1;

  let fileItems = [];
  let localStorageItems = [];

  const { subscribe, set, update } = writable(fileItems);

  (async function () {
    fileItems = await fetchJSON(ITEMS_JSON_URL);
    localStorageItems = getFromLocalStorage(STORAGE_KEY);
    update((entries) => [...fileItems, ...localStorageItems]);
  })();

  const addRandom = function () {
    const newItem = `NEW_${counter}`;
    counter++;
    localStorageItems.push(newItem);
    persist(STORAGE_KEY, localStorageItems);
    update((entries) => [...fileItems, ...localStorageItems]);
  };

  const clearTemp = function () {
    clearLocalStorage(STORAGE_KEY);
    localStorageItems = getFromLocalStorage(STORAGE_KEY);
    update((entries) => [...fileItems, ...localStorageItems]);
  };

  return { subscribe, addRandom, clearTemp };
})();
