import React from 'react'

const Main = React.lazy(() => import('../../Pages/Main/Main'))
const Ide = React.lazy(() => import('../../Pages/Ide/Ide'))
const Regex = React.lazy(() => import('../../Pages/Regex/RegexTester'))
const Diff = React.lazy(() => import('../../Pages/Diff/DiffViewer'))
const Toast = React.lazy(() => import('../../Pages/Toast/ToastUIEditor'))
const Chonky = React.lazy(() => import('../../Pages/Chonky/Chonky'))

const routes = [
  { path: 'main', name: 'Main', element: Main },
  { path: 'ide', name: 'Ide', element: Ide },
  { path: 'regex', name: 'Regex', element: Regex },
  { path: 'diff', name: 'Diff', element: Diff },
  { path: 'toast', name: 'Toast', element: Toast },
  { path: 'chonky', name: 'Chonky', element: Chonky },
]

export default routes
