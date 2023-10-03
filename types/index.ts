import React, { MouseEventHandler } from "react";

export interface CustomButtonProps {
    isDisabled?: boolean;
    btnType?: "button" | "submit";
    containerStyles?: string;
    textStyles?: string;
    title: string;
    rightIcon?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
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

 export interface FilterProps {
   manufacturer?: string;
   year?: number;
   model?: string;
   limit?: number;
   fuel?: string;
 }
 export interface OptionProps {
   title: string;
   value: string;
 }

 export interface CustomFilterProps {
   title: string;
   options: OptionProps[];
 }
 export interface ShowMoreProps {
   pageNumber: number;
   isNext: boolean;
 }
 export interface HomeProps {
  searchParams: FilterProps;
}