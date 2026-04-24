
import './App.css'
import Button from './component/button/Button'
import Input from './component/input/Input'

function App() {


  return (
    <>
      <section>
        <div className='inputRow'> 
          <Input/>
          <Button text={"Add"}></Button>
          </div>
      </section>

    </>
  )
}

export default App
