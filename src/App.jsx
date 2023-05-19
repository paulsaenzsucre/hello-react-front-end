import { Routes, Route } from 'react-router-dom';
import GreetingPage from './pages/GreetingPage';

const App = () => (
  <div>
  <h1>Hello Rails React</h1>
    <Routes>
      <Route index element = {<GreetingPage />} />
    </Routes>      
  </div>
);
export default App;