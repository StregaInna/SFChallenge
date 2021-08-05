// This file sets up React and adds the React Routes to the app.
// It also initiates the relationship with the redux store, which we'll use for managing state
// The redux store is another feature that is not really needed for the current MVP of the assignment,
// however it does allow for greater scalability if we want to add additional features in the future.
// It also helps with modularity and thus code readability, IMO

import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'

import store from './store'
import Routes from './components/Routes'

render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('main')
)
