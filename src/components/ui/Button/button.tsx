import { ButtonContainer, type ButtonVariant } from './button.styles';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: React.ReactNode;
}

export function Button({ variant = 'primary', children, ...props }: ButtonProps) {
  return (
    <ButtonContainer variant={variant} {...props}>
      {children}
    </ButtonContainer>
  );
}
