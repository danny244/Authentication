import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { PageNotFound, Password, Profile, Recovery, Register, Reset, Username } from './components'

function App() {

  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Username />
      },

      {
        path: "/register",
        element: <Register />
      },

      {
        path: "/password",
        element: <Password />
      },

      {
        path: "/profile",
        element: <Profile />
      },

      {
        path: "/recovery",
        element: <Recovery />
      },

      {
        path: "/reset",
        element: <Reset />
      },

      {
        path: "*",
        element: <PageNotFound />
      },
    ]
  )

  return (
    <main>
      <RouterProvider router={router}></RouterProvider>
    </main>
  )
}

export default App
