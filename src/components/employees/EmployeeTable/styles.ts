import styled from "styled-components";

export type IconVariant = 'primary' | 'danger';

interface IconButtonProps {
  variant?: IconVariant;
}

export const Container = styled.div`
  width: 100%;
  margin: 20px auto;
  border-radius: 12px;
  overflow-x: auto; /* Permite scroll no mobile */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);

  /* Remove barra visual no desktop */
  scrollbar-width: thin;

  @media (max-width: 768px) {
    overflow-x: auto;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-family: "Inter", sans-serif;
  min-width: 600px; /* evita quebrar demais no mobile */
`;

export const Thead = styled.thead`
  text-align: left;
  font-weight: 600;
`;

export const Th = styled.th`
  background: ${props => props.theme['gray-200']};
  padding: 0.75rem;
  font-size: 0.775rem;
  text-align: center;
  color: ${props => props.theme['gray-600']};
  border-bottom: 1px solid ${props => props.theme['gray-200']};
  text-overflow: ellipsis;
  white-space: nowrap;

  @media (max-width: 480px) {
    padding: 0.5rem;
    font-size: 0.7rem;
  }
`;

export const Tr = styled.tr`
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
  white-space: nowrap;

  &:hover {
    background-color: ${props => props.theme['gray-200']};
  }
`;

export const Tbody = styled.tbody``;

export const Td = styled.td`
  padding: 1rem;
  font-size: 0.775rem;
  color: ${props => props.theme['gray-800']};
  border-bottom: 1px solid ${props => props.theme['gray-200']};

  @media (max-width: 480px) {
    padding: 0.5rem;
    font-size: 0.7rem;
  }
`;

export const Tag = styled.span`
  padding: 6px 12px;
  background: #ffe9d6;
  color: #a86b00;
  border-radius: 12px;
  font-size: 12px;

  @media (max-width: 480px) {
    padding: 4px 8px;
    font-size: 10px;
  }
`;

export const IconButton = styled.button<IconButtonProps>`
  background: none;
  border: none;
  cursor: pointer;
  margin-right: 8px;

  svg {
    width: 18px;
    height: 18px;
    color: ${props =>
      props.variant === 'danger'
        ? props.theme['red-600']
        : props.theme['gray-600']};
  }

  &:hover svg {
    color: ${props => props.theme['gray-900']};
    background-color: ${props => props.theme['gray-200']};
  }

  @media (max-width: 480px) {
    svg {
      width: 16px;
      height: 16px;
    }
  }
`;

export const Actions = styled.td`
  display: flex;
  justify-content: center;
  gap: 6px;

  @media (max-width: 480px) {
    gap: 4px;
  }
`;
