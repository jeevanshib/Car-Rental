import React, { MouseEventHandler } from "react";

export interface CustomButtonProps{
    title: string;
    containerStyles?: string;
    handleClick?:
    MouseEventHandler<HTMLButtonElement>;
    btnType?: "button"|"submit";
}

export interface SearchManufacturerProps{
   manufacturer: string;
   setManufaturer: (manufacturer:string)=>void;
}

export interface CarProps{
    city_mpg: number;
    class: string;
    combination_mpg: number;
    cylinders:number;
    displacement:number;
    drive: string;
    highway_mpg:number;
    fuel_type: string;
    model: string;
    make: string;
    transmission: string;
    year: number;
 }