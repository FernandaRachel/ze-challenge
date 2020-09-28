import { searchDelivery } from '../../services/products-list.service';

jest.mock('axios');
jest.mock('../../services/_mocks_/request');
// const searchDeliveryMock = jest.mock('../../services/products-list.service');
jest.mock('../../services/products-list.service');

beforeEach(() => {
    // Clear all instances and calls to constructor and all methods:
    searchDelivery.mockClear();
    const coord = {
        lat: '123',
        lng: '123'
    }
    const mockInstance = new searchDelivery(coord);
});


describe('Products', () => {
    it('Check if product service is defined', () => {
        const mockInstance = searchDelivery.mock.instances[0];
        const mockSearchDelivery = mockInstance.searchDelivery;
        expect(searchDelivery).toBeDefined();
    });

    it('Check if product service "searchDelivery" was called', () => {
        const mockInstance = searchDelivery.mock.instances[0];
        expect(searchDelivery).toHaveBeenCalled();
    });

});