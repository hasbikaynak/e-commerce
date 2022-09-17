import React from 'react'

const Cart = (props) => {
    const { allproducts, incProduct, decProduct } = props;
    //we need to calculate the actual bill of the prducts present into the cart
    const itemsPrice = allproducts.reduce((a, b) => a + b.qty * b.price, 0);
    //generating 1% of tax of the total bill
    const taxPrice = itemsPrice * 0.01;

    //calcuating the shipping cose accordingly
    const shippingCost = itemsPrice > 100 ? 0 : 10;
    //finally calculating the total bill
    const totalPrice = itemsPrice + taxPrice + shippingCost;
    return (
        <div className='container'>
            <h1 className='text-center display-3'>My Cart</h1>

            {/* showing the message dynamically */}
            {allproducts.length === 0 && <div className='alert alert-info'>Your Cart is Empty</div>}
            <table className='table table-bordered table-striped'>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Picture</th>
                    <th>Price</th>
                    <th>Description</th>
                    <th>Add</th>
                    <th>Quantity</th>
                    <th>Remove</th>
                </tr>
                {
                    allproducts.map((item) => (
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td><img src={item.image} style={{ height: '90px', width: '100px' }} /></td>
                            <td>${item.price}</td>
                            <td>{item.dec}</td>
                            <td><button onClick={() => incProduct(item)}>+</button></td>
                            <td style={{ textAlign: 'center' }}>{item.qty}</td>
                            <td><button onClick={() => decProduct(item)}>-</button></td>
                        </tr>
                    ))
                }
            </table>
            <hr />
            <div className='alert alert-success'>
                <p>Tax Included: ${taxPrice}%</p>
                <p>Shipping cost: ${shippingCost}</p>
                <h1 style={{ fontSize: '25px' }}>Your Total Amount is: ${totalPrice}</h1>
            </div>
        </div>
    )
}

export default Cart