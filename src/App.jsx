import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./Component/commonecomponent/RootLayout";
import HomePage from './pages/HomePage'
import Tickets from "./pages/Tickets";
import Details from "./Component/CommoneComponent/common/ticket/detail/Details";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/bus_tickets" element={<Tickets />} />

        {/* Details */}
        <Route path="/bus_tickets/detail" element={<Details />} />
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
