import React from 'react';
import renderer from 'react-test-renderer';
import Header from './header';
import 'jest-localstorage-mock';

describe('Header', () => {
    test('snapshot renders', () => {
        const arr = [];
        const component = renderer.create(<Header />);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('Expect session storage called', () => {
        const component = renderer.create(<Header />);
        const KEY = 'address',
            VALUE = 'Rua Fake 333';
        dispatch(action.update(KEY, VALUE));
        expect(component.getInstance()).toHaveBeenLastCalledWith(KEY, VALUE);
        const arr = [];
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});

