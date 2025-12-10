import * as React from 'react';
import { StyledInput } from './input.styles';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  hasError?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = 'text', hasError, ...props }, ref) => {
    return (
      <StyledInput
        type={type}
        className={className}
        hasError={hasError}
        ref={ref}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';
