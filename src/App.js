import './App.css';
import './css/navbar.css';
import './css/footer.css';
import './css/forms.css';
import './css/profileStyle.css';


import Ce_navbar from './components/Ce_navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Ce_footer from './components/Ce_footer';
import { Ce_forms } from './components/Ce_forms';
import ProfilePhoto from './components/Profile/ProfilePhoto';
import { Button, Card } from 'react-bootstrap';
import Address from './components/Profile/Address';
import FullName from './components/Profile/FullName';


function App() {
  return (
    <div className="App">
      <Ce_navbar /> 
      <div className='profileCard'>
      <Card>
        <ProfilePhoto />
        <Card.Body>
          <Card.Title><FullName name="kawthar jmaiel"/></Card.Title>
          <Card.Text>
          <Address/>
          </Card.Text>
          <Button variant="primary">Say Hello</Button>
        </Card.Body>
      </Card>
      </div>
      <Ce_forms /> 
      <Ce_footer /> 
    </div>
  );
}

export default App;
