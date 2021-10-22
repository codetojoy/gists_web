
import * as util from './util.js';

export const myBar = () => {
  util.myUtil();
  console.log('TRACER myBar');
}

export const append = (s) => {
  const t = util.append(s);
  return `bar::${t}`;
}
