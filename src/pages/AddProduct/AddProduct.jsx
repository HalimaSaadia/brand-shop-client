import React from "react";
import { Link, json } from "react-router-dom";
import Swal from "sweetalert2";

const AddProduct = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const photo = form.photo.value;
    const name = form.name.value;
    const brandName = form.brandName.value;
    const type = form.type.value
    const price = form.price.value;
    const description = form.description.value
    const rating = form.rating.value

    const product = {
        photo,
        name,
        brandName,
        type,
        price,
        description,
        rating
    }

    fetch('http://localhost:5000/products', {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(product)
    })
    .then(res => res.json())
    .then(data => {
      if(data.insertedId){
        Swal.fire(
          {
            title: "Success!",
            text: 'Product added Successfully',
            icon:"success"
          }
        )
      }
    })
    console.log(product)
  };
  return (
    <div className="flex my-10">
      <div className="hero py-5 justify-center ">
        <div className="hero-content flex-col border md:min-w-[600px] lg:min-w-[700px] shadow-2xl p-0">
          <div className="w-full  p-0 relative ">
            <figure>
                
              <img
                src="https://images.unsplash.com/photo-1468495244123-6c6c332eeece?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z2FkZ2V0c3xlbnwwfHwwfHx8MA%3D%3D&w=500"
                alt="Shoes"
                className="h-44 md:h-52 lg:h-60 w-full object-cover"
              />
            </figure>
            <div className="absolute top-0 left-0 h-full w-full bg-black opacity-60 flex justify-center items-center ">
              <h1 className="text-4xl text-white font-bold">Add Product</h1>
            </div>
          </div>
          <div className="text-center lg:text-left"></div>
          <div className="card flex-shrink-0  rounded-none  px-0  w-full">
            <form onSubmit={handleSubmit} className="card-body space-y-10">

              <div className="flex flex-col md:flex-row gap-10  justify-between">
                <div className="flex-1">
                  
                  <input
                    type="text"
                    name="photo"
                    placeholder="Enter Your Product Image"
                    className="outline-none w-full  border-b-2 px-1 py-3"
                    required
                  />
                </div>
                <div className="flex-1">
              
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter Your Product Name"
                    className="outline-none w-full border-b-2 px-1 py-3"
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-10  justify-between">
                <div className="flex-1">
                
                  <input
                    type="text"
                    name="brandName"
                    placeholder="Enter Product's Brand name"
                    className="outline-none w-full  border-b-2 px-1 py-3"
                    required
                  />
                </div>
                <div className="flex-1">
                
                  <input
                    type="text"
                    name="type"
                    placeholder="Enter Your Product's type"
                    className="outline-none w-full border-b-2 px-1 py-3"
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-10  justify-between">
                <div className="flex-1">
               
                  <input
                    type="text"
                    name="price"
                    placeholder="Enter Product's Price"
                    className="outline-none w-full  border-b-2 px-1 py-3"
                    required
                  />
                </div>
                <div className="flex-1">
                 
                  <input
                    type="text"
                    name="description"
                    placeholder="Enter Your Product's Description"
                    className="outline-none w-full border-b-2 px-1 py-3"
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-10  justify-between">
                <div className="flex-1">
                 
                  <input
                    type="text"
                    name="rating"
                    placeholder="Enter Product's Rating"
                    className="outline-none w-full  border-b-2 px-1 py-3"
                    required
                  />
                </div>
                
              </div>

              <div className="form-control mt-6">
                <button
                  type="submit"
                  className="btn bg-[#E74C3C] text-white hover:text-black"
                >
                  Add Product
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* <ToastContainer /> */}
    </div>
  );
};

export default AddProduct;
