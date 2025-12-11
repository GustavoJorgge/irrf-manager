import styled from "styled-components";

export type TitleVariant = "small" | "medium" | "large";

interface StyledProps {
  variant?: TitleVariant;
}

export const TitleContainer = styled.h1<StyledProps>`
  font-size: ${(props) => {
    switch (props.variant) {
      case "small":
        return "1rem";
      case "medium":
        return "1.25rem";
      case "large":
        return "1.5rem";
      default:
        return "1.25rem";
    }
  }};
  color: ${(props) => props.theme["gray-800"]};
  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media (max-width: 480px) {
    font-size: ${(props) => {
      switch (props.variant) {
        case "small":
          return "0.875rem";
        case "medium":
          return "1.125rem";
        case "large":
          return "1.375rem";
        default:
          return "1.125rem";
      }
    }};
    gap: 0.375rem;

    svg {
      width: 20px;
      height: 20px;
    }
  }
`;
