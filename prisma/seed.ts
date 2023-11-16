import { PrismaClient } from '@prisma/client';
const db = new PrismaClient();

function getProducts() {
    return [
        {
            id: 'fd105551-0f0d-4a9f-bc41-c559c8a17201',
            name: 'Zakładka jamnik',
            price: 60,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id.',
            quantity: 5,
        },
        {
            id: 'fd105551-0f0d-4a9f-bc41-c559c8a17202',
            name: 'Wiewiórka z orzechem',
            price: 60,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id.',
            quantity: 3,
        },
        {
            id: 'fd105551-0f0d-4a9f-bc41-c559c8a17203',
            name: 'Mały dzik',
            price: 60,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id.',
            quantity: 3,
        },
        {
            id: 'fd105551-0f0d-4a9f-bc41-c559c8a17204',
            name: 'Kot',
            price: 60,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id.',
            quantity: 5,
        },
        {
            id: 'fd105551-0f0d-4a9f-bc41-c559c8a17205',
            name: 'Kokoszka',
            price: 60,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id.',
            quantity: 3,
        },
        {
            id: 'fd105551-0f0d-4a9f-bc41-c559c8a17206',
            name: 'Kogut',
            price: 60,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id.',
            quantity: 5,
        },
        {
            id: 'fd105551-0f0d-4a9f-bc41-c559c8a17207',
            name: 'Ślimak',
            price: 60,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id.',
            quantity: 5,
        },
        {
            id: 'fd105551-0f0d-4a9f-bc41-c559c8a17208',
            name: 'Aksolot',
            price: 60,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id.',
            quantity: 5,
        },
        {
            id: 'fd105551-0f0d-4a9f-bc41-c559c8a17209',
            name: 'Żółw',
            price: 60,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id.',
            quantity: 5,
        },
        {
            id: 'fd105551-0f0d-4a9f-bc41-c559c8a17210',
            name: 'Wieloryb',
            price: 60,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id.',
            quantity: 5,
        }
    ];
}

function getPhotos() {
    return [
        {
            id: 'fd105551-0f0d-4a9f-bc41-c559c8a17211',
            url: '371776583_990724025338986_2685479795084748902_n.jpg',
            productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17201'
        },
        {
            id: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e12',
            url: '371814479_990724098672312_3723946886239022940_n.jpg',
            productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17201'
        },
        {
            id: 'fd105551-0f0d-4a9f-bc41-c559c8a17213',
            url: '358426347_960537781690944_8606506526435375133_n.jpg',
            productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17202'
        },
        {
            id: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e14',
            url: '358381392_960537831690939_5781446284955757243_n.jpg',
            productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17202'
        },
        {
            id: 'fd105551-0f0d-4a9f-bc41-c559c8a17215',
            url: '358411100_960526838358705_539152116388787894_n.jpg',
            productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17203'
        },
        {
            id: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e16',
            url: '358377942_960526761692046_5508144819912875197_n.jpg',
            productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17203'
        },
        {
            id: 'fd105551-0f0d-4a9f-bc41-c559c8a17217',
            url: '358527736_960456648365724_4514030975699391551_n.jpg',
            productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17204'
        },
        {
            id: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e18',
            url: '358467234_960456708365718_3971477538936756314_n.jpg',
            productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17204'
        },
        {
            id: 'fd105551-0f0d-4a9f-bc41-c559c8a17219',
            url: '358143463_959798551764867_7854662864623180344_n.jpg',
            productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17205'
        },
        {
            id: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e20',
            url: '358144931_959799035098152_7389500274773154307_n.jpg',
            productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17205'
        },
        {
            id: 'fd105551-0f0d-4a9f-bc41-c559c8a17221',
            url: '358083692_959780021766720_9111875261852697598_n.jpg',
            productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17206'
        },
        {
            id: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e22',
            url: '358447052_959780018433387_1060227494353315176_n.jpg',
            productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17206'
        },
        {
            id: 'fd105551-0f0d-4a9f-bc41-c559c8a17223',
            url: '271953840_351634443442260_2873077697341874446_n.jpg',
            productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17207'
        },
        {
            id: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e24',
            url: '272029285_351634470108924_1146401604042036013_n.jpg',
            productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17207'
        },
        {
            id: 'fd105551-0f0d-4a9f-bc41-c559c8a17225',
            url: '272041090_351634473442257_2123283098573286246_n.jpg',
            productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17207'
        },
        {
            id: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e26',
            url: '271245620_343629880909383_2222434657486056006_n.jpg',
            productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17208'
        },
        {
            id: 'fd105551-0f0d-4a9f-bc41-c559c8a17227',
            url: '271445530_343629924242712_7132537973537535592_n.jpg',
            productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17208'
        },
        {
            id: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e28',
            url: '265699359_327771122495259_6193749013456811605_n.jpg',
            productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17209'
        },
        {
            id: 'fd105551-0f0d-4a9f-bc41-c559c8a17229',
            url: '264866493_327771112495260_499402322074637101_n.jpg',
            productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17209'
        },
        {
            id: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e30',
            url: '132496835_115219417083765_161918280922899516_n.jpg',
            productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17210'
        },


    ];
}

function getOrders() {
    return [
        {
            id: 'fd105551-0f0d-4a9f-bc41-c559c8a17260',
            email: 'tester@example.com',
            address: '1234 Elm Street, Apt 567, Cityville, Stateland, 56789'
        }
    ];
}

function getProductsOnOrders() {
    return [
        {
            productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17210',
            orderId: 'fd105551-0f0d-4a9f-bc41-c559c8a17260'
        },
        {
            productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17208',
            orderId: 'fd105551-0f0d-4a9f-bc41-c559c8a17260'
        },
    ]

}

async function seed() {
    await Promise.all(
        getProducts().map((product) => {
            return db.product.create({ data: product });
        }),
    );

    await Promise.all(
        getOrders().map((order) => {
            return db.order.create({
                data: order
            });
        }),
    );

    await Promise.all(
        getPhotos().map(({productId, ...photoData}) => {
            return db.photo.create({ 
                data: {
                ...photoData, 
                product: {
                    connect: { id: productId}
                }
            } });
        }),
    );

    await Promise.all(
        getProductsOnOrders().map((orderProduct) => {
            return db.productsOnOrders.create({ data: orderProduct });
        }),
    );
}

seed();