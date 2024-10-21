import React, { useState } from "react";
import Bgimage from "../../assets/cloud-forest-landscape.jpg";
import { h1 } from "framer-motion/client";

function LoginPage() {
  const [Inputdata, setInputdata] = useState({
    Username: "",
    Email: "",
  });
  const [Inputed, setInputed] = useState(false);
  const [Submit, setSubmit] = useState(false);

  const HandleUsernameinput = (e) => {
    setInputdata({ ...Inputdata, Username: e.target.value });
  };

  const HandleEmailinput = (e) => {
    setInputdata({ ...Inputdata, Email: e.target.value });
  };

  const SUBMIT = (e) => {
    e.preventDefault();

    if (Inputdata.Username && Inputdata.Email) {
      setInputed(true);
    }

    setSubmit(true);
  };
  return (
    <div className="backgrond h-screen flex flex-col items-center justify-center relative">
      {Inputed ? (
        <div className="backdrop-blur-md border bg-green-500/20 border-green-500 h-[3rem] text-white font-bold w-[14rem] flex items-center justify-center rounded-md absolute top-4 right-4">
          Submited Successfully
        </div>
      ) : null}
      {Submit &&
        (!Inputdata.Username ? (
          <div className="backdrop-blur-md border bg-red-500/20 border-red-500 h-[3rem] text-white font-bold w-[17rem] flex items-center justify-center rounded-md absolute top-4 right-4">
            Username-input must have a value
          </div>
        ) : null)}

      {Submit &&
        (!Inputdata.Email ? (
          <div className="backdrop-blur-md border bg-red-500/20 border-red-500 h-[3rem] text-white font-bold w-[17rem] flex items-center justify-center rounded-md absolute top-4 right-4">
            Email-input must have a value
          </div>
        ) : null)}
      <div className="border-2 border-white/30 py-32 w-[20rem] flex flex-col relative items-center backdrop-blur-md rounded-lg">
        <div className="absolute top-16 flex flex-col">
          <span className="text-4xl font-semibold">Login</span>
        </div>
        <form action="">
          <input
            type="text"
            onChange={HandleUsernameinput}
            value={Inputdata.Username}
            placeholder="Username"
            className="w-[18rem] h-[2.5rem] bg-inherit text-white border-2 rounded-md pl-3 outline-none"
          />
          <br />
          <br />
          <input
            type="text"
            onChange={HandleEmailinput}
            value={Inputdata.Email}
            placeholder="Email"
            className="w-[18rem] h-[2.5rem] bg-inherit text-white border-2 rounded-md pl-3 outline-none"
          />
        </form>
        <button
          className="absolute bottom-14 text-gray-300/60 border-2 border-white/40 w-[8rem] h-[2.5rem] rounded-lg hover:border-white/60 hover:text-gray-300/80"
          onClick={SUBMIT}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
