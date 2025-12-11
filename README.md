# Gerenciamento de Funcionários e Cálculo de IRRF

## Descrição
Este projeto foi desenvolvido para facilitar o calculo de IRRF por funcionario. 

## Funcionalidades
- **Cadastrar, atualizar e excluir funcionários**: Interface amigável para adicionar, editar e remover registros de funcionários de forma eficiente e rápida.
- **Listar funcionários com informações detalhadas**: Visualização completa das informações dos funcionários: Nome, CPF, Salario, Dosconto, Dependentes, Desconto IRPF.
- **Filtrar funcionários por nome e CPF**: Mecanismo de filtro que permite localizar funcionários específicos rapidamente por Nome ou CPF.
- **Cálculo automático de salário base e desconto de IRRF**: Hook performatico para calcular o IRRF de forma automatica no momento do cadastro ou edição.

## Tecnologias Utilizadas
- **React.js com VITE**
- **Context**
- **TypeScript**
- **Vitest** Teste da Aplicação
- **Zod** Validação de dados
- **React Hook Form**
- **Styled Components**
- **Phosphor-icons**

## Instalação
Para instalar as dependências e executar a aplicação, siga os passos abaixo:
1. Clone o repositório:
   ```bash
   git clone https://github.com/GustavoJorgge/irrf-manager.git
   ```
2. Navegue até o diretório do projeto:
   ```bash
   cd irrf-manager
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```
4. Inicie a aplicação:
   ```bash
   npm run dev
   ```
5. Testes via terminal:
```bash
npm run test
```

Após isso, a aplicação estará disponível em `http://localhost:5173`.

## Instruções de Uso
Para testar a aplicação, você pode realizar as seguintes ações:

1. Acesse a interface inicial da aplicação.
2. Utilize os formulários de entrada para cadastrar novos funcionários.
3. Experimente as opções de atualização e exclusão para modificar os dados de funcionários existentes.
4. Utilize a barra de filtro para encontrar rapidamente um funcionário específico por nome ou CPF.
5. Verifique o cálculo automático do IRRF ao atualizar ou cadastrar salários.

