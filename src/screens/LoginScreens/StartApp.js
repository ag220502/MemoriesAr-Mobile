import { StyleSheet, Text, View } from 'react-native'
import React,{useState} from 'react'
import FirstScreen from './FirstScreen';
import Welcome from './Welcome';
const StartApp = ({navigation}) => {
    const [isLoaded,setLoaded] = useState(false);
    setTimeout(()=>{
      setLoaded(true);
    },2000);
  return (
      <View style={styles.container}>
        {isLoaded ? <Welcome navigation={navigation}/>:<FirstScreen/>}
      </View>
    );
}

export default StartApp

const styles = StyleSheet.create({})