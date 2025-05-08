import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Footer from './components/Footer';
import SettingsOverlay from './components/SettingsOverlay';

import Home from './pages/Home';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Contacts from './pages/Contacts';

import './styles/global.scss';

function App() {
  return (
    <ThemeProvider>
      <Header />
      <main>
        <section id="home"><Home /></section>
        <section id="services"><Services /></section>
        <section id="projects"><Projects /></section>
        <section id="contacts"><Contacts /></section>
      </main>
      <Footer />
      <SettingsOverlay />
    </ThemeProvider>
  );
}

export default App;
