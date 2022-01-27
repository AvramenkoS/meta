import {BrowserRouter as Router} from "react-router-dom";
import {useRoutes} from "./routes";
import {useAuth} from "./hooks/auth.hook";
import {AuthContext} from "./context/AuthContext";
import 'materialize-css';

function App() {
    const {login, logout, token, userId} = useAuth()
    const isAuth = !!token
    const routes = useRoutes(isAuth)

    return (
        <AuthContext.Provider value={{
            token, userId, login, logout
        }}>
            <Router>
                <div className="container">
                    {routes}
                </div>
            </Router>
        </AuthContext.Provider>
    )
}

export default App;
