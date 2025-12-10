import { ButtonContainer, type ButtonVariant } from './button.styles';

interface ButtonProps {
  variant?: ButtonVariant;
  children: React.ReactNode;
}

export function Button({ variant = 'primary', children }: ButtonProps) {
  return (
    <ButtonContainer variant={variant}>
      {children}
    </ButtonContainer>
  );
}
