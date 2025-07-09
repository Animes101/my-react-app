
import './App.css'

// const date=new Date();
// const year=date.getFullYear();
// const month=date.getMonth();

// const h4Style={
//   color:'green',
//   textAlign:'center'
// }


import Card from './components/Card'

function App() {
  

  return (
    <>

    {/* <div className='react'>
      <h1>Hello react</h1>
      <p>{year}</p>
      <p>{month}</p>



      <h3 style={{color:'red',fontSize:'23px',textAlign:'center'}}>wellcome to react</h3>

      <h4 style={h4Style}>internal style</h4>
    </div> */}

    {/* <div className='Card'>
      <h1>Card Title</h1>
      <p>card Body Lorem ipsum dolor sit amet consectetur adipisicing elit. Est dolor facilis nostrum 
        impedit facere similique sint quis odio voluptatem eligendi?</p>
        <button>View</button>
    </div> */}

    {/* Components React */}
     <Card />
     <Card />
     <Card />
     <Card />
        
    </>
  )
}

export default App
