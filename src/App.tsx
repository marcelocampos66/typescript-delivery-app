import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Products from './pages/Products';
import Checkout from './pages/Checkout';
import Orders from './pages/Orders';
import OrderDetails from './pages/OrderDetails';
import AdminPanel from './pages/AdminPanel';
import { ThemeProvider } from 'styled-components';
import { light, dark } from './GlobalStyle/Theme';
import './App.css';

const theme = true;

function App() {
  return (
    <ThemeProvider theme={ theme ? light : dark }>
      <Switch>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route path="/login" component={ Login } />
        <Route path="/register" component={ Register } />
        <Route path="/customer/products" component={ Products } />
        <Route path="/customer/checkout" component={ Checkout } />
        <Route path="/customer/orders/:id" component={ OrderDetails } />
        <Route path="/seller/orders/:id" component={ OrderDetails } />
        <Route path="/customer/orders" component={ Orders } />
        <Route path="/seller/orders" component={ Orders } />
        <Route path="/admin/manage" component={ AdminPanel } />
      </Switch>
    </ThemeProvider>
  );
}

export default App;
