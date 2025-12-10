import { PencilIcon, TrashIcon } from "@phosphor-icons/react";
import { Container, Table, Thead, Tbody, Tr, Th, Td, Tag, Actions, IconButton } from "./styles";
import { useEmployee } from "../../../context/EmployeeContext";

// interface EmployeeProps {
//   id: string;
//   nome: string;
//   cpf: string;
//   salario: number;
//   previousDiscount: number;
//   dependents: number;
//   aliquot: string;
//   irrf: number;
// }

export default function EmployeeTable() {
  const { employees, deleteEmployee } = useEmployee();

  const handleDelete = (id: string) => {
    if (confirm("Tem certeza que deseja excluir este funcionário?")) {
      deleteEmployee(id);
    }
  };
  return (
    <Container>
      <Table>
        <Thead>
          <Tr>
            <Th>Nome</Th>
            <Th>CPF</Th>
            <Th>Salário</Th>
            <Th>Desc. Prev.</Th>
            <Th>Dep.</Th>
            <Th>Alíquota</Th>
            <Th>IRRF</Th>
            <Th>Ações</Th>
          </Tr>
        </Thead>

        <Tbody>
          {employees.map((emp) => (
            <Tr key={emp.id}>
              <Td>{emp.name}</Td>
              <Td>{emp.cpf}</Td>
              <Td>
                R$ {emp.salary} </Td>
              <Td>
                {emp.previousDiscount}
              </Td>
              <Td>{emp.dependents}</Td>
              <Td>
                <Tag>15</Tag>
              </Td>
              <Td>
                R$40
              </Td>

              <Td>
                <Actions>
                  <IconButton title="Editar" variant="primary">
                    <PencilIcon size={16} />
                  </IconButton>
                  <IconButton title="Excluir" variant="danger" onClick={() => handleDelete(emp.id!)}>
                    <TrashIcon size={16} />
                  </IconButton>
                </Actions>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Container>
  );
}
