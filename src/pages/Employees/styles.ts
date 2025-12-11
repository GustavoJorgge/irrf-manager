import styled from 'styled-components';

export const EmployeeContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-row-gap: 1.5rem;
    gap: 0.5rem;
    align-items: center;
    justify-content: space-between;
    
    width: 100%;
    padding: 1.5rem;
    
    background-color: ${props => props.theme['gray-50']};
    border: 1px solid ${props => props.theme['gray-200']};
    border-radius: 10px;
    
    & > table,
    & > div:last-child {
        grid-column: 1 / -1;
    }

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 1rem;
        gap: 1rem;
        
        & > div:first-child {
            grid-column: 1;
        }
    }

    @media (max-width: 480px) {
        padding: 0.75rem;
        grid-row-gap: 1rem;
    }
`;

export const Dot = styled.div`
    width: 1.5rem;  
    height: 1.5rem;
    padding: 0.5rem;
    display: flex;  
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: ${props => props.color || props.theme['gray-200']};

    @media (max-width: 480px) {
        width: 1.25rem;
        height: 1.25rem;
        padding: 0.375rem;
    }
`;

export const DotContent = styled.p`
    font-size: 1rem;
    color: ${props => props.theme['gray-800']};

    @media (max-width: 480px) {
        font-size: 0.875rem;
    }
`;
