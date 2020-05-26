const products_filter_data = {
    'rackets': [
        {
            title: 'SIZE',
            value: 'size',
            options: [
                { name: 'L0', value: 'L0' },
                { name: 'L1', value: 'L1' },
                { name: 'L2', value: 'L2' },
                { name: 'L3', value: 'L3' },
                { name: 'L4', value: 'L4' }
            ]
        },
        {
            title: 'BRAND',
            value: 'brand',
            options: [
                { name: 'Head', value: 'head' },
                { name: 'Wilson', value: 'wilson' },
                { name: 'Babolat', value: 'babolat' },
                { name: 'Yonex', value: 'yonex' },
            ]
        },
        {
            title: 'STRING BED',
            value: 'string_bed',
            options: [
                { name: '16 X 19', value: '16_19' },
                { name: '18 X 20', value: '18_20' },
            ]
        },
        {
            title: 'PRODUCT TYPE',
            value: 'product_type',
            options: [
                { name: 'Control racket', value: 'control' },
                { name: 'Power racket', value: 'power' }
            ]
        },
        {
            title: 'MATURITY',
            value: 'maturity',
            options: [
                { name: 'Adults', value: 'adults' },
                { name: 'Kids', value: 'kids' }
            ]
        }
    ],
    'shoes': [
        {
            title: 'SIZE',
            value: 'size',
            options: [
                { name: '37', value: '37' },
                { name: '38', value: '38' },
                { name: '39', value: '39' },
                { name: '40', value: '40' },
                { name: '41', value: '41' },
                { name: '42', value: '42' },
                { name: '43', value: '43' },
                { name: '44', value: '44' },
                { name: '45', value: '45' },
                { name: '46', value: '46' },
                { name: '47', value: '47' }
            ]
        },
        {
            title: 'BRAND',
            value: 'brand',
            options: [
                { name: 'Nike', value: 'nike' },
                { name: 'Adidas', value: 'adidas' },
                { name: 'Asics', value: 'asics' },
                { name: 'Babolat', value: 'babolat' },
                { name: 'K-Swiss', value: 'k-swiss' }
            ]
        },
        {
            title: 'GROUND-TYPE',
            value: 'ground_type',
            options: [
                { name: 'Hard court', value: 'hard_court' },
                { name: 'Clay court', value: 'clay_court' },
                { name: 'Grass court', value: 'grass_court' }
            ]
        },
        {
            title: 'BASE COLOR',
            value: 'base_color',
            options: [
                { name: 'Wheat', value: 'wheat' },
                { name: 'black', value: 'black' },
                { name: 'White', value: 'white' },
                { name: 'Blue', value: 'blue' },
                { name: 'Champagne', value: 'champagne' },
                { name: 'Red', value: 'red' },
                { name: 'Yellow', value: 'yellow' },
                { name: 'Green', value: 'green' },
                { name: 'Pink', value: 'pink' }
            ]
        },

        {
            title: 'GENDER',
            value: 'gender',
            options: [
                { name: 'Male', value: 'male' },
                { name: 'Female', value: 'female' }
            ]
        }
    ],
    'grips':[
        {
            title: 'BRAND',
            value: 'brand',
            options: [
                { name: 'Wilson', value: 'wilson' },
                { name: 'Babolat', value: 'babolat' },
                { name: 'Yonex', value: 'yonex' }
            ]
        },
        {
            title: 'COLOR',
            value: 'color',
            options: [
                { name: 'White', value: 'white' },
                { name: 'Clay', value: 'clay' },
                { name: 'Black', value: 'black' },
                { name: 'Green', value: 'green' },

            ]
        }
    ],
    'strings':[
        {
            title: 'BRAND',
            value: 'brand',
            options: [
                { name: 'Wilson', value: 'wilson' },
                { name: 'Head', value: 'head' },
                { name: 'Luxilon', value: 'luxilon' },
                { name: 'Yonex', value: 'yonex' }

            ]
        },
        {
            title: 'COLOR',
            value: 'color',
            options: [
                { name: 'White', value: 'white' },
                { name: 'Green', value: 'green' },
                { name: 'Black', value: 'black' },
                { name: 'Silver', value: 'silver' },
                { name: 'Blue', value: 'blue' },
            ]
        },
        // {
        //     title: 'SIZE',
        //     value: 'size',
        //     options: [
        //         { name: '15L', value: '15L' },
        //         { name: '16L', value: '16L' },
        //         { name: '17L', value: '17L' },
        //     ]
        // }
    ],
    'dampeners':[
        {
            title: 'BRAND',
            value: 'brand',
            options: [
                { name: 'Wilson', value: 'wilson' },
                { name: 'Head', value: 'head' },
                { name: 'Robin Soderling', value: 'robin' },
            ]
        },
    ],
    'bands':[
        {
            title: 'COLOR',
            value: 'color',
            options: [
                { name: 'White', value: 'white' },
                { name: 'Black', value: 'black' },
            ]
        },
        {
            title: 'BRAND',
            value: 'brand',
            options: [
                { name: 'Nike', value: 'nike' },
                { name: 'Adidas', value: 'adidas' },
                { name: 'Lotto', value: 'lotto' }
            ]
        },
    ],
    'bags':[
        {
            title: 'BRAND',
            value: 'brand',
            options: [
                { name: 'Wilson', value: 'wilson' },
                { name: 'Head', value: 'head' },
                { name: 'Babolat', value: 'babolat' },
                { name: 'Yonex', value: 'yonex' },
            ]
        },
        {
            title: 'PRODUCT TYPE',
            value: 'product_size',
            options: [
                { name: '12 Rackets', value: '12_rackets' },
                { name: '9 Rackets', value: '9_rackets' },
                { name: '6 Rackets', value: '6_rackets' },
                { name: 'Backpack', value: 'backpack' },

            ]
        }
    ]
}
export default products_filter_data