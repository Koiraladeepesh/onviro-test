import './App.css';
import Product from './Product';
import Login from './Login';
import{
BrowserRouter as Router,
Route,
// Link,
Routes,
} from "react-router-dom";
import ProtectedRoute from './ProtectedRoute';
import AuthenticationProvider from './AuthenticationContextApi';

function App() {
  return (
  <Router>
    <div className="app">
      <AuthenticationProvider>
      <Routes>
        <Route path="/login" element={<Login />}/>
        <Route path={"/product"} element={<ProtectedRoute />}>
        <Route path="" element={<Product />} />
      </Route>
      </Routes>
      </AuthenticationProvider>
    </div>
  </Router>
  );
}

export default App;
