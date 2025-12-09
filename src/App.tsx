import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/theme/default'
import { GlobalStyle } from './styles/global'
import { Header } from './layout/Header'
import { Footer } from './layout/Footer'
import { Home } from './pages/Home'

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Header />
      <Home />
      <Footer />
    </ThemeProvider>
  )
}