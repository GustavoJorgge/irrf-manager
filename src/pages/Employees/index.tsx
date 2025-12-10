import { Dot, DotContent, EmployeeContainer } from './styles';
import { EmployeeSearch } from '../../components/employees/EmployeeSearch';
import { User } from '@phosphor-icons/react';
import { Title } from '../../components/ui/Title/title';
import EmployeeTable from '../../components/employees/EmployeeTable';


export function Employee() {


  return (
    <EmployeeContainer>
        <div>
            <Title variant="small">
                <User size={24} />
                Funcionários Cadastrados
            <Dot>
                <DotContent>3</DotContent>
            </Dot>
            </Title>
        </div>
        <div>
            <EmployeeSearch />
        </div>
      <EmployeeTable />
      Total: R$1400
    </EmployeeContainer>
  );
}