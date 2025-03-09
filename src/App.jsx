import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./Component/commonecomponent/RootLayout";
import HomePage from './pages/HomePage'
import Tickets from "./pages/Tickets";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/bus_tickets" element={<Tickets />} />
      </Route>
    </Route>
  )
)


const App = () => {



  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
