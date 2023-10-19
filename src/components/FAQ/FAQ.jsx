import React, { useEffect, useState } from "react";
import {RxCross2} from "react-icons/rx"

const FAQ = ({toggleDrawer}) => {
    const [allFaq, setAllFaq] = useState([])
     
    useEffect(()=> {
        fetch('http://localhost:5000/faq')
        .then(res => res.json())
        .then(data => setAllFaq(data))
    },[])
  return (
    <div className="space-y-3">
       <button className="ml-3 mt-3" onClick={toggleDrawer}><RxCross2 className="text-3xl text-red-500"/></button>
        {allFaq.map(faq => <div key={faq._id} className="collapse collapse-plus bg-base-200 ml-3 rounded-none">
        <input type="radio" name="my-accordion-3"  />

        <div className="collapse-title text-lg font-medium">
         {faq.question}
        </div>
        <div className="collapse-content">
          <p>{faq.answer}</p>
        </div>
      </div> )}
      
    
 
    </div>
  );
};

export default FAQ;
