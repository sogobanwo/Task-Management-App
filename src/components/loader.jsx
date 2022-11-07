import React from "react";
import { RotatingLines } from  'react-loader-spinner'
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";


export const Loader =()=>{
  return <RotatingLines
  strokeColor="white"
  strokeWidth="5"
  animationDuration="0.75"
  width="96"
  visible={true}
/>
}

