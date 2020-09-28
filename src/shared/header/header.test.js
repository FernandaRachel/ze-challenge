import React from 'react';
import renderer from 'react-test-renderer';
import Header from './header';

describe('Header', () => {
    test('Should be defined', () => {
        const component = renderer.create(<Header />);
        expect(component).toBeDefined();
    });
  
    test('Should have header class', () => {
        const component = renderer.create(<Header />);
        let tree = component.toJSON();
        expect(tree.props.className).toContain('header');
    });
});

