import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthPage from './Pages/AuthPage';
import ContentPage from './Pages/ContentPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/home" element={<ContentPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
