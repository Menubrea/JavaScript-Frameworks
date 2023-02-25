import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/UI/Layout';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}></Route>
      </Routes>
    </div>
  );
}

export default App;
