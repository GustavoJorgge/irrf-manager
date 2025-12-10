import { X } from '@phosphor-icons/react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useEffect } from 'react';
import { v4 as uuid } from "uuid";

import { Input } from '../../ui/Input/input';
import { Title } from '../../ui/Title/title';
import { Button } from '../../ui/Button/button';

import {  
  ModalOverlay, ModalContent, ModalHeader, CloseButton,
  ModalBody, FormField, FormLabel, FormRow, ModalFooter, ErrorMessage,
} from './styles';

import { useEmployee } from '../../../context/EmployeeContext';
import { useIRRF } from '../../../hooks/useIRRF';

const employeeSchema = z.object({
  id: z.string().uuid().optional(),

  name: z.string().min(3, "Nome é obrigatório"),
  cpf: z.string().min(11, "CPF inválido"),
  salary: z.number().min(0, "Informe um salário válido"),
  previousDiscount: z.number().min(0, "Informe um desconto válido"),
  dependents: z.number().min(0, "Informe a quantidade de dependentes"),

  baseSalary: z.number().optional(),
  irrf: z.number().optional(),
  netSalary: z.number().optional(),
  aliquot: z.number().optional(),
});

export type EmployeeData = z.infer<typeof employeeSchema>;

interface EmployeeFormProps {
  isOpen: boolean;
  onClose: () => void;
  employeeToEdit?: EmployeeData | null;
  onSubmit?: (employee: EmployeeData) => void;
}


export function EmployeeForm({ isOpen, onClose, employeeToEdit }: EmployeeFormProps) {
  const { calculate } = useIRRF();
  const { addEmployee, updateEmployee } = useEmployee();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<EmployeeData>({
    resolver: zodResolver(employeeSchema),
    defaultValues: employeeToEdit ?? {},
  });


  useEffect(() => {
    reset(employeeToEdit ?? {});
  }, [employeeToEdit, reset]);


   function handleSave(data: EmployeeData) {
    const result = calculate(
      data.salary,
      data.previousDiscount,
      data.dependents
    );

    const finalData: EmployeeData = {
      ...data,
      ...result,
    };

    if (employeeToEdit) {
      updateEmployee(finalData);
    } else {
      addEmployee({ ...finalData, id: uuid() });
    }

    handleClose();
  }

  function handleClose() {
    reset();
    onClose();
  }

  if (!isOpen) return null;


  return (
    <ModalOverlay onClick={handleClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <Title>
            {employeeToEdit ? "Editar Funcionário" : "Cadastrar Funcionário"}
          </Title>

          <CloseButton onClick={handleClose}>
            <X size={24} weight="regular" />
          </CloseButton>
        </ModalHeader>

        <form onSubmit={handleSubmit(handleSave)}>
          <ModalBody>

            <FormField>
              <FormLabel>Nome Completo</FormLabel>
              <Input
                type="text"
                placeholder="João da Silva"
                hasError={!!errors.name}
                {...register('name')}
              />
              {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
            </FormField>

            <FormField>
              <FormLabel>CPF</FormLabel>
              <Input
                type="text"
                placeholder="000.000.000-00"
                hasError={!!errors.cpf}
                {...register('cpf')}
              />
              {errors.cpf && <ErrorMessage>{errors.cpf.message}</ErrorMessage>}
            </FormField>

            <FormRow>
              <FormField>
                <FormLabel>Salário Bruto</FormLabel>
                <Input
                  type="number"
                  step="0.01"
                  placeholder="5000.00"
                  hasError={!!errors.salary}
                  {...register('salary', { valueAsNumber: true })}
                />
                {errors.salary && <ErrorMessage>{errors.salary.message}</ErrorMessage>}
              </FormField>

              <FormField>
                <FormLabel>Desconto Previdência</FormLabel>
                <Input
                  type="number"
                  step="0.01"
                  placeholder="550.00"
                  hasError={!!errors.previousDiscount}
                  {...register('previousDiscount', { valueAsNumber: true })}
                />
                {errors.previousDiscount && (
                  <ErrorMessage>{errors.previousDiscount.message}</ErrorMessage>
                )}
              </FormField>
            </FormRow>

            <FormField>
              <FormLabel>Nº Dependentes</FormLabel>
              <Input
                type="number"
                min="0"
                placeholder="0"
                hasError={!!errors.dependents}
                {...register('dependents', { valueAsNumber: true })}
              />
              {errors.dependents && <ErrorMessage>{errors.dependents.message}</ErrorMessage>}
            </FormField>

          </ModalBody>

          <ModalFooter>
            <Button type="button" variant="primary" onClick={handleClose}>
              Cancelar
            </Button>

            <Button type="submit" variant="secundary" disabled={isSubmitting}>
              {employeeToEdit
                ? (isSubmitting ? "Salvando..." : "Salvar Alterações")
                : (isSubmitting ? "Cadastrando..." : "Cadastrar")}
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </ModalOverlay>
  );
}
