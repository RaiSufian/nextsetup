'use client'
const Button = ({ price }) => {
    return (
        <button onClick={() => alert(`Product price is = ${price}`)}>
            Check price
        </button>
    )
}
export default Button;