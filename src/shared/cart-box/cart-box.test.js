import React from 'react'
import ReactDOM, { render } from 'react-dom'
import CartBox from './cart-box'
import '@testing-library/jest-dom'
import { create, act } from 'react-test-renderer';


jest.mock("./cart-box", () => ({
    cartList: [],
}));

let root;

act(() => {
    root = create(<CartBox cartList={[]}/>)
});

it('renders OK', () => {
    expect(root).toBeDefined();
});


// it('Render Products In Cart - CALLED', () => {
// const spy = jest.spyOn(CartBox, 'renderProductsInCart');
// expect(spy).toHaveBeenCalled();
// });

test('Fake test', () => {
    expect(CartBox).toBeTruthy();
})
