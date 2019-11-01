
import React ,{Component} from 'react';
import { View, Text, Picker, StyleSheet, ScrollView, ActivityIndicator } from 'react-native'
import { Button } from 'react-native-elements';



class VirtualSystemPatternScreen extends Component{

    static navigationOptions = ({ navigation }) => ({
        title:'Virtual System Patterns', 
      })

      state = {
        data: [{}],
        loading: true,
        }
        componentDidMount = () => {
        fetch('https://api.myjson.com/bins/y26zw', {
        method: 'GET'
        })
        .then((response) => response.json())
        .then((responseJson) => {
        // console.log(responseJson);
        this.setState({
        data: responseJson, loading: false 
        });
        })
        .catch((error) => {
        console.error(error);
        });
     
        // this.setState({loading: true});
     
        }

    render(){
        var list = []; 
   list = this.state.data;

   if(this.state.loading){

   return (<> 
   <View style={{marginTop: 200}}>
   <Text>Please wait while{"\n"}the Virtual System Patterns{"\n"}are loading      

   </Text>
   <ActivityIndicator size="large" color="#0000ff" /> 

   </View>
   </>);

   // this.setState({loading:false});
   }
   else{



    return (
    <>
    <ScrollView>
    <View>
 
    <Text style={{marginTop: 10}}>
 
    </Text>
    {console.log("balehbaleh!!")}
    {console.log(list)}
    {console.log(typeof(list))}
    {/* {list[0]['app_type']} */}
 
    {list.map(list => 
    <Text>
    Application ID:{"\t"}{list.app_id}{"\n"}
    Application Type:{"\t"}{list.app_type}{"\n"}
    Application Name:{"\t"}{list.app_name}{"\n"}
    Creator:{"\t"}{list.creator}{"\n"}
    _____________________________________
    </Text>
    )}
    {/* {list.map(list => <Text></Text>)}
    {list.map(list => <Text></Text>)}
    {list.map(list => <Text></Text>)} */}
 
    {/* <Text></Text> */}
 
    </View>
    </ScrollView>
    </>
    )
    }
    }
}

export default VirtualSystemPatternScreen;


