import React from 'react';
import renderer from 'react-test-renderer';
import Footer from './footer';

describe('Footer', () => {
    test('Should be defined', () => {
        const component = renderer.create(<Footer />);
        expect(component).toBeDefined();
    });

    test('Should have footer class', () => {
        const component = renderer.create(<Footer />);
        let tree = component.toJSON();
        expect(tree.props.className).toContain('footer')
    });
});

