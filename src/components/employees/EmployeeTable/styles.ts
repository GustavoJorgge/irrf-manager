import styled from "styled-components";

export type IconVariant = 'primary' | 'danger';

interface IconButtonProps {
  variant?: IconVariant;
}


export const Container = styled.div`
width: 100%;
margin: 20px auto;
border-radius: 12px;
overflow: hidden;
box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
`;


export const Table = styled.table`
width: 100%;
border-collapse: collapse;
font-family: "Inter", sans-serif;
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
`;


export const Tag = styled.span`
padding: 6px 12px;
background: #ffe9d6;
color: #a86b00;
border-radius: 12px;
font-size: 12px;
`;


export const IconButton = styled.button<IconButtonProps>`
background: none;
border: none;
cursor: pointer;
margin-right: 8px;


svg {
width: 18px;
height: 18px;
color: ${props => props.variant === 'danger' ? props.theme['red-600'] : props.theme['gray-600']};
}

&:hover svg {
    color: ${props => props.theme['gray-900']};
    background-color: ${props => props.theme['gray-200']};
}
`;

export const Actions = styled.td`
display: flex;
`;