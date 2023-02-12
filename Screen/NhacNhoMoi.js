import React, { Component } from 'react'
import { Text, StyleSheet, View, Button, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';


export default class NhacNhoMoi extends Component {
    // Chọn giá trị mặc định picker phần thông báo nhắc nhở

    render() {
        // neu la class component thi can phai su dung this.props
        const { navigation } = this.props
        return (
            <ScrollView>


                <View style={styles.FrameTrangChu}>
                    <View style={styles.TopTaskTC}>



                        <Image source={require('../assets/logo.png')}
                            style={styles.logo}
                        />

                        <TouchableOpacity>
                            <AntDesign name="downcircleo" size={24} color="black"
                                style={styles.CaretDown}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <AntDesign name="bars" size={24} color="black"
                                style={styles.bars}
                            />
                        </TouchableOpacity>


                    </View>

                    <View style={styles.ThongTinSV}>
                        <Text style={styles.txtThongTinSV}>Ghi chú nhắc nhở</Text>

                        <Text style={styles.txtNhacNho}>
                            Lọc bảng tin
                        </Text>
                        <View style={styles.pickerGhiChuNN}>
                            <Picker >
                                <Picker.Item label="Tất cả" value='1'></Picker.Item>
                                <Picker.Item label="Mới & Chưa xem" value='2'></Picker.Item>
                                <Picker.Item label="Hết hạn " value='3'></Picker.Item>
                            </Picker>
                        </View>


                        <Text style={styles.lineHozital}>
                            ____________________________________________________________________
                        </Text>
                        <Text style={styles.txtNhacNho}>
                            Không tìm thấy thông tin nhắc nhở
                        </Text>

                    </View>



                </View>
            </ScrollView >
        )
    }
}

const styles = StyleSheet.create({
    FrameTrangChu: {
        flex: 1,
        backgroundColor: '#fffafa',
    },
    TopTaskTC: {
        paddingHorizontal: 30,
        height: 70,
        flexDirection: 'row',
        marginBottom: 13,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 1,
        borderRadius: 10,
        backgroundColor: '#ffff'
    },
    CaretDown: {
        marginLeft: 120,
    },
    bars: {
        marginLeft: 13,
    },
    logo: {
        width: 170,
        height: 50,
    },
    ThongTinSV: {
        height: 400,
        marginHorizontal: 10,
        backgroundColor: '#ffff',
        borderRadius: 10,
        borderWidth: 0.3,
    },
    txtThongTinSV: {
        fontStyle: 'normal',
        fontSize: 20,
        fontWeight: '500',
        marginTop: 15,
        marginLeft: 10,
    },
    lineHozital: {
        marginHorizontal: 10,
        fontWeight: '200',
    },
    avatar: {
        height: 100,
        width: 100,
        borderRadius: 50,
        marginHorizontal: 130,
    },
    XemChiTiet: {
        color: '#4169e1',
        fontSize: 16,
        marginHorizontal: 142,
        marginBottom: 22,
    },
    titThongTinSV: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',

    },
    cot1TTSV: {
        marginRight: 60,
        marginLeft: 20,
    },
    cot2TTSV: {

    },
    txtTTSV: {
        marginBottom: 21,
    },
    partThongBaoNhacNho: {
        height: 110,
        marginHorizontal: 10,
        backgroundColor: '#ffff',
        borderRadius: 10,
        marginTop: 20,
        borderWidth: 0.3,
    },
    txtNhacNho: {
        fontSize: 15,
        fontWeight: '500',
        marginLeft: 20,
        marginTop: 20,
    },
    soLuongTB: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 20,
    },
    nbsoTB: {
        fontWeight: '500',
        fontSize: 40,
    },
    xemChiTietTB: {
        color: '#4169e1',
        fontSize: 16,
        marginLeft: 20,
    },
    partLichHocAndThi: {
        height: 110,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fffafa',
        marginTop: 20,
    },
    partLichHocTrongTuan: {
        flex: 1,
        height: 110,
        marginHorizontal: 10,
        backgroundColor: '#e0ffff',
        borderRadius: 20,
        borderWidth: 0.3,
    },
    partLichThiTrongTuan: {
        flex: 1,
        height: 110,
        marginHorizontal: 10,
        backgroundColor: '#fafad2',
        borderRadius: 20,
        borderWidth: 0.3,
    },
    txtLHTT: {
        marginTop: 10,
        marginLeft: 20,
        color: '#00bfff',
        fontWeight: '400',
    },
    SoLHTT: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    txtSoLHTT: {
        marginLeft: 20,
        fontSize: 40,
    },
    calendar: {
        marginLeft: 81,
        marginTop: 7,
    },
    XemChiTietLHTT: {
        marginLeft: 20,
        marginTop: 5,
        color: '#00bfff',
    },
    txtLTTT: {
        marginTop: 10,
        marginLeft: 20,
        color: '#ffa500',
        fontWeight: '400',
    },
    SoLTTT: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    txtSoLTTT: {
        marginLeft: 20,
        fontSize: 40,
    },
    XemChiTietLTTT: {
        marginLeft: 20,
        marginTop: 5,
        color: '#ffa500',
    },
    partChucNangSinhVien: {
        height: 110,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fffafa',
        marginTop: 20,
    },
    partCot1: {
        flex: 1,
        height: 100,
        marginHorizontal: 5,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        borderWidth: 0.3,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 18,
    },
    partCot2: {
        flex: 1,
        height: 100,
        marginHorizontal: 5,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        borderWidth: 0.3,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 18,
    },
    calendar2: {
        marginBottom: 5,
    },
    txtCot1: {
        fontSize: 14,
        fontWeight: '400',
    },
    partTienDoHocTap: {
        height: 380,
        marginHorizontal: 10,
        backgroundColor: '#ffff',
        borderRadius: 10,
        borderWidth: 0.3,
    },
    imgTiendo: {
        marginTop: 20,
        marginLeft: 80,
        width: 210,
        height: 250,
    },
    partLopHocPhan: {
        height: 380,
        marginHorizontal: 10,
        backgroundColor: '#ffff',
        borderRadius: 10,
        borderWidth: 0.3,
    },
    titleLopHocPhan: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    chonHK: {
        width: 150,
        height: 30,
        borderWidth: 0.3,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 70,
        marginTop: 25,
    },
    txtLopHocPhan: {
        fontSize: 14,

    },
    // phần style this class
    pickerGhiChuNN: {
        borderRadius: 5,
        borderWidth: 0.3,
        height: 35,
        padding: 0,
        width:330,
        marginTop:15,
        marginLeft:20,
        justifyContent:'center',
        backgroundColor: "#FFF",
    },


});
