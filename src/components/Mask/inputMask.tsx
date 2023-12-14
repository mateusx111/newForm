"use client";
import * as React from "react";

import { cn } from "@/lib/utils";
import InputMask from "react-input-mask";
export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  mask: string;
};

export const InputMasked = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, mask, ...props }, ref) => {
    return (
      <>
        <InputMask
          mask={mask}
          inputRef={ref}
          value={props.value}
          type={type}
          className={cn(
            "mt-[6px] border rounded-lg border-custom-white-200 focus:outline-custom-purple-200 p-4 font-normal text-custom-white-100 focus:text-custom-white-300 text-base w-[564px] ",
            className
          )}
          {...props}
        />
      </>
    );
  }
);
InputMasked.displayName = "Input";
