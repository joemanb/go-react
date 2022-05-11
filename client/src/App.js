import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Link, useParams, useMatch, Routes } from 'react-router-dom';
import Movies from './components/Movies';
import Admin from './components/Admin';
import Home from './components/Home';
import Categories from './components/Categories';
import OneMovie from './components/OneMovie';

export default function App() {
  return (
    <Router>
      <div className="container">

        <div className="row">
          <h1 className="mt-3">
            Go Watch a Movie!
          </h1>
          <hr className="mb-3"></hr>
        </div>

        <div className="row">
          <div className="col-md-2">
            <nav>
              <ul className="list-group">
                <li className="list-group-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="list-group-item">
                  <Link to="/movies">Movies</Link>
                </li>
                <li className="list-group-item">
                  <Link to="/by-category">Categories</Link>
                </li>
                <li className="list-group-item">
                  <Link to="/admin">Manage Catalogue</Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="col-md-10">
            <Routes>

              <Route path="/movies/:id" element={OneMovie} />

              <Route path="/movies" element={<Movies />} />
              <Route exact path="/by-category" element={<Categories />} />

              <Route
                exact
                path="/by-category/drama"
                render={(props) => <Categories {...props} title={`Drama`} />}
              />

              <Route
                exact
                path="/by-category/comedy"
                render={(props) => <Categories {...props} title={`Comedy`} />}
              />

              <Route path="/admin" element={<Admin />} />

              <Route path="/" element={<Home />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

function CategoryPage() {

  let { path, url } = useMatch();

  return (
    <div>
      <h2>Categories</h2>

      <ul>
        <li><Link to={`${path}/comedy`}>Comedy</Link> </li>
        <li><Link to={`${url}/drama`}>Drama</Link> </li>
      </ul>
    </div>
  );
}