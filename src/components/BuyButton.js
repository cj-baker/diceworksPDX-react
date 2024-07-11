import { useEffect } from 'react';
import ShopifyBuy from '@shopify/buy-button-js';

const shopifyClient = ShopifyBuy.buildClient({
    domain: 'diceworkspdx.myshopify.com',
    storefrontAccessToken: '008e8c7922b6978928581e5a4ecb163b'
});

const ui = ShopifyBuy.UI.init(shopifyClient);

export default function BuyButton({ id }) {
    useEffect(() => {
        ui.createComponent('product', {
            id: '9598404198721',
            node: document.getElementById(`product-component-${id}`),
        });
    });

    return <div id={`buy-now-${id}`} />;
}
