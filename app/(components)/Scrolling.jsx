import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import ProductCard from "./ProductCard";
import Loader from "./Loader";
import {useInView} from 'react-intersection-observer'
import axios from "axios";

const Scrolling = () => {
    const {ref,inView}=useInView({threshold:0.4});
    const [limit,setLimit]=useState(8);
  const { data, isLoading, isError, isFetchingMore, fetchMore,refetch } = useQuery(
    "products",
    async (key, index = 1) => {
      const response = await axios.get(
        `https://api.escuelajs.co/api/v1/products?offset=${index}0&limit=${limit}`
      );
      return response.data
    }
    
  );

  useEffect(()=>{
    if(inView){
        setLimit((limit)=>(limit+=8))
        refetch()
    }
  },[inView])

  if (isError) return <div>Error fetching data</div>;
console.log(data)
  return (
   
   <div>
      { 
        (!isLoading)&&<div className="">
        <div className=" flex flex-col justify-center items-center">
          {data &&
            data.map((item) => <ProductCard item={item} key={item.id} />)}
        </div>
      </div>}

      <div ref={ref}>
      <Loader/>
      </div>
   </div>
  );
};

export default Scrolling;