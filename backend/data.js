import bcrypt from 'bcryptjs';

const data = {
    users: [
        {
            name: 'Thrishul',
            email: 'admin@example.com',
            password: bcrypt.hashSync('123456'),
            isAdmin: true,
        },
        {
            name: 'Vishwas',
            email: 'user@example.com',
            password: bcrypt.hashSync('123456'),
            isAdmin: false,
        },
    ],
    products: [
        {
            //_id:'1',
            name: 'Silver spoon',
            slug: 'silver-spoon',
            category: 'Silver Pooja Items',
            image: '/images/Silverspoon.jpg',
            price: 1200,
            countInStock: 100,
            brand: "Krishna",
            rating: 4.5,
            numReviews: 10,
            description: 'This Silver Aarti Spoon Burning Camphor can also bring prosperity and abundance of wealth to your family.'
        },
        {
            //_id: '2',
            name: 'Peacock Deepam',
            slug: 'peacock-deepam',
            category: 'Silver Pooja Items',
            image: '/images/Peacockdeepam.jpg',
            price: 1300,
            countInStock: 100,
            brand: "Krishna",
            rating: 4.5,
            numReviews: 10,
            description: 'Make your festive Pooja more special with this Peacock Deepam crafted in 92.5Purity silver.'
        },
        {
            //_id: '3',
            name: 'Varalaxmi Diya',
            slug: 'varalaxmi-deepam',
            category: 'Silver Pooja Items',
            image: '/images/Deepam3.jpg',
            price: 1400,
            countInStock: 100,
            brand: "Krishna",
            rating: 4.5,
            numReviews: 10,
            description: 'Make your festive Pooja more special with this Peacock Deepam crafted in 92.5Purity silver.'
        },
        {
            //_id: '4',
            name: 'Basket 1',
            slug: 'silver-basket-one',
            category: 'Silver Basket ',
            image: '/images/Basket1.jpg',
            price: 1500,
            countInStock: 100,
            brand: "Krishna",
            rating: 4.5,
            numReviews: 10,
            description: 'Inspired by the Contemporary Art the Flower Basket crafted in the Anique Nakshi Workmanship using Silver embellish the Magnifice'
        },
        {
            //_id: '5',
            name: 'Basket 2',
            slug: 'silver-basket-two',
            category: 'Silver Basket ',
            image: '/images/Basket2.jpg',
            price: 12600,
            countInStock: 100,
            brand: "Krishna",
            rating: 4.5,
            numReviews: 10,
            description: 'Inspired by the Contemporary Art the Flower Basket crafted in the Anique Nakshi Workmanship using Silver embellish the Magnifice'
        },
        {
            //_id: '6',
            name: 'Lord hanuman',
            slug: 'lord-hanuman',
            category: 'Silver Idol',
            image: '/images/LordHanuman.jpg',
            price: 3000,
            countInStock: 100,
            brand: "Krishna",
            rating: 4.5,
            numReviews: 10,
            description: 'A divine statue of hindu Hanuman idol aslo called Sankat Mochan Bajarangbali that looks classy and antique.'
        },
        {
            //_id: '7',
            name: 'Radha Krishna',
            slug: 'radha-krishna',
            category: 'Silver Idol',
            image: '/images/RadhaKrishna.jpg',
            price: 3000,
            countInStock: 100,
            brand: "Krishna",
            rating: 4.5,
            numReviews: 10,
            description: 'A divine statue of hindu Radha Krishna idol aslo called Sankat Mochan Bajarangbali that looks classy and antique.'
        },
        {
            //_id: '8',
            name: 'Silver Glass',
            slug: 'silver-glass',
            category: 'Dinner',
            image: '/images/Dinner1.jpg',
            price: 3000,
            countInStock: 100,
            brand: "Krishna",
            rating: 4.5,
            numReviews: 10,
            description: 'Celebrate your Gala times with finely decorated Glass crafted using Silver'
        },
        {
            //_id: '9',
            name: 'Silver Plate',
            slug: 'silver-plate',
            category: 'Dinner',
            image: '/images/Dinner2.jpg',
            price: 3000,
            countInStock: 100,
            brand: "Krishna",
            rating: 4.5,
            numReviews: 10,
            description: 'Celebrate your Gala times with finely decorated plate crafted using Silver'
        },
    ],
};

export default data;