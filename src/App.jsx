
import './App.css'

const date=new Date();
const year=date.getFullYear();
const month=date.getMonth();

const h4Style={
  color:'green',
  textAlign:'center'
}

function App() {
  

  return (
    <>

    <div className='react'>
      <h1>Hello react</h1>
      <p>{year}</p>
      <p>{month}</p>



      <h3 style={{color:'red',fontSize:'23px',textAlign:'center'}}>wellcome to react</h3>

      <h4 style={h4Style}>internal style</h4>
    </div>
      
        
    </>
  )
}

export default App
