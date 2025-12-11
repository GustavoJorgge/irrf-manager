import styled from 'styled-components';

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 480px) {
    gap: 0.5rem;
  }
`;

export const SearchInput = styled.input`
  flex: 1;
  align-items: end;
  padding: 0.75rem 1rem;
  width: 15rem;
  border: 1px solid ${props => props.theme['gray-200']};
  border-radius: 8px;
  font-size: 0.825rem;
  background-color: ${props => props.theme['gray-50']};
  color: ${props => props.theme['gray-900']};
  transition: border-color 0.2s;

  @media (max-width: 768px) {
    width: 100%;
  }

  @media (max-width: 480px) {
    padding: 0.625rem 0.75rem;
    font-size: 0.75rem;
  }
`;
