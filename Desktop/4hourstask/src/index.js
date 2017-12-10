import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import { Provider } from 'react-redux';
//We import the configure store function that handles creating the store for us.
import Store from './store';

//When it is imported we call it to create the actual store based on our reducers. This is also
//so we don't have to import our reducers in this file.
const store = Store();
const mountPoint = document.getElementById('root')

//Provider makes so that every connected container component
//gets access to the store, you have to create the store based
//on your store configuration the pass it along to the providers
ReactDOM.render(
 <Provider store={store}>
   <App />
 </Provider>,
  mountPoint
);
