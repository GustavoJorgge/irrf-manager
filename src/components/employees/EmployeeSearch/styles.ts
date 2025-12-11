import styled from 'styled-components';

export const SearchContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
`;

export const SearchIcon = styled.div`
  position: absolute;
  left: 0.75rem;
  display: flex;
  align-items: center;
  pointer-events: none;
  color: ${props => props.theme['gray-400']};

  @media (max-width: 480px) {
    left: 0.625rem;
  }
`;

export const SearchInput = styled.input`
  display: flex;
  height: 2.5rem;
  width: 100%;
  border-radius: 6px;
  border: 1px solid ${props => props.theme['gray-300']};
  background-color: ${props => props.theme.white};
  padding: 0.5rem 0.75rem 0.5rem 2.5rem;
  font-size: 1rem;
  line-height: 1.5;
  color: ${props => props.theme['gray-900']};
  transition: all 0.2s;

  &::placeholder {
    color: ${props => props.theme['gray-400']};
  }

  &:focus {
    outline: none;
    border-color: ${props => props.theme['gray-500']};
      box-shadow: 0 0 0 2px ${props => props.theme['gray-100']};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
    background-color: ${props => props.theme['gray-50']};
  }

  @media (min-width: 768px) {
    font-size: 0.875rem;
  }

  @media (max-width: 480px) {
    height: 2.25rem;
    padding: 0.5rem 0.625rem 0.5rem 2.25rem;
    font-size: 0.875rem;
  }
`;
