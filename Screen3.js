import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Dimensions,
  ScrollView } from "react-native";
import {
    Card,
    Header, 
    ListItem,
    Button
  } from 'react-native-elements';
  import { 
    Col,
    Grid 
  } from "react-native-easy-grid";
  import { HeaderBackButton } from 'react-navigation-stack';
  import PureChart from 'react-native-pure-chart';
  import Icon from 'react-native-vector-icons/FontAwesome';

class Screen3 extends React.Component { 
//   static navigationOptions = {  
//     title: 'Monitor',  
// };   
static navigationOptions = ({ navigation }) => ({
    headerLeft: <HeaderBackButton onPress={() => navigation.goBack(null)} />,
  })
    render() {  

      var { height } = Dimensions.get('window');
 
var box_count = 2;
var box_height = height / box_count;

let sampleData = [
  {x: '11:09 PM', y: 30},
  {x: '11:09 PM', y: 30},
  {x: '11:10 PM', y: 30},
  {x: '11:11 PM', y: 30},
  {x: '11:11 PM', y: 30}
]

let sampleDataProcessor = [
  {x: '11:09 PM', y: 2},
  {x: '11:09 PM', y: 1},
  {x: '11:10 PM', y: 2},
  {x: '11:11 PM', y: 1},
  {x: '11:11 PM', y: 0}
]

        return (  
            // <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>  
            //     <Text>You are currently viewing Screen 3!</Text>  

    <View style={{flex: 1}}>

    <Header
    statusBarProps={{ barStyle: 'light-content' }}
    barStyle="light-content" // or directly
    leftComponent={{ text: 'Monitoring', style: { color: '#fff'}}}
    rightComponent={{ icon: 'home', color: '#fff' }}
    containerStyle={{
    backgroundColor: '#14152b',
    justifyContent: 'space-around',
    }}

    />

<View style={styles.container}>
    <View style={[styles.box, styles.box1]}>
    <Text style={{padding:10}}>Virtual Machine Monitoring</Text>
    <View>
      <Grid>
      <Col >
        <Text style={{marginLeft:10,textAlign:'center'}}>OS_Node.11568604332864</Text>
    </Col>
    <Col style={{ width: 100 }}>
    <Icon name="play" size={20} color="#32CD32" />
    </Col>
      </Grid>
    </View>
    </View>
    <View style={[styles.box, styles.box2]}>
    
    <ScrollView>
      <Card
      title='Memory'>
        <PureChart data={sampleData} type='line' />
      </Card>

      <Card
      title='Procesor'>
        <PureChart data={sampleDataProcessor} type='line' />
      </Card>

      <Card
      title='Storage(Root)'>
        <PureChart data={sampleData} type='line' />
      </Card>
      
    </ScrollView>

    </View>
    
  </View>
    


  </View>

  );

            

    
    }  
}  


const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column'
    },
    box: {
    //   height: box_height
    },
    box1: {
      flex :2,
      // backgroundColor: '#cfccc8'
    },
    box2: {
      flex : 10,
      backgroundColor: '#f0efed'
    }
  });

export default Screen3;