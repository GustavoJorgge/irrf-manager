import { UserPlus } from '@phosphor-icons/react';
import { Employee } from "../../components/employees";
import { IRRF } from "../../components/irrf";
import {
  HomeContainer,
  HomeHeader,
  HomeContent,
  LeftSection,
  RightSection,
} from "./styles";
import { Title } from '../../components/ui/Title/title';
import { Button } from '../../components/ui/Button/button';

export function Home(){


  return(
    <HomeContainer>
      <HomeHeader>
        <Title>Gestão de Funcionários</Title>
        <Button variant="primary">
            <UserPlus size={20} weight="regular" />
            Novo Funcionário
        </Button>

      </HomeHeader>

      <HomeContent>
        <LeftSection>
          <Employee />
        </LeftSection>
        <RightSection>
          <IRRF />
        </RightSection>
      </HomeContent>

   </HomeContainer>
  );
}