import React from 'react'

const Products = (props) => {
    //getting all the variables coming from any other component into a single line
    const { finalecom, proAdd } = props;
    return (
        <div className='container'>
            <h1 className='text-center display-3'>List of All Products</h1>
            <div className='row'>
                {
                    finalecom.map((prod) => (
                        <div className='col-md-4 mb-3'>
                            <div className="card">
                                <img src={prod.image} className="card-img-top" style={{ height: '300px' }} />
                                <div className="card-body">
                                    <h5 className="card-title">{prod.name}</h5>
                                    <small>${prod.price}</small>
                                    <p className="card-text">{prod.dec}</p>
                                    <button onClick={() => proAdd(prod)} className="btn btn-primary">Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Products