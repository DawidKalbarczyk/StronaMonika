
import './styles/style.scss';
import {Suspense, useState} from "react";
import routes from './routes/Router';
import {RouterProvider} from 'react-router-dom';
import PageLoader from "/routes/CircularProgress.js";
import './styles/style.scss';
import React, {useEffect} from 'react';
function App() {
  return (
      <div className="app">
          <Suspense
              fallback={<PageLoader />}>
            <RouterProvider router={routes}/>
        </Suspense>

        </div>
  );
}

export default App;
