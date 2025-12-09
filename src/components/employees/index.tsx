import { EmployeeContainer } from './styles';
import { EmployeeSearch } from './EmployeeSearch';
import { EmployeeList } from './EmployeeList';
import { User } from '@phosphor-icons/react';
import { Title } from '../ui/Title/title';


export function Employee() {


  return (
    <EmployeeContainer>
        <div>
  <Title variant="small">
    <User size={24} />
    Funcionários Cadastrados
  </Title>
</div>
        <div>
            <EmployeeSearch />
        </div>
      <EmployeeList
      />
    </EmployeeContainer>
  );
}