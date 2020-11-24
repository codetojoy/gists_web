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

  const addRandom = function (n) {
    console.log(`TRACER addRandom n: ${n}`);
    update(function (entries) {
      for (let i = 1; i <= n; i++) {
        entries = [`AutoGen${counter++}`, ...entries];
      }
      return entries;
    });
  };

  const reset = () => update((entries) => seed);

  const clearAll = () => set([]);

  const size = function () {
    let result = 0;
    update(function (entries) {
      result = entries.length;
      return entries;
    });
    return result;
  };

  return { subscribe, addRandom, reset, clearAll, size };
})();
