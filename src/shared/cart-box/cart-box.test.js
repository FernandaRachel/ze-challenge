import React from 'react';
import renderer from 'react-test-renderer';
import CartBox from './cart-box'

describe('CarBox', () => {
    test('snapshot renders', () => {
        const arr = [];
        const component = renderer.create(<CartBox cartList={arr} />);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});

