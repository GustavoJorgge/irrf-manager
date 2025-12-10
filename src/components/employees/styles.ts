import styled from 'styled-components';

export const EmployeeContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-row-gap: 1.5rem;
    gap: 2rem;
    align-items: center;
    justify-content: space-between;
    
    width: 100%;
    max-width: 50rem;
    padding: 1.5rem;
    
    background-color: ${props => props.theme['background']};
    border: 1px solid ${props => props.theme['gray-200']};
    border-radius: 10px;
    
    & > table,
    & > div:last-child {
        grid-column: 1 / -1;
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
`;

export const DotContent = styled.p`
    font-size: 1rem;
    color: ${props => props.theme['gray-800']};
`;
