import { useEffect } from 'react';
import { useState } from 'react'
import ButtonTask from '../Components/Micro-Component/ButtonTask'

function Product() {
    let [product, setProduct] = useState([]);
    let [search, setSearch] = useState('');
    let [items, setItems] = useState([]);


    useEffect(() => {
        fetch('https://fakestoreapi.in/api/products')
            .then(res => res.json())
            .then((data) => {
                setProduct(data.products);

            }
            )
            .catch((error) => {
                console.log(error);
            })
    })



    return (
        <div id='product-parent'>
            <div id="product-container">
                <div id="search-div">
                    <input type="text text-center" className="form-control placeholder-icon" name="search" onChange={(e) => {
                        const timeId = setTimeout(() => {
                            setSearch(e.target.value);
                        }, 300)

                    }} id="product-search-bar" placeholder="Search products by Name..." />
                    <i className="bi bi-search" id="product-search-icon"></i>

                </div>

                <div id="product-table-div">
                    <h1>List Of Products:</h1>
                    <table className="table table-primary">
                        <thead>
                            <tr id="table-head">
                                <th scope="col">ID</th>
                                <th scope="col">Product Name</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                product.filter((element) => {
                                    return search === '' ? element : element.title.includes(search);
                                }).map((element) => {
                                    return (
                                        <tr key={element.id}>
                                            <th scope="row">{element.id}</th>
                                            <td>{element.title}</td>
                                            <td>{element.id}</td>
                                            <td>{element.price}</td>
                                        </tr>


                                    )
                                })


                            }





                        </tbody>
                    </table>

                </div>

                <div className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabiindex="-1">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalToggleLabel">Add Products</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlInput1" className="form-label">Product Name:</label>
                                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Product Name" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlInput1" className="form-label">Quantity:</label>
                                        <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="Enter Product Quantity" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="price" className="form-label">Price:</label>
                                        <input type="number" className="form-control" id="phone" placeholder="Enter product price" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Label</label>
                                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="2"></textarea>
                                    </div>
                                    <div id='modal-2-button'><ButtonTask name="Add Product" /></div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <a data-bs-toggle="modal" href="#exampleModalToggle" id="eye-button">
                    <i className="bi bi-plus"></i>
                </a>

            </div>
        </div>
    )

}



export default Product