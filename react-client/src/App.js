import logo from './logo.svg';
import './App.css';
import CmsAPI from './utils/CmsAPI';
import { useCallback } from 'react';

function App() {
  const logProducts = useCallback(() => {
    CmsAPI.getProducts()
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.error("There was an error in the API.\n" + err);
      })
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <h1>Welcome to my demo-site</h1>

        <p>
          The purpose of this is to display an understanding of
          how to put together a React frontend that interacts
          with a CMS.
        </p>

        <p>
          Click the button below to view the response from the
          CMS.
          <br />
          (I'm assuming you have all of your setups complete.
          Otherwise the button will not work.)
        </p>
        
        <button onClick={logProducts}>Click me for API</button>
        
      </header>
    </div>
  );
}

export default App;
