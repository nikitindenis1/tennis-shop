

import babolat1 from '../../images/rackets/babolat/1.png'
import babolat2 from '../../images/rackets/babolat/2.png'
import babolat3 from '../../images/rackets/babolat/3.png'
import babolat4 from '../../images/rackets/babolat/4.png'
import babolat5 from '../../images/rackets/babolat/5.png'
import babolat6 from '../../images/rackets/babolat/6.png'
import babolat7 from '../../images/rackets/babolat/7.png'

import head1 from '../../images/rackets/head/1.png'
import head2 from '../../images/rackets/head/2.png'
import head3 from '../../images/rackets/head/3.png'
import head4 from '../../images/rackets/head/4.png'
import head5 from '../../images/rackets/head/5.png'
import head6 from '../../images/rackets/head/6.png'
import head7 from '../../images/rackets/head/7.png'
import head8 from '../../images/rackets/head/8.png'

import wilson1 from '../../images/rackets/wilson/1.png'
import wilson2 from '../../images/rackets/wilson/2.png'
import wilson3 from '../../images/rackets/wilson/3.png'
import wilson4 from '../../images/rackets/wilson/4.png'
import wilson5 from '../../images/rackets/wilson/5.png'
import wilson6 from '../../images/rackets/wilson/6.png'


import yonex1 from '../../images/rackets/yonex/1.png'
import yonex2 from '../../images/rackets/yonex/2.png'
import yonex3 from '../../images/rackets/yonex/3.png'
import yonex4 from '../../images/rackets/yonex/4.png'
import yonex5 from '../../images/rackets/yonex/5.png'
import yonex6 from '../../images/rackets/yonex/6.png'
let rackets_list = [
    {
        id: 'racket_1',
        title: 'Wilson Blade 98 18x20 - Black/Green',
        price: 150,
        brand: 'wilson',
        maturity: 'adults',
        size: ['L1', 'L2', 'L3'],
        img: wilson1,
        string_bed:'18_20',
        product_type:'control'
    },
    {
        id: 'racket_2',
        title: 'Wilson Ultra 100 Countervail - Blue',
        price: 144.5,
        brand: 'wilson',
        maturity: 'adults',
        size: ['L1', 'L2', 'L3'],
        img: wilson2,
        string_bed:'16_19',
        product_type:'power'
    },
    {
        id: 'racket_3',
        title: 'Wilson Pro Staff RF97 - Black',
        price: 100,
        brand: 'wilson',
        maturity: 'adults',
        string_bed:'16_19',
        size: ['L1', 'L2', 'L3'],
        img: wilson3,
        product_type:'control'
    },
    {
        id: 'racket_4',
        title: 'Wilson Ultra 26 - Black/Blue',
        price: 76.50,
        brand: 'wilson',
        maturity: 'kids',
        string_bed:'16_19',
        size: ['L1', 'L2', 'L3'],
        img: wilson4,
        product_type:'control'
    },
    {
        id: 'racket_5',
        title: 'Wilson Roland Garros Elite 25 - White/Navy/Clay',
        price: 22.50,
        brand: 'wilson',
        maturity: 'kids',
        string_bed:'16_19',
        size: ['L1', 'L2', 'L3'],
        img: wilson5,
        product_type:'control'
    },
    {
        id: 'racket_6',
        title: 'Wilson Blade 26 - Black/Green',
        price: 67.5,
        brand: 'wilson',
        maturity: 'kids',
        string_bed:'16_19',
        size: ['L1', 'L2', 'L3'],
        img: wilson6,
        product_type:'control'
    },
    {
        id: 'racket_7',
        title: 'HEAD Graphene 360+ Speed Pro - White/Black',
        price: 178.50,
        brand: 'head',
        maturity: 'adults',
        size: ['L1', 'L2', 'L3'],
        img: head1,
        string_bed:'18_20',
        product_type:'control'
    },
    {
        id: 'racket_8',
        title: 'HEAD Graphene 360+ Gravity Tour - Teal/Red',
        price: 165,
        brand: 'head',
        maturity: 'adults',
        size: ['L1', 'L2', 'L3'],
        img: head2,
        string_bed:'18_20',
        product_type:'control'
    },
    {
        id: 'racket_9',
        title: 'HEAD Graphene 360 Extreme Pro - Yellow/Navy',
        price: 119.50,
        brand: 'head',
        maturity: 'adults',
        size: ['L1', 'L2', 'L3'],
        img: head3,
        string_bed:'16_19',
        product_type:'power'
    },
    {
        id: 'racket_10',
        title: 'HEAD Graphene 360+ Speed Jr. - White/Blacky',
        price: 76.50,
        brand: 'head',
        maturity: 'kids',
        size: ['L1', 'L2', 'L3'],
        img: head4,
        string_bed:'16_19',
        product_type:'power'
    },
    {
        id: 'racket_11',
        title: 'HEAD Graphene 360 Gravity Junior - Teal/Red',
        price:77,
        brand: 'head',
        maturity: 'kids',
        size: ['L1', 'L2', 'L3'],
        img: head5,
        string_bed:'16_19',
        product_type:'power'
    },
    {
        id: 'racket_12',
        title: 'HEAD Radical 25 - Grey/Orange',
        price: 20,
        brand: 'head',
        maturity: 'kids',
        size: ['L1', 'L2', 'L3'],
        img: head6,
        string_bed:'16_19',
        product_type:'power'
    },
    {
        id: 'racket_13',
        title: 'Yonex Ezone 98 - Deep Blue',
        price: 190,
        brand: 'yonex',
        maturity: 'adults',
        size: [',L1', 'L2', 'L3'],
        img: yonex1,
        string_bed:'16_19',
        product_type:'power'
    },
    {
        id: 'racket_14',
        title: 'Yonex Vcore Pro 97 HD - Matte Green',
        price: 185,
        brand: 'yonex',
        maturity: 'adults',
        size: ['L1', 'L2', 'L3'],
        img: yonex2,
        string_bed:'18_20',
        product_type:'control'
    },
    {
        id: 'racket_15',
        title: 'Yonex Vcore 95 Unstrung - Flame Red',
        price: 125,
        brand: 'yonex',
        maturity: 'adults',
        size: ['L1', 'L2', 'L3'],
        img: yonex3,
        string_bed:'16_19',
        product_type:'control'
    },
    {
        id: 'racket_16',
        title: 'Yonex Ezone 26 - Deep Blue',
        price: 95,
        brand: 'yonex',
        maturity: 'kids',
        size: ['L1', 'L2', 'L3'],
        img: yonex4,
        string_bed:'16_19',
        product_type:'control'
    },
    {
        id: 'racket_17',
        title: 'Yonex Vcore 26 - Flame Red',
        price: 68,
        brand: 'yonex',
        maturity: 'kids',
        size: ['L1', 'L2', 'L3'],
        img: yonex5,
        string_bed:'16_19',
        product_type:'control'
    },
    {
        id: 'racket_18',
        title: 'Yonex Ezone 25 Junior - Smash Pink',
        price: 24,
        brand: 'yonex',
        maturity: 'kids',
        size: ['L1', 'L2', 'L3'],
        img: yonex6,
        string_bed:'16_19',
        product_type:'control'
    },
    {
        id: 'racket_19',
        title: 'Babolat Pure Aero VS - Black/Yellow',
        price: 187,
        brand: 'babolat',
        maturity: 'adults',
        size: ['L1', 'L2', 'L3'],
        img: babolat1,
        string_bed:'16_19',
        product_type:'power'
    },
    {
        id: 'racket_20',
        title: 'Babolat Pure Strike 16/19 - White/Red/Black',
        price: 150,
        brand: 'babolat',
        maturity: 'adults',
        size: ['L1', 'L2', 'L3'],
        img: babolat2,
        string_bed:'16_19',
        product_type:'control'
    },
    {
        id: 'racket_21',
        title: 'Babolat Pure Aero - Yellow/Black',
        price: 139,
        brand: 'babolat',
        maturity: 'adults',
        size: ['L1', 'L2', 'L3'],
        img: babolat3,
        string_bed:'16_19',
        product_type:'power'
    },
    {
        id: 'racket_22',
        title: 'Babolat Pure Aero Junior 26 - Yellow/Black',
        price: 74,
        brand: 'babolat',
        maturity: 'kids',
        size: ['L1', 'L2', 'L3'],
        img: babolat5,
        string_bed:'16_19',
        product_type:'power'
    },
    {
        id: 'racket_23',
        title: 'Babolat Pure Drive Junior 26 - White/Pink/Blue',
        price: 67.5,
        brand: 'babolat',
        maturity: 'kids',
        size: ['L1', 'L2', 'L3'],
        img: babolat6,
        string_bed:'16_19',
        product_type:'power'
    },
    {
        id: 'racket_24',
        title: 'Babolat Pure Strike Junior 26 - White/Red/Black',
        price: 67.5,
        brand: 'babolat',
        maturity: 'kids',
        size: ['L1', 'L2', 'L3'],
        img: babolat7,
        string_bed:'16_19',
        product_type:'power'
    },
    {
        id: 'racket_25',
        title: 'HEAD Graphene 360+ Gravity MP - Teal/Red',
        price: 175,
        brand: 'head',
        maturity: 'adults',
        size: ['L1', 'L2', 'L3'],
        img: head7,
        string_bed:'16_19',
        product_type:'control'
    },
    {
        id: 'racket_26',
        title: 'HEAD Graphene 360 Radical MP - Grey/Orange',
        price: 150,
        brand: 'head',
        maturity: 'adults',
        size: ['L1', 'L2', 'L3'],
        img: head7,
        string_bed:'16_19',
        product_type:'control'
    }
]

rackets_list = rackets_list.map(elem => {
    return {
        ...elem, 
        type:'rackets'
    }
})
export default rackets_list