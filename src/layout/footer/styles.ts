import styled from "styled-components";

export const FooterContainer = styled.footer`
    text-align: center;
    padding: 2rem;
    border-top: 1px solid ${(props) => props.theme['gray-200']};
    color: ${(props) => props.theme['gray-500']};
    font-size: 0.875rem;
`;