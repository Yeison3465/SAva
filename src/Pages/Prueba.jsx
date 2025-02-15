import React from "react";

export const Prueba = () => {
    return (
        <div className="flower relative w-24 h-24">
        <div
            className="petal absolute w-12 h-12 bg-red-500 rounded-full"
            style={{ top: 0, left: "25%" }}
        ></div>
        <div
            className="petal absolute w-12 h-12 bg-red-500 rounded-full"
            style={{ top: "25%", left: 0 }}
        ></div>
        <div
            className="petal absolute w-12 h-12 bg-red-500 rounded-full"
            style={{ top: "25%", left: "50%" }}
        ></div>
        <div
            className="petal absolute w-12 h-12 bg-red-500 rounded-full"
            style={{ top: "50%", left: "25%" }}
        ></div>
        <div className="center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-yellow-500 rounded-full"></div>
        </div>
  );
};
