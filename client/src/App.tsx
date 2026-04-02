import './App.css'
import { Toaster } from 'sonner'
import { TreePage } from '@/pages/TreePage'

function App() {
  return (
    <>
      <TreePage />
      <Toaster richColors position='top-center'/>
    </>
  )
}

export default App
