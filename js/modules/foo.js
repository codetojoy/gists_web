
import * as bar from './bar.js';

export const myFoo = () => {
  bar.myBar();
  console.log('TRACER myFoo');
}

export const append = (s) => {
  const t = bar.append(s);
  return `foo::${t}`; 
} 

