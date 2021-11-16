import { Home } from "./pages/Home";
import { BrowserRouter,  Route } from 'react-router-dom'
import { NewRoom } from "./pages/NewRoom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function App() {

  return (

    <BrowserRouter>
              <ToastContainer/>
              <Route path="/" component={Home} exact/>
              <Route path="/rooms/new" component={NewRoom}/>

    </BrowserRouter>
    
  );
}

export default App;
                                        