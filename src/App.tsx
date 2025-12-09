import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/theme/default'
import { GlobalStyle } from './styles/global'
import { Header } from './layout/Header'
import { Footer } from './layout/Footer'

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Header />
      <Footer />
    </ThemeProvider>
  )
}