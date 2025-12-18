
import './styles/style.scss';
import {Suspense, useState} from "react";
import routes from './routes/Router';
import {RouterProvider} from 'react-router-dom';
import {CircularProgress} from "@mui/material";
import './styles/style.scss';
import React, {useEffect} from 'react';
function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
      if (document.readyState === 'complete') {
          setIsLoaded(true);
      } else{
          const handleLoad = () => setIsLoaded(true);
          window.addEventListener('load', handleLoad);

          return () => window.removeEventListener('load', handleLoad);
      }
  }, []);
  if (!isLoaded) {
      return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: "100vh"}}>
            <CircularProgress/>
        </div>
      );
  }
  return (
      <div className="app">
          <Suspense
              fallback={<CircularProgress/>}>
            <RouterProvider router={routes}/>
        </Suspense>

        </div>
  );
}

export default App;
