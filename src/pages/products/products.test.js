import React from 'react';
import renderer from 'react-test-renderer';
import Products from './products'
import axios from 'axios';
import searchDelivery from '../../services/products-list.service';

jest.mock('axios');
const searchDeliveryMock = jest.mock(searchDelivery);


describe('App', () => {
    test('should fetch category', () => {
        const coord = {
            lat: '123',
            lng: '123'
        }
        const category = [];
        const resp = { data: category };
        axios.get.mockResolvedValue(resp);
        searchDeliveryMock.mockImplementation(() => []);
        searchDeliveryMock();
        // const spy = jest.spyOn(searchDelivery, 'searchDelivery');
        // spy.mockReturnValue([]);

        // or you could use the following depending on your use case:
        // axios.get.mockImplementation(() => Promise.resolve(resp))
        return Products.callProductList(coord).then(data => expect(data).toBeTruthy());
    });

    test('snapshot renders', () => {
        const coord = {
            lat: '123',
            lng: '123'
        }
        const arr = [];
        const mockCallback = jest.fn();
        mockCallback.getMockImplementation(coord);
        const component = renderer.create(<Products productList={arr} cartList={arr} categoryList={arr} />);
        const spy = jest.spyOn(component.instance(), "callProductList");

        spy.getMockImplementation(coord);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});