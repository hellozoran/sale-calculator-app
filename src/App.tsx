import { ThemeProvider } from "@/components/theme-provider"
import { ThemeSwitcher } from "@/components/theme-switcher"
import Calculator from '@/components/calculator'
import '@/assets/app.css'

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="calculator-theme">
      <div className='w-full h-screen grid grid-rows-layout'>
        <AppHeader />
        <main className='grid place-items-center'>
          <Calculator />
        </main>
        <AppFooter />
      </div>
      
    </ThemeProvider>
  )
}

const AppHeader = () => {
  return (
    <header className='h-16 p-4 flex items-center justify-between'>
      <h1 className="font-bold text-xl">Sale Calculator</h1>
      <ThemeSwitcher />
    </header>
  )
}

const AppFooter = () => {
  return (
    <footer className='h-16 p-4 opacity-40 text-sm text-center'>
      Made by <a href="https://zoranmitrovic.com">Zoran</a>
    </footer>
  )
}

export default App
