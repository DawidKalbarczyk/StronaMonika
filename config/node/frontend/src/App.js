
import './styles/style.scss';
import {Suspense} from "react";
import routes from './routes/Router';
import {RouterProvider} from 'react-router-dom';
import {CircularProgress} from "@mui/material";

function App() {
  return (
    <div className="app">
        <Suspense
            fallback={
                <CircularProgress/>
            }
        >
            <RouterProvider router={routes}/>
        </Suspense>

    </div>
  );
}

export default App;
