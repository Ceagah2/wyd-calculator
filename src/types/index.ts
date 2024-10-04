import { ButtonHTMLAttributes, InputHTMLAttributes } from "react";

export interface IContainer{
  children: React.ReactNode
}

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement>{
  backgroundColor?: string
  width: number
  height: number
  text?: string
}

export interface ITextInput extends InputHTMLAttributes<HTMLInputElement>{
  value:string | number
  name: string
}

export interface ISelect extends InputHTMLAttributes<HTMLSelectElement>{
  children: React.ReactNode
}

export interface SoulValues {
  name: string;
  value: number;
}
