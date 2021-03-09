import Head from "next/head";

import products from '../../bs-products.json'
import {fromImageToUrl, API_URL} from "../../utils/urls";
import {twoDecimals} from "../../utils/format";

const product = products[0]

const Product = () => {
    return (
        <div>
            <Head>
                {
                    product.meta_title &&
                    <title>{product.meta_title}</title>
                }
                {
                    product.meta_description &&
                    <meta name="description" content={product.meta_description}/>
                }
            </Head>
            <h3>{product.name}</h3>
            <img src={fromImageToUrl(product.image)}/>
            <h3>{product.name}</h3>
            <p>IDR {twoDecimals(product.price)}</p>

            <p>
                {product.content}
            </p>
        </div>
    )
}

export default Product
