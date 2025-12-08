import { Calculator } from '@phosphor-icons/react';
import { HeaderContainer, Title, Subtitle, IconWrapper, ContentContainer } from "./styles";

export function Header(){
    return (
        <HeaderContainer>
            <IconWrapper>
            <Calculator size={28} color="white" />
            </IconWrapper>
            <ContentContainer>
                <Title>Sistema de Gestão de Funcionarios</Title>
                <Subtitle>Cálculo de IRRF - Fiscal Compliance Suite</Subtitle>  
            </ContentContainer>
        </HeaderContainer>
    )
}