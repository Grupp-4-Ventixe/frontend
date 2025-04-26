import { Suspense } from 'react'
import './App.css'
import RouteRenderer from './routing/RouteRenderer'

function App() {
  return (
    <Suspense fallback={<div className="spinner">Loading <span className="loading loading-spinner loading-sm"></span>

</div>}>
      <RouteRenderer />
    </Suspense>
    
  )
}

export default App
