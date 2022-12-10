import './App.css';
import './css/navbar.css';
import './css/footer.css';
import './css/forms.css';

import Ce_navbar from './components/Ce_navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Ce_footer from './components/Ce_footer';
import { Ce_forms } from './components/Ce_forms';


function App() {
  return (
    <div className="App">
      <Ce_navbar /> 
      <Ce_forms /> 
      <Ce_footer /> 
    </div>
  );
}

export default App;
