import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import SecondaryNavbar from './SecondaryNavbar';

const NavigationWrapper = () => {
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    return isHomePage ? <Navbar /> : <SecondaryNavbar />;
};

export default NavigationWrapper;
