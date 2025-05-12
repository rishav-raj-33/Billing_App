import { useEffect, useState } from 'react';
import ButtonTask from '../Components/Micro-Component/ButtonTask'
function GenerateBill() {
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


        <div className="container-fluid" id='generate-content'>

            <div className="row d-flex justify-content-center" id='genrate-content-row-1'>
                <div className="col-12">
                    <div className='text-center' id='generate-div-content'>
                        <i className="bi bi-receipt" id="generate-invoice-logo"></i>
                        <span id='generate-invoice'>Invoice</span>
                    </div>
                    <div id="search-div">
                        <input type="text text-center" className="form-control placeholder-icon" name="search" onChange={(e) => {
                            const timeId = setTimeout(() => {
                                setSearch(e.target.value);
                            }, 300)

                        }} id="search-bar" placeholder="Search products..." />
                        <i className="bi bi-search" id="search-icon"></i>

                    </div>
                </div>


                <div className="row justify-content-evenly text-center mb-1" id='products'>
                    {
                        product.filter((element) => {
                            return search === '' ? element : element.title.includes(search);
                        }).map((element) => {
                            return (
                                <div className="col-md-3  mb-1 options" key={element.id}>
                                    <input type="checkbox" className="btn-check" id={element.id} value={element.title} autoComplete="off" onChange={(e) => {
                                        let isChecked = e.target.checked;
                                        (isChecked) ? setItems([...items, { value: e.target.value, quantity: 1 }]) : setItems(items.filter((element) => element.value !== e.target.value));
                                    }} />
                                    <label className="btn  btn-outline-success" htmlFor={element.id}>{element.title}</label>
                                </div>

                            )
                        })
                    }
                </div>

            </div>


            <div className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel"
                tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalToggleLabel">Selected Items</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div id='preview-div'>
                                <div id='preview-child-items'>
                                    {
                                        items.map((element, index) => {

                                            return <div id='confirm-div' key={index}>
                                                <span id='preview-span' key={index}>{element.value}</span>
                                                <input id="quantity" type="number" min="1" value={element.quantity} />
                                                <div id='div-arrow'>
                                                    <i className="bi bi-chevron-up" id='up-key' onClick={() => {
                                                        let array = [...items];
                                                        array[index].quantity = element.quantity + 1;
                                                        setItems(array);
                                                    }}></i>
                                                    <i className="bi bi-chevron-down" id='down-key' onClick={() => {
                                                        let array = [...items];
                                                        if(array[index].quantity>1){
                                                            array[index].quantity = element.quantity - 1;
                                                        }
                                                        
                                                        setItems(array);

                                                    }}></i>
                                                </div>
                                            </div>



                                        })
                                    }
                                    <div id='preview-button'><a className='btn-hover' data-bs-toggle="modal" href="#exampleModalToggle2" >Confirm</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2"
                tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalToggleLabel">Customer Details</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Name:</label>
                                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Name" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Email:</label>
                                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="phone" className="form-label">Phone Number:</label>
                                    <input type="tel" className="form-control" id="phone" placeholder="+91 ..." pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Address</label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="2"></textarea>
                                </div>
                                <div id='modal-2-button'><ButtonTask name="Generate Bill" /></div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>





            {
                (items.length === 0) ? null : <a data-bs-toggle="modal" href="#exampleModalToggle" id="eye-button">
                    <i className="bi bi-eye-fill"></i>
                </a>
            }

        </div>





    )
}


export default GenerateBill;