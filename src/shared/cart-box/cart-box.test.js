import React from 'react'
import ReactDOM from 'react-dom'
import CartBox from './cart-box'

it('renders OK', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CartBox/>, div);
});

test('Fake test', () => {
    expect(CartBox).toBeTruthy();
})
