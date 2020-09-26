import { getByTestId } from '@testing-library/dom';
import React from 'react';
import renderer from 'react-test-renderer';
import Footer from './footer';

describe('Footer Snapshot', () => {
    test('snapshot renders', () => {
        const arr = [];
        const component = renderer.create(<Footer />);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
describe('Checking footer', () => {

    test('Have footer class', () => {
        const arr = [];
        const component = renderer.create(<Footer />);
        let tree = component.toJSON();
        console.log('tree');
        console.log(tree);
        expect(tree.props.className).toContain('footer')
    });
});

