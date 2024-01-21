import React from 'react';
// import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { getBasketTotal } from '../reducer';

const Checkout = () => {
    const [{ basket }, dispatch] = useStateValue();

    const  removeFromBasket = (id) => {
        dispatch({
            type: "Remove_From_Basket",
            id: id,
        })
    }
    return (
        <div className="container my-5">
            {basket.map((item) => (
                <div key={item.id} className="row my-5">
                    <div className="col-xl-10 col-md-10">
                        <div className="card border shadow-none text-start">
                            <div className="card-body">
                                <div className="d-flex align-items-start border-bottom pb-3">
                                    <div className="me-1 h-50 w-50">
                                        <img src={item.image} alt="" className="avatar-lg rounded w-50"/>
                                    </div>
                                    <div className="flex-grow-1 align-self-center overflow-hidden">
                                        <h5 className="text-truncate font-size-18">
                                            <a href="/" className="text-dark">
                                                {item.title}
                                            </a>
                                        </h5>
                                        <h5 className="mb-0 mt-2">
                                            {/* <span className="text-muted me-2">
                                                <del className="font-size-16 fw-normal">${item.price}</del>
                                            </span> */}
                                            ${item.price}
                                        </h5>
                                        <select className="form-select mt-2 w-50" aria-label="Default select example">
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="flex-shrink-0 ms-2">
                                    <button className="btn btn-danger mt-2 float-end" onClick={() => removeFromBasket(item.id)}>Remove From Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            <div className="row">

            <div className="col-xl-10 col-md-10">
                <div className="mt-5 mt-lg-0">
                    <div className="card border shadow-none">
                        <div className="card-header bg-transparent border-bottom py-3 px-4">
                            <h5 className="font-size-16 mb-0">
                            Order Summary <span className="float-end">Cost</span>
                            </h5>
                        </div>
                        <div className="card-body p-4 pt-2">
                            <div className="table-responsive">
                                <table className="table mb-0">
                                    <tbody>
                                    <tr className="bg-light">
                                        <th className="float-start">Total Items ({basket.length}):</th>
                                        <td className="text-end">
                                        <span className="fw-bold">$ {getBasketTotal(basket)}</span>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                                <button className='btn btn-success mt-2 float-end'> Checkout</button>
                            </div>
                            {/* end table-responsive */}
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Checkout;
