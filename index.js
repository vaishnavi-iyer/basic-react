import React from 'react'
import reactDom from 'react-dom'
import App from './components/app'
import Greeter from './components/greeter'
import Counter from './components/counter'

reactDom.render(<App name="My App" />, document.querySelector('main'))
console.log('welcome to basic-react')
