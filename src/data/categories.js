import dampeners from '../images/accessories/dampeners.png'
import grips from '../images/accessories/grips.jpg'
import strings from '../images/accessories/strings.png'
import bands from '../images/accessories/bands.jpg'
import { CATEGORY_PRODUCTS, PRODUCTS_ROUTE } from '../tools/routes'
import shoes from '../images/shoes.png'
import bags from '../images/bags.png'
import rackets from '../images/rackets.png'
import accessories from '../images/accessories.png'

const categories = {
    'accessories': {
        url: CATEGORY_PRODUCTS,
        class:'categories__secondary',
        list: [
            {
                name: 'GRIPS',
                value: 'grips',
                img: grips,
                text: 'GRIPS & OVERGRIPS'
            },
            {
                name: 'STRINGS',
                value: 'strings',
                img: strings,
                text: 'HUGE RANGE OF TENNIS STRINGS'
            },
            {
                name: 'DAMPENERS',
                value: 'dampeners',
                img: dampeners,
                text: 'REDUCE RACKET VIBRATION'
            },
            {
                name: 'WRIST & HAND BANDS',
                value: 'bands',
                img: bands,
                text: 'WIDE RANGE OF SWEATBANDS'
            }
        ]
    },
    undefined:{
        url:PRODUCTS_ROUTE,
        class:'categories__main',
        list:[
            {
                name: 'SHOES',
                value: 'shoes',
                img: shoes,
                text: 'TENNIS SHOES'
            },,
            {
                name: 'RACKETS',
                value: 'rackets',
                img: rackets,
                text: 'TENNIS RACKETS'
            },
            {
                name: 'BAGS',
                value: 'bags',
                img: bags,
                text: 'TENNIS BAGS'
            },  
            {
                name: 'ACCESSORIES',
                value: 'accessories',
                img: accessories,
                text: 'TENNIS ACCESSORIES',
                category_type:'accessories'
            },  
        ]
    }
}
export default categories