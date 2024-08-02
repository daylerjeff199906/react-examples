import './App.css'
import './styles/app.css'
import { SectionUser } from './modules/sectionUser'
import { SectionPayments } from './modules/sectionPayments'
import { SectionBoleta } from './modules/sectionBoleta'
import { BoletaProvider } from './providers/BoletaProvider'

function App() {
  return (
    <main
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 20,
      }}
    >
      <BoletaProvider>
        <section>
          <SectionUser />
          <SectionPayments />
        </section>
        <SectionBoleta />
      </BoletaProvider>
    </main>
  )
}

export default App
