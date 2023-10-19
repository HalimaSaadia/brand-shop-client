import React from "react";

import { MdOutlineMessage } from "react-icons/md";

const HomePageChatBox = () => {
  return (
    <div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      {/* <button
        className="btn"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        open modal
      </button> */}

      <div
        className="avatar cursor-pointer fixed bottom-0 z-50"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        <div className="w-8 sm:w-14 flex items-center justify-end rounded-full bg-[#E74C3C] ring ring-[#E74C3C] ring-offset-base-100 ring-offset-2">
          <div className="border h-full flex justify-center items-center">
            <MdOutlineMessage className="text-2xl sm:text-4xl" />
          </div>
        </div>
      </div>

      <dialog id="my_modal_3" className="modal">
        <div className="modal-box fixed right-0 bottom-0 rounded-none">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>

          <div>
            <div className="text-center flex justify-center">
              <h2 className="card-title font-bold text-xl py-5">
                Customer Support Desk
              </h2>
            </div>
            <form className="space-y-2">
              <div>
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  className="input input-bordered outline-none border-b-2  w-[90%] md:w-[80%] "
                  required
                />
              </div>

              <div>
                <label className="label">
                  <span className="label-text">Message</span>
                </label>
                <input
                  type="text"
                  className=" input input-bordered h-24 outline-none border-b-2 w-[90%] md:w-[80%] "
                  required
                />
              </div>

              <div>
                <label className="label">
                  <span className="label-text">Phone</span>
                </label>
                <input
                  type="text"
                  className="input input-bordered outline-none border-b-2 w-[90%] md:w-[80%] "
                  required
                />
              </div>

              <div className=" mt-6 ">
                <input
                  type="submit"
                  className="input input-bordered w-[90%] md:w-[80%] border-b-2 bg-[#E74C3C] text-white hover:text-black"
                  value="Chat With Us"
                  required
                />
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default HomePageChatBox;
