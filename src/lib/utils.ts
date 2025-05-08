import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { Variants } from "motion/react"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export function anime(variants: Variants) {
  return {
    initial: 'initial',
    animate: "enter",
    exit: "exit",
    variants
  }
}
