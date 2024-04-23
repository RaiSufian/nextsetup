import Button from "./button";
async function getDetails() {
    const result = await fetch("https://dummyjson.com/products");
    const data = await result.json();
   
    return data.products
}
const Product = async () => {
    let products = await getDetails();
    return (
        <>
            <h2>Product List</h2>
            <ul>
                {products.map((item, index) => {
                    return (
                        <li>
                            Name:
                            {item.title}
                            &nbsp;&nbsp;
                            <Button price={item.price} />
                        </li>

                    )
                })}

            </ul>
        </>
    )
}
export default Product;

export const generateMetadata = () => {
    return {
        title: "product page",
        description : "this is product page, you can check product list here"
    }
}
