import React from 'react'
import { hot } from 'react-hot-loader'

const App = (): JSX.Element => {
  const handleClick = () => {
    console.log(`1111`)
  }

  return (
    <div onClick={handleClick}>
      <h1>test</h1>hello world
    </div>
  )
}

export default hot(module)(App)
