import styled from 'styled-components';

export const IRRFContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1.5rem;
    background-color: ${props => props.theme['gray-50']};
    border-radius: 8px;
    border: 1px solid ${props => props.theme['gray-200']};
`;

export const IRRFHeader = styled.div`
    display: flex;
    gap: 0.5rem;
    align-items: center;
    margin-bottom: 0.5rem;
`;

export const IRRFTitle = styled.h2`
    margin: 0;
    font-size: 1.125rem;
    font-weight: 600;
    color: ${props => props.theme['gray-900']};
`;

export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
`;

export const TableHead = styled.thead`
    background-color: ${props => props.theme['gray-50']};
`;

export const TableBody = styled.tbody``;

export const TableRow = styled.tr`
    border-bottom: 1px solid ${props => props.theme['gray-200']};

    &:last-child {
        border-bottom: none;
    }
`;

export const TableHeader = styled.th`
    padding: 0.75rem;
    text-align: left;
    font-size: 0.75rem;
    font-weight: 600;
    color: ${props => props.theme['gray-500']};
    text-transform: uppercase;
`;

export const TableCell = styled.td`
    padding: 0.75rem;
    font-size: 0.875rem;
    color: ${props => props.theme['black']};

    &:nth-child(2) {
        font-weight: 600;
    }
    &:last-child {
        color: ${props => props.theme['gray-700']};
    }
`;

export const Footer = styled.div`
    background-color: ${props => props.theme['gray-50']};
    font-size: 0.825rem;
    color: ${props => props.theme['gray-600']};

    & > span {
        font-weight: bold;
        color: ${props => props.theme['gray-900']};
    }
`;
