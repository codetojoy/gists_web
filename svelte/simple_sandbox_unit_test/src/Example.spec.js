import {cleanup, render} from '@testing-library/svelte';
 
import Items from './Items.svelte';
 
describe('Items', () => {
  const items = ["abc", "def", "xyz"];

  afterEach(cleanup);                
 
  test('should render', () => {
    // test 
    const {itemsList} = render(Items, {props: {items}});

    const paragraphs = document.querySelectorAll('p');

    expect(paragraphs).not.toBeNull(); 
    expect(paragraphs.length).toEqual(3);

    for (let i = 0; i < items.length; i++) {
        const p = paragraphs[i];
        console.log(`TRACER p: ${p.innerHTML}`);
        expect(p.innerHTML).toEqual(items[i]);
    }
  });
});
