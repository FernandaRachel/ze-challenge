const delivery = {
    data: {
        pocSearch: [
            {
                __typename: 'POC',
                id: '532',
                status: 'AVAILABLE',
                tradingName: 'Distribuidor de Treinamento',
                officialName: 'Distribuidor de Treinamento',
                deliveryTypes: [
                    {
                        __typename: 'POCDeliveryType',
                        pocDeliveryTypeId: '1284',
                        deliveryTypeId: '16',
                        price: null,
                        title: 'RECEBER',
                        subtitle: 'em até uma hora',
                        active: true
                    }
                ]
            }
        ]
    }
}

export default function request() {
    return new Promise((resolve, reject) => {
        process.nextTick(() =>
            resolve(delivery)
        );
    });
}