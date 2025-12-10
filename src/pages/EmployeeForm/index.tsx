import { X } from '@phosphor-icons/react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Input } from '../../components/ui/Input/input';
import {  ModalOverlay, ModalContent, ModalHeader, CloseButton, ModalBody,FormField, FormLabel, FormRow, ModalFooter, ErrorMessage,} from './styles';
import { Title } from '../../components/ui/Title/title';
import { Button } from '../../components/ui/Button/button';
import { useEmployee } from '../../context/EmployeeContext';
import { v4 as uuid } from "uuid";


interface EmployeeFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: EmployeeData) => void;
}

const employeeSchema = z.object({
  id: z.string().uuid().optional(),
  name: z
    .string(),
  cpf: z
    .string()
    // .regex(/^\d{11}$|^\d{3}\.\d{3}\.\d{3}-\d{2}$/, 'CPF inválido'),
    .min(11, 'CPF inválido'),
  salary: z.number(),
  previousDiscount: z.number(),
  dependents: z
    .number(),
});

export type EmployeeData = z.infer<typeof employeeSchema>;

export function EmployeeForm({ isOpen, onClose }: EmployeeFormProps) {

  const {addEmployee} = useEmployee();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<EmployeeData>({
    resolver: zodResolver(employeeSchema),
  });

  function handleSave(data: EmployeeData) {
    const newEmployee = { ...data, id: uuid() };
    addEmployee(newEmployee);
    console.log(data)
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
          <Title>Cadastrar Funcionário</Title>

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
                <FormLabel>Salário Bruto (R$)</FormLabel>
                <Input
                    type="number"
                    step="0.01"
                    placeholder="5000.00"
                    hasError={!!errors.salary}
                    {...register('salary', { valueAsNumber: true })}
                />
                {errors.salary && (
                    <ErrorMessage>{errors.salary.message}</ErrorMessage>
                )}
              </FormField>

              <FormField>
                <FormLabel>Desconto Previdência (R$)</FormLabel>
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
              <FormLabel>Nº de Dependentes</FormLabel>
              <Input
                type="number"
                min="0"
                placeholder="0"
                hasError={!!errors.dependents}
                {...register('dependents', { valueAsNumber: true })}
              />
              {errors.dependents && (
                <ErrorMessage>{errors.dependents.message}</ErrorMessage>
              )}
            </FormField>
          </ModalBody>

          <ModalFooter>
            <Button type="button" variant="primary" onClick={handleClose}>
              Cancelar
            </Button>

            <Button type="submit" variant="secundary" disabled={isSubmitting}>
              {isSubmitting ? 'Cadastrando...' : 'Cadastrar'}
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </ModalOverlay>
  );
}
