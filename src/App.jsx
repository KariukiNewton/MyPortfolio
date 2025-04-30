import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import AppRoutes from './routes/AppRoutes';
import Header from './components/Header';
import Footer from './components/Footer';
import SettingsOverlay from './components/SettingsOverlay';

import './styles/global.scss';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Header />

        <main>
          <AppRoutes />
        </main>

        <Footer />
        <SettingsOverlay />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
