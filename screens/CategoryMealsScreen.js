import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const CategoryMealsScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The Category meals screen</Text>
      <Button 
        title="Go To Meal Detail"
        onPress={() => {
          props.navigation.navigate('MealDetail')
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default CategoryMealsScreen
