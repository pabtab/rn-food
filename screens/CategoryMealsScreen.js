import React from 'react'
import { View, Text, StyleSheet, Button, FlatList } from 'react-native'
import { CATEGORIES, MEALS } from '../data/dummy-data'
import MealItem from '../components/MealItem'

const CategoryMealsScreen = (props) => {
  const categoryId = props.navigation.getParam('categoryId')
  
  
  const displayed = MEALS.filter(
    meal => meal.categoryId.indexOf(categoryId) >= 0
  );

  const renderMealItem = (itemData) => {
    console.log(itemData)
    return (
      <MealItem 
        onSelectMeal={() => {
          props.navigation.navigate({ routeName: 'MealDetail', params: {
            mealId: itemData.item.id
          }})
        }}
        duration={itemData.item.duration}
        title={itemData.item.title}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        image={itemData.item.imageUrl}
      />
    )
  }

  return (
    <View style={styles.screen}>
      <FlatList 
        data={displayed}
        keyExtractor={(item, index) => item.id}
        renderItem={renderMealItem}
        style={{width: '100%'}}
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
    alignItems: 'center',
    padding: 10
  }
})

export default CategoryMealsScreen
