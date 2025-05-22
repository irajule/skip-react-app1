import { Routes, Route } from 'react-router-dom';
import PersonalDetailsPage from '../pages/PersonalDetailsPage';
import ContactPage from '../pages/ContactPage';
import SkipSelectionPage from '../pages/SkipSelectionPage'
import PaymentPage from '../pages/PaymentPage'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<PersonalDetailsPage />} />
      <Route path="/skips" element={<SkipSelectionPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path='/paymemnt' element={<PaymentPage />} />
    </Routes>
  );
}

export default AppRoutes;
