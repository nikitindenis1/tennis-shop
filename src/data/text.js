import { PRODUCTS_ROUTE, CATEGORY_PRODUCTS, PRODUCT_CATEGORY_ROUTE, PLAYERS_ROUTE } from "../tools/routes"

const text = {
    'shoes': {
        text: 'Shoes',
        url: `${PRODUCTS_ROUTE.replace(':product_type', 'shoes')}`
    },
    'bags': {
        text: 'Bags',
        url: `${PRODUCTS_ROUTE.replace(':product_type', 'bags')
            }`
    },
    'rackets': {
        text: 'Rackets',
        url: `${PRODUCTS_ROUTE.replace(':product_type', 'rackets')
            }`
    },
    'strings': {
        text: 'Strings',
        url: `${CATEGORY_PRODUCTS.replace(':category_type', 'accessories').replace(':product_type', 'strings')}`
    },
    'dampeners': {
        text: 'Dampeners',
        url:`${CATEGORY_PRODUCTS.replace(':category_type', 'accessories').replace(':product_type', 'dampeners')}`
    },
    'grips': {
        text: 'Grips',
        url:`${CATEGORY_PRODUCTS.replace(':category_type', 'accessories').replace(':product_type', 'grips')}`
    },
    'bands': {
        text: 'Bands',
        url: `${CATEGORY_PRODUCTS}/bands`
    },
    'accessories': {
        text: 'Accessories',
        url: PRODUCT_CATEGORY_ROUTE
    },
    'players': {
        text: 'Players',
        url: PLAYERS_ROUTE
    }
}
export default text