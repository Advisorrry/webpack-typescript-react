import React from 'react'
import { withHocs } from './hocs'

const App = () => {
  return (
    <div className="flex text-violet-600 justify-center mt-10 text-2xl">
      <h1>Hello world</h1>
    </div>
  )
}

export default withHocs(App)
