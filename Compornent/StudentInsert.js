import React, { Component } from 'react'
import { Button, Text, View, StyleSheet } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

export default class StudentInsert extends Component {
    constructor(props){
        super(props)
        this.state={RollNo:'',StudentName:'',Course:''};

    }

    InsertRecord=()=>
    {
        var RollNo=this.state.RollNo;
        var StudentName=this.state.StudentName;
        var Course=this.state.Course;

        if(RollNo.length ==0 || StudentName.length == 0 || Course.length == 0)
        {
            alert("Required field is missing");

        }
        else
        {
            var InsertAPIURL="http://10.0.2.2:80/DemoWebservices/KhoaHocAll.php";

            var headers={
                'Accept': 'application/json',
                'Content-Type':'application.json'
            };

            var Data={
                RollNo:RollNo,
                StudentName:StudentName,
                Course:Course,

            };

            fetch(InsertAPIURL,
                
                {
                    method:'POST',
                    headers:headers,
                    body: JSON.stringify(Data)

                })
                .then((response)=>response.json())
                .then((response)=>
                {
                    alert(response[0].Message);
                }
                )
                .catch((error)=>
                {
                    alert("Error"+error);
                })
        }

    }
    render() {
        return (
            <View style={styles.studentInsertView}>
                <View style={styles.partRollNo}>
                    <TextInput
                        placeholder={"RollNo"}
                        placeholderTextColor={"#FF0000"}
                        keyboardType={"numeric"}
                        style={styles.tipRollNo}
                        onChangeText={RollNo=>this.setState({RollNo})}
                    />
                </View>

                <View style={styles.partRollNo}>
                    <TextInput
                        placeholder={"StudentName"}
                        placeholderTextColor={"#FF0000"}
                        style={styles.tipRollNo}
                        onChangeText={StudentName=>this.setState({StudentName})}
                    />
                </View>
                <View style={styles.partRollNo}>
                    <TextInput
                        placeholder={"Course"}
                        placeholderTextColor={"#FF0000"}
                        style={styles.tipRollNo}
                        onChangeText={Course=>this.setState({Course})}
                    />
                </View>
                <View style={styles.partbtn}>
                    <Button title={"Save Record"}
                       onPress={this.InsertRecord} 
                    >
                    </Button>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    studentInsertView: {
        flex: 1,
    },
    partRollNo: {
        marginTop:20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:30,
        borderWidth:1,
       
    },
    partbtn:{
        marginTop:20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    tipRollNo: {

    },
   
})
