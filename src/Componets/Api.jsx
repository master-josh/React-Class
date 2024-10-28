import React, { useEffect, useState } from "react";
import axios from "axios";

function Api() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  // axios
  //   .get("https://dummyjson.com/products")
  //   .then((res) => {
  //       setData(res.data);
  //       setLoading(false);
  //       console.log(data);
  //   })
  //   .catch((error) => {
  //     console.error("Error fetching data:", error);
  //     setLoading(false);
  //   });

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        setData(res.data);
        setLoading(false);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  if (loading) {
    return <h1>loading....</h1>
  }
  return (
    <>
      <h1>Products</h1>
        <div>
          {data.products.map((product) => (
            <div className="border-2 h-[30rem] flex items-center pl-8 grid-cols-8" key={product.id}>
              <div className="border border-green-700 h-[20rem] w-[15rem] rounded-lg flex flex-col items-center overflow-hidden">
                <div className="border  h-[11rem] w-[15rem] bg-gray-500/40 flex items-center"><img className="h-[11rem] w-[15rem]" src={product.thumbnail} alt=""/></div>
                <div className="border  h-[9rem] w-[15rem] flex flex-col">
                  <span className="text-3xl font-semibold">{product.title}</span>
                  <span className="text-md">${product.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
    </>
  );
}

export default Api;
