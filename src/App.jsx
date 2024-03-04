import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import AboutLink from './components/AboutLink';
import AboutPage from './pages/AboutPage';
import { FeedbackProvider } from './context/FeedbackContext';

function App() {
  return (
    <div style={{ height: '100vh' }}>
      <FeedbackProvider>
        <Router basename='/feedback/'>
          <Header />
          <div className='container'>
            <Routes>
              <Route
                exact
                path='/'
                element={
                  <>
                    <FeedbackForm />
                    <FeedbackStats />
                    <FeedbackList />
                    <AboutLink />
                  </>
                }
              />
              <Route path='/about' element={<AboutPage />} />
            </Routes>
          </div>
        </Router>
      </FeedbackProvider>
    </div>
  );
}

export default App;
