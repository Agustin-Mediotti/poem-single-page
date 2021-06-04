import './App.css';
import Typical from 'react-typical'

function App() {

  const refreshPage = ()=>{
    window.location.reload();
 }
  
  return (
    <>
    <div className="App">
      <div className="App-header">
      <h1>Sintropía</h1>
      <Typical
        loop={1}
        wrapper='p'
        steps={[
          'Fue en aquella playa',
          1000,
          'en la que te presentaste como el aire',
          550,
          'fue en aquel balcón',
          550,
          'en el que te tomé del cuello y mordí tus labios',
          550,
          'fue en aquel otoño frío',
          550,
          'cuando transgredimos el equilibrio entrópico del universo',
          550,
          'fue aquella noche',
          550,
          'en la que me acompañaste en soledad',
          550,
          'y fue esa mañana',
          550,
          'en la que revelaste tu cuerpo desnudo',
          550,
          'fue en esa plaza',
          550,
          'donde dejamos un rastro de deseo, estampado con calor.',
          350
        ]}
      />
      </div>
      <div className='btn' onClick={refreshPage}><span>Leer de nuevo</span></div>
    </div>
    </>
  );
}

export default App;
