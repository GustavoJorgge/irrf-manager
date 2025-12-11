import { PencilIcon, TrashIcon } from "@phosphor-icons/react";
import { Container, Table, Thead, Tbody, Tr, Th, Td, Tag, Actions, IconButton } from "./styles";
import { useEmployee } from "../../../context/EmployeeContext";
import { useState } from "react";
import { EmployeeForm, type EmployeeData } from "../../../components/employees/EmployeeForm";

interface EmployeeTableProps {
  filteredEmployees: EmployeeData[];
}

// quero um hook para somar a quantidade total de irrf retido de uma lista de funcionários

export default function EmployeeTable({ filteredEmployees }: EmployeeTableProps) {
  const { deleteEmployee } = useEmployee();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [employeeToEdit, setEmployeeToEdit] = useState<EmployeeData | null>(null);

  const handleDelete = (id: string) => {
    deleteEmployee(id);
  };

  const handleUpdate = (emp: EmployeeData) => {
    setEmployeeToEdit(emp); 
    setIsModalOpen(true);     
  };

  const handleCloseModal = () => {
    setEmployeeToEdit(null);
    setIsModalOpen(false);
  };

  return (
    <>
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
            {filteredEmployees.map((emp) => (
              <Tr key={emp.id}>
                <Td>{emp.name}</Td>
                <Td>{emp.cpf}</Td>
                <Td>R$ {emp.netSalary?.toFixed(2)}</Td>
                <Td>{emp.previousDiscount}</Td>
                <Td>{emp.dependents}</Td>
                <Td><Tag>{(emp.aliquot! * 100).toFixed(1)}%</Tag></Td>
                <Td>R$ {emp.irrf?.toFixed(2)}</Td>

                <Td>
                  <Actions>
                    <IconButton
                      title="Editar"
                      variant="primary"
                      onClick={() => handleUpdate(emp)}
                    >
                      <PencilIcon size={16} />
                    </IconButton>

                    <IconButton
                      title="Excluir"
                      variant="danger"
                      onClick={() => handleDelete(emp.id!)}
                    >
                      <TrashIcon size={16} />
                    </IconButton>
                  </Actions>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Container>

      <EmployeeForm
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        employeeToEdit={employeeToEdit}   
      />
    </>
  );
}
