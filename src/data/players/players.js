import federer from '../../images/players/federer.png'
import novak from '../../images/players/novak.png'
import shapovalov from '../../images/players/shapovalov.png'
import murray from '../../images/players/murray.png'
import zverev from '../../images/players/zverev.png'
import kyrgios from '../../images/players/kyrgios.png'
import thiem from '../../images/players/thiem.png'
import nadal from '../../images/players/nadal.png'


const players = [
    {
        id: 'player_1',
        name: 'Roger Federer',
        img: federer,
        items: [
                'bag_1',
                'racket_3',
                'shoe_27',
                'grip_6'
        ]
    },
    {
        id: 'player_2',
        name: 'Rafael Nadal',
        img: nadal,
        items:['racket_21', 'bag_10', 'shoe_23', 'grip_8']
    },
    {
        id: 'player_3',
        name: 'Alexander Zverev',
        img: zverev,
        items:['shoe_1', 'bag_13', 'racket_25', 'dampener_1']
    },
    {
        id: 'player_4',
        name: 'Novak Djokovic',
        img: novak,
        items:['racket_7','bag_5', 'shoe_38', 'string_1' ]
    },
    {
        id: 'player_5',
        name: 'Andy Murray',
        img: murray,
        items:['racket_26', 'bag_14', 'dampener_3']
    },
    {
        id: 'player_6',
        name: 'Nick Kyrgios',
        img: kyrgios,
        items:['racket_13', 'shoe_33', 'grip_2']
    },
    {
        id: 'player_7',
        name: 'Denis Shapovalov',
        img: shapovalov,
        items:['racket_15', 'bag_15', 'shoe_72', 'string_6']
    },
    {
        id: 'player_8',
        name: 'Dominic Thiem',
        img: thiem,
        items:['racket_20', 'bag_9', 'shoe_1', 'band_3']
    }
]
export default players