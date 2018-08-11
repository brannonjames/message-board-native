import React from 'react';
import { View, Text, Button } from 'react-native';

const styles = {
  headerContainer: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',

  },
  button: {
    alignSelf: 'flexEnd'
  }
}

class Header extends React.Component {
  render(){
    return (
      <View style={styles.headerContainer}>
        <Text>{this.props.headerText}</Text>
        <Button 
          onPress={() => {}} 
          title="Menu" 
          style={styles.button}
        />
      </View>
    )
  }
}

export default Header;