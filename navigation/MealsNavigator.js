import React from 'react'
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealsScreen from '../screens/CategoryMealsScreen'
import MealDetailScreen from '../screens/MealDetailScreen'
import Color from '../constants/Color';
import { Platform } from 'react-native'
import FavoritesScreen from '../screens/FavoritesScreen';

const defaultStackNavOptions = {
  //headerMode: 'modal',
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? Color.primaryColor : ''
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Color.primaryColor
  }
}

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

}, defaultStackNavOptions)

const FavNavigatior = createStackNavigator({
  Favorites: FavoritesScreen,
  MealDetail: MealDetailScreen
}, defaultStackNavOptions)

const tabScreenConfig = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor} />
      },
      tabBarColor: Color.primaryColor // Change color of tab
    }
  },
  Favorites: {
    screen:FavNavigatior,
    navigationOptions: {
      tabBarLabel: 'Favorites!',
      tabBarIcon: (tabInfo) => {
        return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor} />
      },
      tabBarColor: Color.accentColor // Different color tab
    }
  }
}

const MealsFavTabNavigator = Platform.OS === 'android'
? createMaterialBottomTabNavigator(tabScreenConfig, {
  activeColor: 'white',
  shifting: false, // Nice animation tab transition and change color
  barStyle: {
    backgroundColor: Color.primaryColor // Set color bar style
  }
})
: createBottomTabNavigator(
  tabScreenConfig, {
  tabBarOptions: {
    activeTintColor: Color.accentColor
  }
})

export default createAppContainer(MealsFavTabNavigator)


