import { createRoot } from 'react-dom/client'
import {App} from './App.tsx'
import { EmployeeProvider } from './context/EmployeeProvider.tsx'

createRoot(document.getElementById('root')!).render(
   <EmployeeProvider>
    <App />
  </EmployeeProvider>,
)
