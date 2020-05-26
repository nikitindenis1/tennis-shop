
import yonex1 from '../images/accessories/grips/yonex/1.png'
import yonex2 from '../images/accessories/grips/yonex/2.png'
import yonex3 from '../images/accessories/grips/yonex/3.png'


import wilson1 from '../images/accessories/grips/wilson/1.png'
import wilson2 from '../images/accessories/grips/wilson/2.png'
import wilson3 from '../images/accessories/grips/wilson/3.png'


import babolat1 from '../images/accessories/grips/babolat/1.png'
import babolat2 from '../images/accessories/grips/babolat/2.png'
import babolat3 from '../images/accessories/grips/babolat/3.png'


let grips = [
    {
        id:'grip_1',
        price:6,
        title:'Yonex Super Grap 3 Pack - Green',
        brand:'yonex',
        color:'green',
        img:yonex1

    },
    {
        id:'grip_2',
        price:6,
        title:'Yonex SUPER GRIP X3 - White',
        brand:'yonex',
        color:'white',
        img:yonex2

    },
    {
        id:'grip_3',
        price:6,
        title:'Yonex Super Grap 3 Pack - Red',
        brand:'yonex',
        color:'red',
        img:yonex3

    },
    {
        id:'grip_4',
        price:7,
        title:'Wilson Roland Garros Pro Overgrip - Clay',
        brand:'wilson',
        color:'clay',
        img:wilson1

    },
    {
        id:'grip_5',
        price:7,
        title:'Wilson Camo Overgrip - Black',
        brand:'wilson',
        color:'black',
        img:wilson2

    },
    {
        id:'grip_6',
        price:7,
        title:'Wilson Comfort Pro Overgrip x3 - White',
        brand:'wilson',
        color:'white',
        img:wilson3

    },
    {
        id:'grip_7',
        price:7,
        title:'Babolat Tour Original Overgrip x3 - Black',
        brand:'babolat',
        color:'black',
        img:babolat1

    },
    {
        id:'grip_8',
        price:7,
        title:'Babolat Tour Original Overgrip x3 - White',
        brand:'babolat',
        color:'white',
        img:babolat2

    },
    {
        id:'grip_9',
        price:7,
        title:'Babolat Overgrip USA - White',
        brand:'babolat',
        color:'white',
        img:babolat3

    }
]

grips = grips.map(elem => {
    return {
        ...elem, 
        category_type:'accessories',
        type:'grips'
    }
})
export default grips