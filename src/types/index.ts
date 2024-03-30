import { ButtonHTMLAttributes, SelectHTMLAttributes } from "react";

export interface IContainer{
  children: React.ReactNode
}

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement>{
  backgroundColor: string
  width: number
  height: number
  text?: string
}

export interface ISoulValues extends SelectHTMLAttributes<HTMLSelectElement>{
  values: {name: string, value: number}[]
}

export interface SoulValues {
  name: string;
  value: number;
}