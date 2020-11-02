import { writable } from "svelte/store";

export default (function () {
  let counter = 1;

  const seed = [
    "Johann Sebastian Bach",
    "Ludwig van Beethoven",
    "Wolfgang Amadeus Mozart",
    "Franz Schubert",
    "Richard Wagner",
    "Antonio Vivaldi",
    "Johannes Brahms",
    "Giuseppe Verdi",
    "Robert Schumann",
    "Giacomo Puccini",
    "Antonín Leopold Dvorák",
    "George Frideric Handel",
    "Franz Liszt",
    "Franz Joseph Haydn",
    "Frédéric Chopin",
    "Igor Stravinsky",
    "Gustav Mahler",
    "Richard Strauss",
    "Dmitri Dmitriyevich Shostakovich",
    "Hector Berlioz",
  ];

  const { subscribe, set, update } = writable(seed);

  const addRandom = () =>
    update((entries) => [`AutoGen${counter++}`, ...entries]);

  const reset = () => update((entries) => seed);

  const clearAll = () => set([]);

  return { subscribe, addRandom, reset, clearAll };
})();
