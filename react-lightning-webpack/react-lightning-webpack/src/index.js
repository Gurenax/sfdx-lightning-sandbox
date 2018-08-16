// import React from 'react'
// import ReactDOM from 'react-dom'
// import App from './components/App'
// ReactDOM.render(<App />, document.getElementById('root'))

import React from 'react';
import {render} from 'react-dom';
// import ContactSearch from './ContactSearch';
import App from './components/App'

export const init = (el, service) => {

    render((
        // <ContactSearch service={service}/>
        <App service={ service }/>
    ), el);

};