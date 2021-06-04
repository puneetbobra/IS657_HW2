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
      marginTop: 40,
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
        width: 300,
        borderWidth: 1,
        broderStyle: "dashed",        
        borderColor: "black",
        backgroundColor: "gray",
        justifyContent: 'space-around',
        alignItems: 'center',
        marginLeft: 30,
        marginTop: 130,        
    },
    boxColumnText: {
        color: 'black',
        fontWeight: 'bold',
        position: 'absolute',
        top: 15,
        left: 10,
        fontSize: 24,
    },
    boxRow: {
        height: 200,
        width: 700,
        borderWidth: 1,
        flexDirection: 'row',
        backgroundColor: "gray",
        justifyContent: 'space-around',
        broderStyle: "dashed",        
        alignItems: 'center',
        borderColor: "black",
        marginBottom: 20,        
    },
    boxRowText: {
        color: 'black',
        fontWeight: 'bold',
        position: 'absolute',
        top: 10,
        left: 10,
        fontSize: 24,
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
        fontWeight: 'bold',
        fontSize: 24,
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

