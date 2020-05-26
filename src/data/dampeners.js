
import head1 from '../images/accessories/dampeners/head/1.png'
import head2 from '../images/accessories/dampeners/head/2.png'
import head3 from '../images/accessories/dampeners/head/3.png'


import wilson1 from '../images/accessories/dampeners/wilson/1.png'
import wilson2 from '../images/accessories/dampeners/wilson/2.png'
import wilson3 from '../images/accessories/dampeners/wilson/3.png'


import robin1 from '../images/accessories/dampeners/robin/1.png'
import robin2 from '../images/accessories/dampeners/robin/2.png'
import robin3 from '../images/accessories/dampeners/robin/3.png'



let dampeners = [
    {
        id:'dampener_1',
        price:5,
        brand:'head',
        color:'black',
        img:head1,
        title:'HEAD Zverev Dampener'

    },
    {
        id:'dampener_2',
        price:5,
        brand:'head',
        color:'white',
        img:head2,
        title:'HEAD Djokovic Dampener - White'

    },
    {
        id:'dampener_3',
        price:5,
        brand:'head',
        color:'yellow',
        img:head3,
        title:'HEAD Pro Dampener - Black'

    },
    {
        id:'dampener_4',
        price:5,
        brand:'wilson',
        color:'white',
        img:wilson1,
        title:'Wilson Pro Feel - Yellow/Gold'

    },
    {
        id:'dampener_5',
        price:7.5,
        brand:'wilson',
        color:'black',
        img:wilson2,
        title:'Wilson Emoti Fun Dampeners Big Smile/Call Me - Yellow'

    },
    {
        id:'dampener_6',
        price:6,
        brand:'wilson',
        color:'black',
        img:wilson3,
        title:'Wilson Vibra Fun Peace/YinYang Dampeners'

    },
    {
        id:'dampener_7',
        price:6,
        brand:'robin',
        color:'white',
        img:robin1,
        title:'Robin Soderling RS Vibra Stop Dampener - Yellow'

    },
    {
        id:'dampener_8',
        price:6,
        brand:'robin',
        color:'black',
        img:robin2,
        title:'Robin Soderling RS Vibra Stop Dampener - Black'

    },
    {
        id:'dampener_9',
        price:6,
        brand:'robin',
        color:'black',
        img:robin3,
        title:'Robin Soderling RS Vibra Stop Dampener - White'

    }
]

dampeners = dampeners.map(elem => {
    return {
        ...elem, 
        category_type:'accessories',
        type:'dampeners'
    }
})

export default dampeners