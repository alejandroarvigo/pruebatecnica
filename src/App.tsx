import './App.css'
import FilterList from './components/FilterList/FilterList'
import Form from './components/Form/Form'

function App() {
  return (
    <div className='h-screen'>
      <h1 className='text-4xl text-center my-4'>Lista de Frases</h1>
      <Form />
      <FilterList />
    </div>
  )
}

export default App
