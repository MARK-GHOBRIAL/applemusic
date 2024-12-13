import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import MyData from './components/MyData'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

const App = () => {
  return (
    <div>
      <Container className="my-4">
        <Navbar />
        <h1 className="text-center">Novità</h1>
        <MyData />
      </Container>
    </div>
  )
}

export default App
