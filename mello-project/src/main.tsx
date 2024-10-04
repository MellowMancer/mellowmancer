import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import "../styles/globals.css";
import { BrowserRouter } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0 }} // Starting state
        animate={{ opacity: 1 }}  // Final state
        exit={{ opacity: 0 }}     // Exit state (when theme changes)
        transition={{ duration: 0.5 }} // Smooth transition duration
        key={document.documentElement.getAttribute('data-theme')}
      >
        <App />
      </motion.div>
    </AnimatePresence>
  </BrowserRouter>,
);

