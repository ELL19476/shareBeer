import React from 'react';
import { FlatList, StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';
import Place from '~/assets/place.svg'

class Requests extends React.Component {
    constructor (props) {
      super(props);
      const { navigation } = this.props;
      this.navigation = navigation;
    }

    onPress = (item) => {
      this.navigation.navigate("Home", {item: item});
    }
    renderRequestItem = (item) =>
    {
      const obj = item.item
      return(
        <TouchableHighlight underlayColor="#465B68" style={styles.itemContainer} onPress={() => {this.onPress(obj)}}>
          <View style={styles.item}>
            <Image 
              style={styles.userImage}
              source={require('~/assets/default-user.jpg')}
            />
            <View>
              <Text style={styles.itemHeader}>{obj.title}</Text>
              <View style={styles.inline}>
                <Text style={[styles.text, styles.bold]}>{obj.product + ': '}</Text>
                <Text style={styles.text}>{obj.desc}</Text>
              </View>
            </View>
            <View style={[styles.pill, styles.red]}>
              <Text style={styles.pillText}>3km </Text>
              <Place style={styles.pillIcon} />
            </View>
          </View>
        </TouchableHighlight>
      );
    }
    render() {
      let data = [
        {title: 'Samuel Ellmauer', product: '4L Bier', desc: 'hell'},
        {title: 'Felix Kaspar', product: '4L Bier', desc: 'hell'}, 
        {title: 'Felix Kaspar', product: '4L Bier', desc: 'hell'}, 
        {title: 'Felix Kaspar', product: '4L Bier', desc: 'hell'}, 
        {title: 'Felix Kaspar', product: '4L Bier', desc: 'hell'}, 
        {title: 'Felix Kaspar', product: '4L Bier', desc: 'hell'}, 
        {title: 'Felix Kaspar', product: '4L Bier', desc: 'hell'}, 
        {title: 'Felix Kaspar', product: '4L Bier', desc: 'hell'}, 
      ];
      
      return (
        <View style={styles.container}>
          <FlatList
            data={data}
            ItemSeparatorComponent = { Seperator }
            renderItem={this.renderRequestItem}
            keyExtractor={(_, index) => index.toString()}
          />
        </View>
      );
    }
}

const Seperator = () => {
  return (
    <View
      style={styles.seperator}
    />
  );
}

export default Requests

const styles = StyleSheet.create({
  container: {
   flex: 1,
   backgroundColor: '#242628'
  },
  inline: {
    flexDirection: 'row',
  },  
  itemContainer: {
    padding: 10,
    marginVertical: 15,
    marginHorizontal: 10, 
    fontSize: 18,
    backgroundColor: '#2A2F34',
    color: '#C3C3C3',
    fontFamily: 'Roboto',
    borderRadius: 12,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },  
  itemHeader: {
    fontSize: 24,
    color: '#C3C3C3',
    fontWeight: 'bold',
    textTransform: 'uppercase'
  },
  text: {
    color: '#C3C3C3'
  },
  bold: {
    fontWeight: 'bold'
  },
  seperator: {
    backgroundColor: '#465B68',
    height: 1.5,
    marginHorizontal: 10
  },
  userImage: {
    borderRadius: 45,
    width: 45,
    height: 45,
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    alignSelf: 'center',
    marginRight: 10
  },
  pill: {
    flexDirection: 'row',
    marginLeft: 'auto',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 50,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 5
  },
  pillText: {
    padding: 0,
    margin: 0,
    color: '#242628',
    fontSize: 24,
    fontWeight: 'bold',
  },
  red: {
    backgroundColor: '#D14F1C'
  },
  pillIcon: {
    alignSelf: 'center',
    height: 100,
    width: 100
  }
});