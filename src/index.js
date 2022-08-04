import ReactDOM from 'react-dom'; 
import App from './pages/global/App';
import { Root } from './pages/global/Global';
import styles from './pages/styles/styles.css';

function Lista() {
    return (
       <Root>
          <App/>

       </Root>
    );
}

const lista = Lista();
ReactDOM.render(lista, document.querySelector(".root"));

