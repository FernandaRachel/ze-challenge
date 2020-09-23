import axios from 'axios';
import urls from '../../src/utils/url-config';

const getProductList = () => {
    axios.post(urls['products-list'], {
        query: `query pocSearchMethod($now: DateTime!, $algorithm: String!, $lat: String!, $long: String!) {
            pocSearch(now: $now, algorithm: $algorithm, lat: $lat, long: $long) {
                __typename
                id
                status
                tradingName
                officialName
                deliveryTypes {
                    __typename
                    pocDeliveryTypeId
                    deliveryTypeId
                    price
                    title
                    subtitle
                    active
                }
                paymentMethods {
                    __typename
                    pocPaymentMethodId
                    paymentMethodId
                    active
                    title
                    subtitle
                }
                pocWorkDay {
                    __typename
                    weekDay
                    active
                    workingInterval {
                        __typename
                        openingTime
                        closingTime
                    }
                }
                address {
                    __typename
                    address1
                    address2
                    number
                    city
                    province
                    zip
                    coordinates
                }
                phone {
                    __typename
                    phoneNumber
                }
            }
        }`,
        variables: {
            algorithm: 'NEAREST',
            lat: '-23.632919',
            long: '-46.699453',
            now: '2017-08-01T20:00:00.000Z'
        }
    },
        {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((resp) => {
            console.log(resp);
        })
} 

export default  getProductList;

