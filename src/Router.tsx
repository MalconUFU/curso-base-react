import { BrowserRouter, Routes, Route } from "react-router";
import { useIsAuthenticated } from "./shared/contexts/AuthContext";
import { Home } from "./pages/Home";
import { AppLayout } from "./shared/layout/AppLayout";
import { About } from "./pages/About";
import { Detail } from "./pages/Detail";
import { Login } from "./pages/public/Login";


export const AppRoutes = () => {

    const isAuthenticated = useIsAuthenticated();

    return(
        <BrowserRouter>
          {isAuthenticated && (
            <AppLayout>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/sobre' element={<About />} />
                <Route path='/detalhe/:id' element={<Detail />} />
                <Route path='*' element={<Home />} />
              </Routes>
            </AppLayout>
          )}
          {!isAuthenticated && (
            <Routes>
              <Route path='/' element={<Login />} />
            </Routes>
          )}
        </BrowserRouter>
    )
}