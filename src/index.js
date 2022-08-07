import ReactDOM from 'react-dom'; 
import { BrowserRouter } from 'react-router-dom';
import App from './pages/global/App';
import { Root } from './pages/global/Global';
import styles from './pages/styles/styles.css';
import {AuthProvider} from './providers/auth'


function Lista() {
   
    return (
       <Root>
           
         <AuthProvider>
          <App/>
         </AuthProvider>
           
        
          
        
           
           
        
         

       </Root>
    );
}

const lista = Lista();
ReactDOM.render(lista, document.querySelector(".root"));

