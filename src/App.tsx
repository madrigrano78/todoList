import './App.css'
import { Header } from './components/Header'
import { Body } from './components/Body'

import { ThemeProvider } from 'styled-components'

import { useState } from 'react'

import light from './themes/light'
import dark from './themes/dark'

type Theme = {
  name: string
  colors: {
    primary: string
    secondary: string
    lightChecked: string
    textColor: string
    textMode: string
    imageHeader: string
  }
}

function App() {
  const [theme, setTheme] = useState<Theme>(light)

  const onChangeTheme = () => {
    setTheme(theme.name === 'light' ? dark : light)
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <Header onChangeTheme={onChangeTheme} />
        <Body />
      </ThemeProvider>
    </>
  )
}

export default App
