import React from 'react';
import renderer from 'react-test-renderer';
import CartBox from './cart-box'

let component;
beforeEach(() => {
    const arr = [
        {
            id: '8868',
            title: 'Skol 269ml - Unidade',
            rgb: false,
            images: [
                {
                    url: 'https://courier-images-codechallenge.s3-us-west-2.amazonaws.com/product/8868_205f958d-2e51-48a3-b4d5-a2998765571a.jpg'
                }
            ],
            productVariants: [
                {
                    availableDate: '2018-10-31T00:00:00',
                    productVariantId: '8502',
                    price: 2.09,
                    inventoryItemId: '80149',
                    shortDescription: null,
                    title: 'Skol 269ml - Unidade',
                    published: null,
                    volume: '0,00269',
                    volumeUnit: null,
                    description: null,
                    subtitle: 'Cervejas',
                    components: []
                }
            ]
        },
    ];
    component = renderer.create(<CartBox cartList={arr} />);
    jest.clearAllMocks();
})

describe('CarBox', () => {
    test('Should be defined', () => {
        expect(component).toBeDefined();
    });

    test('Should have cart-box class', () => {
        let tree = component.toJSON();

        expect(tree.props.className).toContain('cart-box');
    });

    test('Should have a ul list', () => {
        const testInstance = component.root;
        expect(testInstance.findByType('ul')).toBeTruthy();
    });
    
    test('Should have a img tag', () => {
        const testInstance = component.root;
        expect(testInstance.findByType('img')).toBeTruthy();
    });
});

