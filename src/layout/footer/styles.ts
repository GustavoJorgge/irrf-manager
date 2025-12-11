import styled from "styled-components";

export const FooterContainer = styled.footer`
text-align: center;
  padding: 1.25rem 1rem;
  background-color: ${(props) => props.theme['gray-200']};
  border-top: 1px solid ${(props) => props.theme['gray-200']};
  color: ${(props) => props.theme['gray-500']};
  font-size: 0.875rem;
  padding-bottom: calc(env(safe-area-inset-bottom, 0px) + 1rem);

    @media (max-width: 768px) {
        padding: 1.5rem;
        font-size: 0.8rem;
    }

    @media (max-width: 480px) {
        padding: 1rem;
        font-size: 0.75rem;
        line-height: 1.3;
    }
`;
