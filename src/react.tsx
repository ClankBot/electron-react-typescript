import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { hot } from 'react-hot-loader/root'

const Index = hot(() => {
  return <div>Hello React!</div>
})

ReactDOM.render(<Index />, document.getElementById('app'))
