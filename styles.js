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
      marginTop: 10,
      marginLeft: 10,
      marginRight: 10,
      marginBottom: 10,
      ...Platform.select({
          ios: {paddingTop: 15},
          ios: {paddingLeft: 20},
          android: {paddingTop: StatusBar.currentHeight}, 
          android: {paddingLeft: StatusBar.currentHeight}, 
      })      
    },
    boxColumn: {
        height: 500,
        width: 250,
        borderWidth: 1,
        broderStyle: "dashed",        
        borderColor: "black",
        backgroundColor: "gray",
        justifyContent: 'space-around',
        alignItems: 'center',
        marginLeft: 30,
        marginTop: 80,             
    },
    boxRow: {
        height: 200,
        width: 800,
        borderWidth: 1,
        flexDirection: 'row',
        backgroundColor: "gray",
        justifyContent: 'space-around',
        broderStyle: "dashed",        
        alignItems: 'center',
        borderColor: "black",
    },
    box: {
        height: 100,
        width: 200,        
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'yellow',
        borderWidth: 1,
        broderStyle: "dashed",        
        borderColor: "black",
    },
    boxText: {
        color: 'blue',
        fontWeight: 'bold'
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    column: {
        flex: 1,
        flexDirection: 'column',        
        justifyContent: 'space-around',
        alignItems: 'flex-start'
    }
    }
  );

