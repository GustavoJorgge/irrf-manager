import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem 2rem;
`;

export const Title = styled.h1`
  color: ${(props) => props.theme['gray-800']};
  font-size: 1.5rem;
  margin: 0;
`;

export const Subtitle = styled.p`
  color: ${(props) => props.theme['gray-600']};
  font-size: 0.875rem;
  margin: 0;
`;

export const ContentContainer = styled.div`
  flex: 1;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme['gray-600']};
  border-radius: 8px;
  width: 2.875rem;
  height: 2.875rem;
`;