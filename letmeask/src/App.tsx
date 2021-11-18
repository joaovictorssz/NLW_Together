import { Home } from "./pages/Home";
import { BrowserRouter,  Route } from 'react-router-dom'
import { NewRoom } from "./pages/NewRoom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import { AuthContextProvider } from "./contexts/AuthContext";


function App() {
  
  return (

    <BrowserRouter>

      <AuthContextProvider>

        <ToastContainer/>
        <Route path="/" component={Home} exact/>
        <Route path="/rooms/new" component={NewRoom}/>
        
      </AuthContextProvider>

    </BrowserRouter>
    
  );
}

export default App;
