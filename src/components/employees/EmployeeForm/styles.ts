import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 50;
  padding: 1rem;
`;

export const ModalContent = styled.div`
  background-color: ${props => props.theme.white};
  border-radius: 12px;
  width: 100%;
  max-width: 37.5rem;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  border-bottom: 1px solid ${props => props.theme['gray-200']};
`;

export const CloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  background: transparent;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  color: ${props => props.theme['gray-500']};
  transition: all 0.2s;

  &:hover {
    background-color: ${props => props.theme['gray-100']};
    color: ${props => props.theme['gray-900']};
  }
`;

export const ModalBody = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const FormField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const FormLabel = styled.label`
  font-size: 0.925rem;
  font-weight: 600;
  color: ${props => props.theme.black};
`;

export const ErrorMessage = styled.span`
  font-size: 0.75rem;
  color: ${props => props.theme['red-500']};
  margin-top: 0.25rem;
`;

export const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.725rem;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  padding: 1.5rem;
  border-top: 1px solid ${props => props.theme['gray-200']};
`;
