import {cleanup, render} from '@testing-library/svelte';
 
import Items from './Items.svelte';
 
describe('Items', () => {
  const items = ["abc", "def", "xyz"];

  afterEach(cleanup);                
 
  test('should render', () => {
    // test 
    const {getByText} = render(Items, {props: {items}});

    const paragraphs = document.querySelectorAll('p');

    expect(paragraphs).not.toBeNull(); 
    expect(paragraphs.length).toBe(3);

    items.forEach(item => expect(getByText(item)));
  });
});
