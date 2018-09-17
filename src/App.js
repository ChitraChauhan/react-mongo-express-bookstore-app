import React from "react";
import "./App.css";
import { Router, Route, IndexRoute, browserHistory } from "react-router";
import BookList from "./components/pages/bookList";
import Cart from "./components/pages/cart";
import BookForm from "./components/pages/bookForm";
import Main from "./components/main";

const App = () => (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={BookList} />
      <Route path="/admin" component={BookForm} />
      <Route path="/cart" component={Cart} />
    </Route>
  </Router>
);

export default App;
