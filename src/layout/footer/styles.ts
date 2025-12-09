import styled from "styled-components";

export const FooterContainer = styled.footer`
    display: flex;
    align-items: center;
    color: ${(props) => props.theme['gray-600']};
    font-size: 0.875rem;
    justify-content: center;
    padding: 1rem 0;
`;