import { ButtonHTMLAttributes } from "react";

export interface IContainer{
  children: React.ReactNode
}

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement>{
  backgroundColor: string
  width: number
  height: number
  text?: string
}