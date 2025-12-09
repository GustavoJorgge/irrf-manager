import styled from 'styled-components';

export const EmployeeContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  max-width: 50rem;
  width: 100%;
  gap: 2rem;
  padding: 1.5rem;
  background-color: ${props => props.theme['background']};
  border-radius: 10px;
  border: 1px solid ${props => props.theme['gray-200']};
`;
