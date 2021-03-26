import { CmsAPI, PyAPI } from '../../utils';
import { useCallback } from 'react';
import './PreHome.css';

function PreHome() {

    const logProducts = useCallback(() => {
        CmsAPI.getProducts()
          .then(res => {
            console.log(res);
          })
          .catch(err => {
            console.error("There was an error in the API.\n" + err);
          })
      }, []);
    
      const logTransactions = useCallback(() => {
        PyAPI.getTransactions()
          .then(res => {
            console.log(res);
          })
          .catch(err => {
            console.error("There was an error in the PyFlask API.\n" + err);
          })
      }, []);

    return(
        <header className="Temp">

            <section className="Temp-header">

                <h1>Welcome to my demo-site</h1>

                <p>
                    The purpose of this is to display an understanding of
                    how to put together a React frontend that interacts
                    with a CMS.
                </p>

                <p>
                    Click the button below to view the response from the
                    CMS. Open the console by pressing either f12, ctrl+shift+i,
                    or right clicking on the page. Navigate to the console
                    tab if you're not already there. You can also see the API's
                    in action by exploring this demo-site.
                    <br />
                    (I'm assuming you have all of your setups complete.
                    Otherwise the button will not works. Although, if 
                    you're viewing a demo, they will work.)
                </p>
                
                <button className="btn btn-success tmp-btn" onClick={logProducts}>Click me for strapi API</button>
                <button className="btn btn-success tmp-btn" onClick={logTransactions}>Click me for PyAPI</button>

            </section>
            
            
        </header>
    );
}

export default PreHome;
