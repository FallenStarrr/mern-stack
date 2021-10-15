import 'materialize-css'
import { useRouts } from './pages/routes';
import {BrowserRouter as BR} from 'react-router-dom'

function App() {
  const routes = useRouts(false)
  return (
    <BR>
    <div className="container">
      {routes}
    </div>
    </BR>
  );
}

export default App
