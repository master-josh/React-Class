import React from "react";

function Test({ SetAdmin }) {
  return (
    <div>
      <div className="bg-red-500 h-screen flex items-center justify-center">
        Welcome Admin
        <button onClick={() => SetAdmin(false)}>Logout</button>
      </div>
    </div>
  );
}

export default Test;
