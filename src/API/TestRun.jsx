import axios from "axios";
import React, { useState } from "react";

function TestRun() {
  const [Dogs, setDogs] = useState("");
  const [loading, setLoading] = useState(true);

//   const Submit = () => {
//     axios
//       .get("https://dog.ceo/api/breeds/image/random")
//       .then((res) => {
//         console.log(res.data.message);
//         setDogs(res.data.message);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });

//   const Submit = () => {
//     axios
//       .get("https://opentdb.com/api.php?amount=20")
//       .then((res) => {
//         console.log(res.data.results[10].question);
//         setDogs(res.data.results[10].question);
//         // setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   };

  const Submit = () => {
    axios
      .get("https://catfact.ninja/fact")
      .then((res) => {
        console.log(res.data.fact);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      
    });

}

  return (
    <>
 {/* <h1 dangerouslySetInnerHTML>{Dogs}</h1> */}
      <button onClick={Submit}>Submit</button>
    </>
  );
}

export default TestRun;
