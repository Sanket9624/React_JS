import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const anotherElement = (
  <a href='www.google.com' target='blank'>Visit Google</a>
)

const reactElemnt =  React.createElement(
  'a',
  {
    href:'www.google.com',
    target: '_blank'
  },
  'click google'
)


ReactDOM.createRoot(document.getElementById('root')).render(

<>
{reactElemnt}
<App />
</>

)
