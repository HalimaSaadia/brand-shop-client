import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
  const product = useLoaderData();
  const id = useParams().id
  const { brandName, description, name, photo, price, rating, type } = product;

  const handleUpdate = (e) => {
    e.preventDefault();

    const form = e.target;
    const newPhoto = form.photo.value;
    const newName = form.name.value;
    const newBrandName = form.brandName.value;
    const newType = form.type.value;
    const newPrice = form.price.value;
    const newDescription = form.description.value;
    const newRating = form.rating.value;
    const updatedProduct = {
      photo:newPhoto,
      name:newName,
      brandName:newBrandName,
      type:newType,
      price:newPrice,
      description:newDescription,
      rating:newRating,
     
    };
 

    fetch(`http://localhost:5000/product/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Product Updated Successfully",
            icon: "success",
          });
        }
      })
    
  };
  return (
    <div className="flex my-10 overflow-hidden">
      <div className="hero py-5 justify-center ">
        <div className="hero-content flex-col border md:min-w-[600px] lg:min-w-[700px] shadow-2xl p-0">
          <div className="w-full  p-0 relative ">
            <figure>
              <img
                src={photo}
                alt="Shoes"
                className="h-44 md:h-52 lg:h-60 w-full object-cover"
              />
            </figure>
            <div className="absolute top-0 left-0 h-full w-full bg-black opacity-60 flex justify-center items-center ">
              <h1 className="text-4xl text-center text-white font-bold">Update Product</h1>
            </div>
          </div>
          <div className="text-center lg:text-left"></div>
          <div className="card flex-shrink-0  rounded-none  px-0  w-full">
            <form onSubmit={handleUpdate} className="card-body space-y-10">
              <div className="flex flex-col md:flex-row gap-10  justify-between">
                <div className="flex-1">
                  <label className="label">
                    <span className="label-text">Product Image</span>
                  </label>
                  <input
                    type="text"
                    name="photo"
                    placeholder="Enter Your Product Image"
                    className="outline-none w-full  border-b-2 px-1 py-3"
                    defaultValue={photo}
                    required
                  />
                </div>
                <div className="flex-1">
                  <label className="label">
                    <span className="label-text">Product Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter Your Product Name"
                    className="outline-none w-full border-b-2 px-1 py-3"
                    defaultValue={name}
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-10  justify-between">
                <div className="flex-1">
                  <label className="label">
                    <span className="label-text">Brand Name</span>
                  </label>
                  <input
                    type="text"
                    name="brandName"
                    placeholder="Enter Product's Brand name"
                    className="outline-none w-full  border-b-2 px-1 py-3"
                    defaultValue={brandName}
                    required
                  />
                </div>
                <div className="flex-1">
                  <label className="label">
                    <span className="label-text">Product Type</span>
                  </label>
                  <input
                    type="text"
                    name="type"
                    placeholder="Enter Your Product's type"
                    className="outline-none w-full border-b-2 px-1 py-3"
                    defaultValue={type}
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-10  justify-between">
                <div className="flex-1">
                  <label className="label">
                    <span className="label-text">Product Price</span>
                  </label>
                  <input
                    type="text"
                    name="price"
                    placeholder="Enter Product's Price"
                    className="outline-none w-full  border-b-2 px-1 py-3"
                    defaultValue={price}
                    required
                  />
                </div>
                <div className="flex-1">
                  <label className="label">
                    <span className="label-text">Description</span>
                  </label>
                  <input
                    type="text"
                    name="description"
                    placeholder="Enter Your Product's Description"
                    className="outline-none w-full border-b-2 px-1 py-3"
                    defaultValue={description}
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-10  justify-between">
                <div className="flex-1">
                  <label className="label">
                    <span className="label-text">Rating</span>
                  </label>
                  <input
                    type="text"
                    name="rating"
                    placeholder="Enter Product's Rating"
                    className="outline-none w-full  border-b-2 px-1 py-3"
                    defaultValue={rating}
                    required
                  />
                </div>
              </div>

              <div className="form-control mt-6">
                <button
                  type="submit"
                  className="btn bg-[#E74C3C] text-white hover:text-black"
                >
                  Update Product
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

export default Update;
