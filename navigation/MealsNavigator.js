import { createStackNavigator, createAppContainer } from 'react-navigation'
import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealsScreen from '../screens/CategoryMealsScreen'
import MealDetailScreen from '../screens/MealDetailScreen'
import Color from '../constants/Color';
import { Platform } from 'react-native'

const MealsNavigator = createStackNavigator({
  Categories: CategoriesScreen,
  CategoryMeals: {
    screen: CategoryMealsScreen,
    navigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Color.primaryColor : ''
      },
      headerTintColor: Platform.OS === 'android' ? 'white' : Color.primaryColor
    }
  },
  MealDetail: MealDetailScreen,

},
{
  headerMode: 'modal',
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? Color.primaryColor : ''
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Color.primaryColor
  }
}

)

export default createAppContainer(MealsNavigator)


