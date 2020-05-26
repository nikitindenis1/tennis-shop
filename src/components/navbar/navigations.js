import {  PRODUCT_CATEGORY_ROUTE, PLAYERS_ROUTE, PRODUCTS_ROUTE } from "../../tools/routes"

const navigations = [
    {
        name:'SHOES',
        url:PRODUCTS_ROUTE.replace(':product_type', 'shoes')
    },
    {
        name:'BAGS',
        url:PRODUCTS_ROUTE.replace(':product_type', 'bags')
    },
    {
        name:'RACKETS',
        url:PRODUCTS_ROUTE.replace(':product_type', 'rackets')
    },
    {
        name:'ACCESSORIES',
        url:PRODUCT_CATEGORY_ROUTE.replace(':category_type', 'accessories')
    },
    {
        name:'PLAYERS',
        url:PLAYERS_ROUTE
    }
]
export default navigations