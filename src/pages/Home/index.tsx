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

export function Home(){


  return(
    <HomeContainer>
      <HomeHeader>
        <Title>Gestão de Funcionários</Title>
        <button>
          <UserPlus size={20} weight="regular" />
          Novo Funcionário
        </button>
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