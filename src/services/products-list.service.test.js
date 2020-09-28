import axios from 'axios';
import { getAllCategory, getProductList, searchDelivery } from './products-list.service';
import { respGetProducts } from './_mocks_/resp-get-products';
import { respSearchDelivery } from './_mocks_/resp-search-delivery';

jest.mock('axios');

beforeEach(() => {
    jest.clearAllMocks();
})

describe('Product List Service', () => {
    test('SearchDelivery should be defined', () => {
        const coord = {
            lat: '-23.632919',
            lng: '-46.699453'
        }
        axios.post.mockResolvedValue(respSearchDelivery);

        const serviceSearchDelivery = new searchDelivery(coord);
        // await searchDelivery(coord).then(data => expect(data).toBeTruthy());
        expect(searchDelivery).toBeDefined();
    });

    test('SearchDelivery data should return', () => {
        const coord = {
            lat: '-23.632919',
            lng: '-46.699453'
        }
        axios.post.mockResolvedValue(respSearchDelivery);

        const serviceSearchDelivery = new searchDelivery(coord);
        searchDelivery(coord).then(data => expect(data).toBeTruthy());
    });

    test('GetProducts should be defined', () => {
        axios.get.mockResolvedValue(respGetProducts);

        const serviceGetProductList = new getProductList('532');
        expect(getProductList).toBeDefined();
    });

    test('GetProducts should have data', () => {
        // axios.post.mockResolvedValue(respGetProducts);
        axios.get.mockImplementation(() => Promise.resolve(respGetProducts))
        getProductList('532').then(data => {
            console.log('DAAATA!!!', data);
            expect(data).toBeTruthy()
        });
    });

    test('GetAllCategory should be defined', () => {
        axios.post.mockResolvedValue(respSearchDelivery);

        const serviceGetProductList = new getAllCategory();
        expect(getAllCategory).toBeDefined();
    });
});

