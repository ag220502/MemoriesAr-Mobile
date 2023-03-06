import { StyleSheet, Text, View,Dimensions,Animated } from 'react-native'
import React, { useRef } from 'react'
import {Portal} from 'react-native-paper'
import {PanGestureHandler} from 'react-native-gesture-handler'
const BottomModalSheet = ({show,onDismiss}) => {
    const height = Dimensions.get('window').height * 0.5
    const width = Dimensions.get('window').width
    const [open,setOpen] = React.useState(show)
    
    const bottomSheet = useRef(new Animated.Value(-height)).current
    const onGesture = (event)=>{
        if(event.nativeEvent.translationY > 0){
            bottomSheet.setValue(-event.nativeEvent.translationY)
        }
    }
    const onGestureEnd = (event)=>{
        if(event.nativeEvent.translationY > 0){
            if(event.nativeEvent.translationY > height/2){
                onDismiss()
                setOpen(false)
            }else{
                bottomSheet.setValue(0)
                
            }
        }

        console.log(event.nativeEvent)
    }

    React.useEffect(()=>{
        if(show){
            setOpen(show)
            Animated.timing(bottomSheet,{
                toValue:0,
                duration:300,
                useNativeDriver:false
            }).start()
        }else{
            Animated.timing(bottomSheet,{
                toValue:-height,
                duration:300,
                useNativeDriver:false
            }).start(()=>{
                setOpen(false)
            })
        }
    },[show])



    if(!open){
        return null
    }

    return (
        <Portal>
            <Animated.View style={[styles.root,{height:height,bottom:bottomSheet}]}>
                <PanGestureHandler onGestureEvent={onGesture} onGestureEnd={onGestureEnd}>
                    <View>
                        <Text>Bottom Modal</Text>
                    </View>
                </PanGestureHandler>
            </Animated.View>
        </Portal>
    )
}

export default BottomModalSheet

const styles = StyleSheet.create({
    root:{
        position:'absolute',
        left:0,
        right:0,
        zIndex:100,
        backgroundColor:'white',
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        backgroundColor:'red',
        shadowColor: "#000",

    }
})