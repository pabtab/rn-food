import React from 'react'
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import HeaderButton from '../components/HeaderButton'
import { View, Text, StyleSheet } from 'react-native'

const FilterScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The Categories</Text>
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

FilterScreen.navigationOptions = (navData) => {
  return {
    headerTitle: 'Filter Meals',
    headerLeft: <HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item title="Menu" iconName="ios-menu" onPress={() =>{
        navData.navigation.toggleDrawer()
      }} />
    </HeaderButtons>
  }
}

export default FilterScreen
