import styled from "styled-components";

export const HomeContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 2rem;
    background-color: ${(props) => props.theme['background']};
    gap: 1rem;
`;

export const HomeHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;


export const HomeContent = styled.div`
    gap: 2rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
`;

export const LeftSection = styled.div`
    display: flex;
    flex-direction: column;

`;

export const RightSection = styled.div`
    display: flex;
    flex-direction: column;
`;

export const HomeFooter = styled.footer`
    text-align: center;
    padding: 2rem;
    border-top: 1px solid ${(props) => props.theme['gray-200']};
    color: ${(props) => props.theme['gray-500']};
    font-size: 0.875rem;
`;