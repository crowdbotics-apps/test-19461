import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Tutorial89262Navigator from '../features/Tutorial89262/navigator';
import NotificationList89234Navigator from '../features/NotificationList89234/navigator';
import Settings89233Navigator from '../features/Settings89233/navigator';
import Settings89225Navigator from '../features/Settings89225/navigator';
import UserProfile89223Navigator from '../features/UserProfile89223/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Tutorial89262: { screen: Tutorial89262Navigator },
NotificationList89234: { screen: NotificationList89234Navigator },
Settings89233: { screen: Settings89233Navigator },
Settings89225: { screen: Settings89225Navigator },
UserProfile89223: { screen: UserProfile89223Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
