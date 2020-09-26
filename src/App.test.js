import {create, act} from 'react-test-renderer';
import App from './app.js'; // The component being tested

// render the component
let root; 
act(() => {
  root = create(<App/>)
});

it('Renders APP OK', () => {
    expect(root).toBeDefined();
});