import './App.css'
import Card from './components/Card.jsx'
import Button from './components/Button'

function App() {
  const reyes=[
    {
        nombre:"Atanagildo",
        reinado:15,
        vacasComidas:9
    },{
        nombre:"Ervigio",
        reinado:7,
        vacasComidas:3
    },{
        nombre:"Ataúlfo",
        reinado:5,
        vacasComidas:16
    },{
        nombre:"Leovigildo",
        reinado:18,
        vacasComidas:3
    },{
        nombre:"Sisebuto",
        reinado:9,
        vacasComidas:13
    },{
        nombre:"Recesvinto",
        reinado:19,
        vacasComidas:11
    },{
        nombre:"Teodorico",
        reinado:33,
        vacasComidas:12
    }
  ]
// https://www.html6.es/img/rey_atanagildo.png
const map = reyes.map((e) =>
<Card king={ e } key={e.nombre} />)
const map2 = reyes.filter(e => !e.nombre.includes('g')).map((e) =>
<Button king={ e } key={e.nombre} />)

const map3 = reyes.filter(e=>e.nombre.substring(0,1) === 'e' ||e.nombre.substring(0,1) === 'E').map((e) =>
<div key={e.nombre}>{e.nombre}</div>)

const sumar = (e) => {
  ++e.target.innerHTML
}

const map4 = reyes.filter(e=> e.vacasComidas > 10 && e.reinado > 10).map((e) =>
<div key={e.nombre}>{e.nombre}<div onClick={sumar}>0</div></div>)

console.log(map3)
  return (
   <>
    <h1>Actividades:</h1>
    <div className="containerCards">
      { map }
    </div>
    
    {/* { map3.length === 0 ?
    "No se necontraron coincidencias "
    : map3} */}
    {/* {map4} */}
   </>
  )
}

export default App
