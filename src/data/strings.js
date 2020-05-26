
import head1 from '../images/accessories/strings/head/1.png'
import head2 from '../images/accessories/strings/head/2.png'


import wilson1 from '../images/accessories/strings/wilson/1.png'
import wilson2 from '../images/accessories/strings/wilson/2.png'


import yonex1 from '../images/accessories/strings/yonex/1.png'
import yonex2 from '../images/accessories/strings/yonex/2.png'

import luxilon1 from '../images/accessories/strings/luxilon/1.png'
import luxilon2 from '../images/accessories/strings/luxilon/2.png'


let strings = [
    {
        id:'string_1',
        price:110,
        title:'HEAD Hawk Touch 17/1.25mm 120m Reel - Anthracite',
        brand:'head',
        color:'black',
        img:head1,
        // size:'17L'

    },
    {
        id:'string_2',
        price:130,
        title:'HEAD Lynx Tour 17/1.25mm 200m Reel - Natural',
        brand:'head',
        color:'silver',
        img:head2,
        // size:'17L'

    },
    {
        id:'string_3',
        price:130,
        title:'Wilson Revolve Spin Green 17 Reel',
        brand:'wilson',
        color:'green',
        img:wilson2,
        // size:'17L'

    },
    {
        id:'string_4',
        price:30,
        title:'Wilson Natural Gut Pro 16L - Natural Gut',
        brand:'wilson',
        color:'white',
        img:wilson1,
        // size:'16L'

    },
    {
        id:'string_5',
        price:150,
        title:'Yonex Rexis 1.25mm/200m Reel - Silver',
        brand:'wilson',
        color:'silver',
        img:yonex1,
        // size:'17L'

    },
   {
    id:'string_6',
    price:70,
    title:'Yonex PolyTour Pro 1.25mm/200m - Blue',
    brand:'wilson',
    color:'blue',
    img:yonex2,
    // size:'16L'
   },
   {
    id:'string_7',
    price:16,
    title:'Luxilon Alupower 127 Spin (16x1.27)- Silver',
    brand:'wilson',
    color:'silver',
    img:luxilon1,
    // size:'16L'
   },
   {
    id:'string_8',
    price:13,
    title:'Luxilon Adrenaline 130 16L - Silver',
    brand:'wilson',
    color:'silver',
    img:luxilon2,
    // size:'16L'
   }


]


strings = strings.map(elem => {
    return {
        ...elem, 
        category_type:'accessories',
        type:'strings'
    }
})
export default strings