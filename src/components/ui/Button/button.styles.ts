import styled, { css } from "styled-components";

export type ButtonVariant = "primary" | "secundary" | "danger";

interface ButtonContainerProps {
  variant: ButtonVariant;
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  padding: 0.5rem 1rem;
  border-radius: 8px;
  border: 0;

  color: ${({ theme }) => theme.white};

  ${({ theme, variant }) => {
    const colors = {
        primary: theme["gray-500"],
        secundary: theme["blue-800"],
        danger: theme["red-600"],
    };

    return css`
      background-color: ${colors[variant]};
    `;
  }}

   &:hover {
    cursor: pointer;
    background-color: ${({ theme, variant }) =>
      variant === "primary" ? theme["gray-600"] : theme["blue-900"]};   
  }

  @media (max-width: 480px) {
    padding: 0.5rem 0.75rem;
    font-size: 0.875rem;
    gap: 0.375rem;

    svg {
      width: 18px;
      height: 18px;
    }
  }
`;
