import { StyleSheet } from 'react-native';

export const styles= StyleSheet.create({
    image:{
       flex:1,
       borderRadius:18,

    },
    view:{
        width:300,
        height:420,
        
    },
    image_container:{
        flex:1,
        borderRadius:18,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 6,
        
        elevation: 10,

    }
})

