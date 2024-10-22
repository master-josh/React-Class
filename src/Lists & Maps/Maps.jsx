import React, { useState } from "react";
import image from "../assets/cloud-forest-landscape.jpg";
import { IoMenuOutline } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

const Products = [
  {
    id: 1,
    Name: "Apple",
    price: 20,
    image:
      "https://img.freepik.com/free-photo/fresh-red-apple-with-water-drops_23-2150811011.jpg?t=st=1729589971~exp=1729593571~hmac=3f824ca934428a682bd5f1bccd83415d0048df5f4504a0a2b7c7c2423bcfe1e1&w=740",
  },
  {
    id: 2,
    Name: "Banana",
    price: 20,
    image: image,
  },
  {
    id: 3,
    Name: "Mangos",
    price: 90,
  },
  {
    id: 4,
    Name: "Orange",
    price: 40,
  },
  {
    id: 5,
    Name: "Grape",
    price: 10,
  },
  {
    id: 6,
    Name: "cars",
    price: 10,
  },
];

const navcontents = [
  {
    id: 1,
    Name: "Home",
  },

  {
    id: 2,
    Name: "About",
  },
  {
    id: 3,
    Name: "Contact",
  },
  {
    id: 4,
    Name: "Services",
  },
  {
    id: 5,
    Name: "Blog",
  },
];

const NavBar = () => {
  const [Dropdown, setDropdown] = useState(false);

  const Click = () => {
    setDropdown(!Dropdown);
  };
  return (
    <>
      <header className="bg-gradient-to-r from-slate-900 bg-slate-500 h-20 flex items-center justify-between">
        <span className="text-3xl font-semibold text-white mx-8">Logo</span>
        <div className="flex items-center text-white">
          {!Dropdown ? (
            <IoMenuOutline
              className="text-4xl flex md:hidden mx-8"
              onClick={Click}
            />
          ) : (
            <IoClose className="text-4xl flex md:hidden mx-8" onClick={Click} />
          )}

          <nav className="gap-11 text-xl font-semibold mx-8 hidden md:flex ">
            {navcontents.map((Items) => (
              <div key={Items.id}>
                <a href={Items.Name}>{Items.Name}</a>
              </div>
            ))}
          </nav>
        </div>
      </header>
      {Dropdown ? (
        <div className="flex items-center justify-center lg:hidden">
          <div className="bg-gradient-to-r from-slate-900 bg-slate-500 h-80 mt-2 rounded-xl w-[27rem]">
            <div className="text-white flex flex-col items-center text-2xl font-semibold gap-[1.9rem] mt-4">
              {navcontents.map((Items) => (
                <a href={Items.Name}>{Items.Name}</a>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

function Maps() {
  return (
    <div>
      <NavBar />
      {/* <ul>
        {Products.map((Fruits) => (
          <div key={Fruits.id}>
            <li>{Fruits.Name}</li>
            <p>${Fruits.price}</p>

            <img src={Fruits.image} alt="" />
          </div>
        ))}
      </ul> */}
      {/* <h1 className="bg-slate-700 sm:bg-purple-700 md:bg-red-700 lg:bg-green-700 xl:bg-yellow-700">TEST</h1> */}
    </div>
  );
}

export default Maps;
