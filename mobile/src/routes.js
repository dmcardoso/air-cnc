import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Login from './pages/login';
import List from './pages/list';
import Booking from './pages/booking';

const Routes = createAppContainer(createSwitchNavigator({
    Login,
    List,
    Booking,
}));

export default Routes;
