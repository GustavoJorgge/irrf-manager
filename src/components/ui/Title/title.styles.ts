import styled from "styled-components";

export type TitleVariant = "small" | "medium" | "large";

interface StyledProps {
  variant?: TitleVariant;
}

export const TitleContainer = styled.h1<StyledProps>`
  font-size: ${(props) => {
    switch (props.variant) {
      case "small":
        return "1.25rem";
      case "medium":
        return "1.5rem";
      case "large":
        return "2rem";
      default:
        return "1.5rem";
    }
  }};
  color: ${(props) => props.theme["gray-800"]};
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
