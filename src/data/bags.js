
import wilson1 from '../images/bags/wilson/1.png'
import wilson2 from '../images/bags/wilson/2.png'
import wilson3 from '../images/bags/wilson/3.png'
import wilson4 from '../images/bags/wilson/4.png'

import head1 from '../images/bags/head/1.png'
import head2 from '../images/bags/head/2.png'
import head3 from '../images/bags/head/3.png'
import head4 from '../images/bags/head/4.png'
import head5 from '../images/bags/head/5.png'
import head6 from '../images/bags/head/6.png'

import babolat1 from '../images/bags/babolat/1.png'
import babolat2 from '../images/bags/babolat/5.png'
import babolat3 from '../images/bags/babolat/3.png'
import babolat4 from '../images/bags/babolat/4.png'


import yonex1 from '../images/bags/yonex/1.png'

let bags = [
    {
        id: 'bag_1',
        title: 'Wilson Roland Garros Tour 12 Racket Bag - Clay/Navy/White',
        brand: 'wilson',
        img: wilson1,
        price: 88,
        product_size: '12_rackets'
    },
    {
        id: 'bag_2',
        title: 'Wilson Roland Garros Team 9 Racket Bag - Navy/Clay',
        brand: 'wilson',
        img: wilson2,
        price: 56,
        product_size: '9_rackets'

    },
    {
        id: 'bag_3',
        brand: 'wilson',
        img: wilson3,
        price: 32,
        product_size: 'backpack',

        title: 'Wilson Super Tour Backpack - Charcoal/Green',
    },
    {
        id: 'bag_4',
        brand: 'wilson',
        img: wilson4,
        price: 57,
        product_size: '6_rackets',
        title: 'Wilson Roland Garros Team 3 Racket Bag - Navy/Clay',
    },

    {
        id: 'bag_5',
        brand: 'head',
        img: head1,
        price: 72,
        title: 'HEAD Djokovic 12R Monstercombi - White/Black',
        product_size: '12_rackets'
    },
    {
        id: 'bag_6',
        brand: 'head',
        img: head2,
        price: 64,
        product_size: '9_rackets',
        title: 'HEAD Djokovic 9R Monstercombi - White/Black',
    },
    {
        id: 'bag_7',
        brand: 'head',
        img: head3,
        price: 56,
        product_size: '6_rackets',
        title: 'HEAD Djokovic 6R Monstercombi - White/Black',
    },
    {
        id: 'bag_8',
        brand: 'head',
        img: head4,
        price: 44,
        title: 'HEAD Djokovic Backpack - White/Black',
        product_size: 'backpack'
    },
    {
        id: 'bag_9',
        brand: 'babolat',
        img: babolat1,
        price: 76,
        product_size: '12_rackets',
        title: 'Babolat Pure Strike 12 Racket Bag - White/Red',
    },
    {
        id: 'bag_10',
        brand: 'babolat',
        img: babolat2,
        price: 56,
        product_size: '9_rackets',
        title: 'Babolat Pure Line Racket Holder X9 - Yellow/Black',
    },
    {
        id: 'bag_11',
        brand: 'babolat',
        img: babolat3,
        price: 44,
        product_size: 'backpack',
        title: 'Babolat Pure Strike Backpack - White/Red',
    },
    {
        id: 'bag_12',
        brand: 'babolat',
        img: babolat4,
        price: 48,
        product_size: '6_rackets',
        title: 'Babolat Pure Line Racket Holder X6 - Yellow/Black',

    },
    {
        id: 'bag_13',
        title: 'HEAD Gravity Sport Bag - Black/Teal',
        brand: 'head',
        img: head5,
        price: 64,
        product_size: '6_rackets'
    },
    {
        id: 'bag_14',
        title: 'HEAD Radical 12R Monstercombi',
        brand: 'head',
        img: head6,
        price: 55,
        product_size: '12_rackets'
    },
    {
        id: 'bag_15',
        title: 'Yonex Vcore Pro Racket Bag x9 - Flame Red',
        brand: 'yonex',
        img: yonex1,
        price: 80,
        product_size: '9_rackets'
    },
]

bags = bags.map(elem => {
    return {
        ...elem,
        type:'bags'
    }
})

export default bags