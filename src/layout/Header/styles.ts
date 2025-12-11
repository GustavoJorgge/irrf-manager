import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem 2rem;
  min-width: 320px;
  background-color: ${(props) => props.theme['gray-200']};

  @media (max-width: 768px) {
    padding: 1.25rem 1.5rem;
    gap: 0.75rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
    gap: 0.5rem;
  }
`;

export const Title = styled.h1`
  color: ${(props) => props.theme['gray-800']};
  font-size: 1.5rem;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
`;

export const Subtitle = styled.p`
  color: ${(props) => props.theme['gray-600']};
  font-size: 0.875rem;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }

  @media (max-width: 480px) {
    font-size: 0.75rem;
  }
`;

export const ContentContainer = styled.div`
  flex: 1;
  width: 100%;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme['gray-600']};
  border-radius: 8px;
  width: 2.875rem;
  height: 2.875rem;

  @media (max-width: 768px) {
    width: 2.5rem;
    height: 2.5rem;
  }

  @media (max-width: 480px) {
    width: 2.2rem;
    height: 2.2rem;
    border-radius: 6px;
  }
`;
