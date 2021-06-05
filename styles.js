import {StyleSheet, Platform, StatusBar} from "react-native";

export default StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent : 'space-around',
      backgroundColor: 'ghostwhite',
      borderWidth: 3,
      borderColor: "black",
      alignItems: 'left',
      marginTop: 30,
      marginLeft: 575,
      marginRight: 575,
      marginBottom: 40,
      ...Platform.select({
          ios: {paddingTop: 15},
          ios: {paddingLeft: 20},
          android: {paddingTop: StatusBar.currentHeight}, 
          android: {paddingLeft: StatusBar.currentHeight}, 
      })      
    },
    boxColumn: {
        height: 500,
        width: 233,
        borderWidth: 3,
        broderStyle: "dashed",        
        borderColor: "black",
        backgroundColor: "ghostwhite",
        justifyContent: 'space-around',
        alignItems: 'center',
        marginLeft: 30,
        marginTop: 130,        
    },
    boxColumnText: {
        color: 'black',
        fontWeight: 'bold',
        position: 'relative',
        top: 15,
        right: 55,
        fontSize: 26,
    },
    boxRow: {
        height: 210,
        width: 700,
        borderWidth: 3,
        flexDirection: 'row',
        backgroundColor: "ghostwhite",
        justifyContent: 'space-around',
        broderStyle: "solid",        
        alignItems: 'center',
        borderColor: "black",
        marginBottom: 20,        
    },
    boxRowText: {
        color: 'black',
        fontWeight: 'bold',
        position: 'absolute',
        top: 15,
        left: 10,        
        fontSize: 26,
    },
    box: {
        height: 100,
        width: 200,        
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'gray',
        borderWidth: 3,
        broderStyle: "solid",        
        borderColor: "black",        
    },
    boxText: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 26,
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-end',
    },
    column: {
        flex: 1,
        flexDirection: 'column',        
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        textAlignVertical: 'top'
    },
    
    }
  );

