
import './App.css'; 
import Events from './components/Events';
import Formulario from './components/Formulario';
import OnChanges from './components/OnChanges';
import OnMouseOver from './components/OnMouseOver';
import OnSubmit from './components/OnSubmit';

function App() {
  return (
    <div className="App">
      {/* <Events/>
      <OnChanges/>
      <OnSubmit/>
      <OnMouseOver/> */}
      <Formulario usuario={{nome: "Adriana", email: "aluna@gmail.com"}} />
    </div>
  );
}

export default App;
