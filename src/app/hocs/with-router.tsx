import React from 'react'
import { BrowserRouter } from 'react-router-dom'

// eslint-disable-next-line react/display-name
const withRouter = (component: () => React.ReactNode) => () =>
  (
    <BrowserRouter>
      <React.Suspense fallback={<span>loading...</span>}>{component()}</React.Suspense>
    </BrowserRouter>
  )

export default withRouter
