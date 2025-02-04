import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { StateContext } from './context/StateContext'
import './translate/Translate';
import Layout from './Layout'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
      <StateContext>
        <Layout>
          <App/>
        </Layout>
      </StateContext>
  </BrowserRouter>
)
