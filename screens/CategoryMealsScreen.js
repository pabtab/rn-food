import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { CATEGORIES } from '../data/dummy-data'

const CategoryMealsScreen = (props) => {
  const categoryId = props.navigation.getParam('categoryId')
  
  const selectedCategory = CATEGORIES.find(cat => cat.id === categoryId)

  return (
    <View style={styles.screen}>
      <Text>The Category meals screen</Text>
      <Text>{selectedCategory.title}</Text>
      <Button 
        title="Go To Meal Detail"
        onPress={() => {
          props.navigation.navigate('MealDetail')
        }}
      />
      <Button 
        title="Go Back"
        onPress={() => {
          props.navigation.goBack(); // .pop()
        }}
      />
      <Button
        title="Go Back to top"
        onPress={() => {
          props.navigation.popToTop(); // goback to root screen
        }}
      />
    </View>
  )
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
    alignItems: 'center'
  }
})

export default CategoryMealsScreen
