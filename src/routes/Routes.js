import React from "react";
import Nav from "../components/Nav";
import { Route, Routes as ReactRouterRouts } from "react-router-dom";
import HomePage from "../pages/Home.page.jsx";
import PostPage from "../pages/PostPage";
import PlanetPage from "../pages/Planet.page";
import ContactsPage from "../pages/Contacts.page";

export const appRotes = {
  home: {
    id: 1,
    path: "/",
    element: <HomePage />,
  },

  posts: {
    id: 2,
    path: "/CURSOR_React_hw_20//posts",
    element: <PostPage />,
  },

  planets: {
    id: 3,
    path: "/CURSOR_React_hw_20/photo",
    element: <PlanetPage />,
  },

  contacts: {
    id: 4,
    path: "/CURSOR_React_hw_20/contacts",
    element: <ContactsPage />,
  },
};

const Routes = (props) => {
  return (
    <div>
      <Nav />
      <ReactRouterRouts>
        {Object.values(appRotes).map(({ id, path, element }) => (
          <Route key={id} path={path} element={element} />
        ))}
      </ReactRouterRouts>
    </div>
  );
};

export default Routes;
