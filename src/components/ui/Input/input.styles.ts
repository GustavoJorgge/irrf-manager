import styled from 'styled-components';

interface StyledInputProps {
  hasError?: boolean;
}

export const StyledInput = styled.input<StyledInputProps>`
  display: flex;
  height: 2.5rem;
  width: 100%;
  border-radius: 6px;

  border: 1px solid
    ${({ hasError, theme }) =>
      hasError ? theme['red-500'] : theme['gray-300']};

  background-color: ${({ theme }) => theme.white};
  padding: 0.5rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: ${({ theme }) => theme['gray-900']};
  transition: all 0.2s;

  &::placeholder {
    color: ${({ theme }) => theme['gray-400']};
  }

  &:focus {
    outline: none;

    border-color: ${({ hasError, theme }) =>
      hasError ? theme['red-500'] : theme['gray-500']};

    box-shadow: ${({ hasError, theme }) =>
      hasError
        ? `0 0 0 1px ${theme['red-500']}`
        : `0 0 0 1px ${theme['gray-100']}`};
  }

  @media (min-width: 48rem) {
    font-size: 0.875rem;
  }
`;
