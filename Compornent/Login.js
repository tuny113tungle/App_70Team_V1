import React, { Component } from 'react'
import { Text, View, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

export default class Login extends Component {
//Ham dang nhap
    DangNhap=()=>
    {
        var InsertAPIURL="http://192.168.1.7:8080/api/login";

        var headers={
            'Accept': 'application/json',
            'Content-Type':'application.json'
        };

        var Data={
            username: 'this.state.',


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
   
    render() {
        const { navigation } = this.props
        return (
            <View style={styles.partLogin1}>
                <View style={styles.partLogin2}>
                    <View style={styles.partLogin}>
                        <TouchableOpacity
                        >
                            <AntDesign name="user" size={24} color="black"
                                style={styles.iconSearch}
                            />

                        </TouchableOpacity>

                        <TextInput
                            /* truyen gia tri cua task vao cho nut + */

                            placeholder='Nhập vào mã số sinh viên của bạn ?'
                            onChangeText={onChangeText}
                            value={text}
                            style={styles.input} />

                    </View>
                    <View style={styles.partLogin}>
                        <TouchableOpacity
                        >
                            <AntDesign name="search1" size={24} color="black"
                                style={styles.iconSearch}
                            />

                        </TouchableOpacity>

                        <TextInput
                            /* truyen gia tri cua task vao cho nut + */

                            placeholder='Nhập mật khẩu của bạn ?'
                            style={styles.input} />

                    </View>

                    <TouchableOpacity
                        onPress={() => { DangNhap() }}

                    >
                        <View style={styles.btnAdd}
                        >
                            <Text style={styles.txtct1}>Login</Text>
                        </View>




                    </TouchableOpacity>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    partLogin1: {
        flex: 1,
        backgroundColor: '#f0fff0',
    },
    partLogin: {
        paddingHorizontal: 30,
        width: '100%',
        flexDirection: 'row',
        marginBottom: 7,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 0,
    },
    partLogin2: {
        marginTop: '40%',
    },
    iconSearch: {
        marginTop: 10,
    },
    input: {
        height: 44,
        width: '90%',
        backgroundColor: '#fff',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#d8bfd8',
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginTop: 1,

    },
    input1: {
        height: 44,
        width: '50%',
        backgroundColor: '#fff',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#d8bfd8',
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginLeft: 70,
    },
    btnAdd: {

        width: '60%',
        height: 40,
        backgroundColor: '#87ceeb',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        borderWidth: 0.5,
        marginTop: 19,
        marginRight: 60,
        marginLeft: 70,


    },
    txtct1: {
        fontWeight: '500',
        fontSize: 18,
    },



});
