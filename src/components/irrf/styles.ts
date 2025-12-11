import styled from 'styled-components';

export const IRRFContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1.5rem;
    background-color: ${props => props.theme['gray-50']};
    border-radius: 8px;
    border: 1px solid ${props => props.theme['gray-200']};
    box-sizing: border-box;

    @media (max-width: 480px) {
        padding: 1rem;
        gap: 0.875rem;
    }
`;

export const IRRFHeader = styled.div`
    display: flex;
    gap: 0.5rem;
    align-items: center;
    margin-bottom: 0.5rem;

    @media (max-width: 480px) {
        gap: 0.25rem;
        margin-bottom: 0.25rem;
    }
`;

export const IRRFTitle = styled.h2`
    margin: 0;
    font-size: 1.125rem;
    font-weight: 600;
    color: ${props => props.theme['gray-900']};

    @media (max-width: 480px) {
        font-size: 1rem;
    }
`;

export const TableWrapper = styled.div`
    overflow-x: auto; 
    overflow-y: hidden;
    -webkit-overflow-scrolling: touch;
    box-sizing: border-box;
`;

export const Table = styled.table`
    border-collapse: collapse;

    table-layout: auto;
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

    white-space: normal;
    word-break: break-word;
    overflow-wrap: anywhere;

    @media (max-width: 480px) {
        font-size: 0.68rem;
        padding: 0.45rem;
    }
`;

export const TableCell = styled.td`
    padding: 0.75rem;
    font-size: 0.875rem;
    color: ${props => props.theme['black']};
    vertical-align: top;

    word-break: break-word;

    @media (max-width: 480px) {
        padding: 0.45rem;
        font-size: 0.75rem;
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

    @media (max-width: 480px) {
        font-size: 0.75rem;
    }
`;
