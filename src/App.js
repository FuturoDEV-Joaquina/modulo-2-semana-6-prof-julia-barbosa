
import './App.css'; 
import Events from './components/Events';
import Formulario from './components/Formulario';
import OnChanges from './components/OnChanges';
import OnMouseOver from './components/OnMouseOver';
import OnSubmit from './components/OnSubmit';
import UseEffect from './components/UseEffect';
import UseRef from './components/UseRef';
import UseSate from './components/UseSate';
import Desmontagem from './components/desmontagem';

function App() {
  return (
    <div className="App">
      {/* <Events/>
      <OnChanges/>
      <OnSubmit/>
      <OnMouseOver/> */}
      {/* <Formulario usuario={{nome: "Adriana", email: "aluna@gmail.com"}} /> */}
      {/* <UseSate/> */}
      {/* <UseEffect/> */}
      {/* <UseRef/> */}
      <Desmontagem/>
    </div>
  );
}

export default App;
