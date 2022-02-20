const app = Vue.createApp({
    data() {
        return {
            product: 'Chaussette',
            image: './assets/images/socks_blue.jpg',
            inStock: true,
            details: ['50% coton', '30% laine', '20% polyester'],
            variants: [
                {id: 1234 , color: 'bleu'},
                {id: 3245 , color: 'vert'}
            ]
        }
    }
})
