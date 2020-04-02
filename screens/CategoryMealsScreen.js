import React from 'react'
import { View, Text, StyleSheet, Button, FlatList } from 'react-native'
import { CATEGORIES, MEALS } from '../data/dummy-data'
import MealItem from '../components/MealItem'
import MealList from '../components/MealList'

const CategoryMealsScreen = (props) => {
  const categoryId = props.navigation.getParam('categoryId')
  
  
  const displayed = MEALS.filter(
    meal => meal.categoryId.indexOf(categoryId) >= 0
  );

  return <MealList listData={displayed} navigation={props.navigation}/>
}

CategoryMealsScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam('categoryId');

  const selectedCategory = CATEGORIES.find(cat => cat.id === catId)

  return {
    headerTitle: selectedCategory.title,
  }
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  }
})

export default CategoryMealsScreen
