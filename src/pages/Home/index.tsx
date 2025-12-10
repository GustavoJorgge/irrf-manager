import { useState } from 'react';
import { UserPlus } from '@phosphor-icons/react';
import { Employee } from "../../components/employees";
import { IRRF } from "../../components/irrf";
import { EmployeeForm, type EmployeeData } from "../EmployeeForm";
import {
  HomeContainer,
  HomeHeader,
  HomeContent,
  LeftSection,
  RightSection,
} from "./styles";
import { Title } from '../../components/ui/Title/title';
import { Button } from '../../components/ui/Button/button';
import { useEmployee } from '../../context/EmployeeContext';

export function Home(){
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

const { addEmployee } = useEmployee();

const handleSubmitEmployee = (employee: EmployeeData) => {
  addEmployee(employee);
};

  return(
    <HomeContainer>
      <HomeHeader>
        <Title>Gestão de Funcionários</Title>
        <Button variant="primary" onClick={handleOpenModal}>
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

      <EmployeeForm
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleSubmitEmployee}
      />
   </HomeContainer>
  );
}