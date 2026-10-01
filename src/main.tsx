import { createRoot } from 'react-dom/client'
import {App} from './App.tsx'
import './index.css'
import {BrowserRouter} from "react-router-dom"
import { SplashCursor }  from "./components/ArDacityUi/SplashCursor";

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <SplashCursor
      SPLAT_FORCE={3000}
      DENSITY_DISSIPATION={6}
      VELOCITY_DISSIPATION={4}
      SPLAT_RADIUS={0.1}
      CURL={2}
    />
        <App /></BrowserRouter>

)
