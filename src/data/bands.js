
import lotto1 from '../images/accessories/bands/lotto/1.png'
import lotto2 from '../images/accessories/bands/lotto/2.png'


import adidas1 from '../images/accessories/bands/adidas/1.png'
import adidas2 from '../images/accessories/bands/adidas/2.png'


import nike1 from '../images/accessories/bands/nike/1.png'
import nike2 from '../images/accessories/bands/nike/2.png'
let bands = [
    {
        id:'band_1',
        price:12,
        title:'Lotto Wristbands - Brilliant White',
        brand:'lotto',
        color:'white',
        img:lotto1

    },
    {
        id:'band_2',
        price:27,
        title:'Lotto Twist Wrist B - Navy/White',
        brand:'lotto',
        color:'black',
        img:lotto2

    },
    {
        id:'band_3',
        price:6,
        title:'adidas Tennis Wristband Small - Black/White',
        brand:'adidas',
        color:'black',
        img:adidas1

    },
    {
        id:'band_4',
        price:5,
        title:'adidas Single Wristbands - Black',
        brand:'adidas',
        color:'black',
        img:adidas2

    },
    {
        id:'band_5',
        price:5.5,
        title:'Nike Swoosh Wristband - White/Black',
        brand:'nike',
        color:'white',
        img:nike1

    },
    {
        id:'band_6',
        price:8,
        title:'Nike Swoosh Doublewide Wristbands - Black/White',
        brand:'nike',
        color:'black',
        img:nike2

    }
]

bands = bands.map(elem => {
    return {
        ...elem, 
        category_type:'accessories',
        type:'bands'
    }
})

export default bands