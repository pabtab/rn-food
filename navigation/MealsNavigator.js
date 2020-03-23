import React from 'react'
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation'
import { Ionicons } from '@expo/vector-icons'
import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealsScreen from '../screens/CategoryMealsScreen'
import MealDetailScreen from '../screens/MealDetailScreen'
import Color from '../constants/Color';
import { Platform } from 'react-native'
import FavoritesScreen from '../screens/FavoritesScreen';

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
  //headerMode: 'modal',
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? Color.primaryColor : ''
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Color.primaryColor
  }
})

const MealsFavTabNavigator = createBottomTabNavigator({
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor} />
      }
    }
  },
  Favorites: {
    screen:FavoritesScreen,
    navigationOptions: {
      tabBarLabel: 'Favorites!',
      tabBarIcon: (tabInfo) => {
        return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor} />
      }
    }
  }
}, {
  tabBarOptions: {
    activeTintColor: Color.accentColor
  }
})

export default createAppContainer(MealsFavTabNavigator)


