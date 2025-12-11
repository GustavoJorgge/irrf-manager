import styled from "styled-components";

export const HomeContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 2rem;
    background-color: ${(props) => props.theme['background']};
    gap: 1rem;

    @media (max-width: 768px) {
        padding: 1.5rem;
    }

    @media (max-width: 480px) {
        padding: 1rem;
        gap: 0.75rem;
    }
`;

export const HomeHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 600px) {
        flex-direction: column;
        gap: 1rem;
        align-items: flex-start;
    }
`;

export const HomeContent = styled.div`
  gap: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;


export const LeftSection = styled.div`
    display: flex;
    flex-direction: column;
`;

export const RightSection = styled.div`
    display: flex;
    flex-direction: column;
`;
