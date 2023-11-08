import './App.css'
import FilterList from './components/FilterList/FilterList'
import Form from './components/Form/Form'

function App() {
  return (
    <div className='h-screen bg-lightblue'>
      <h1 className='text-4xl text-center pt-4 font-sans'>Lista de Frases</h1>
      <Form />
      <FilterList />
    </div>
  )
}

export default App
