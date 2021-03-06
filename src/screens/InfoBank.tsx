import * as React from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View, Image, ImageBackground, TouchableOpacity, Platform } from 'react-native';
import * as Color from '../Color'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import myStyle from '../style'
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import { uploadService } from '../services/UploadService';
import { BankUser } from '@StockAfiCore/model/user/BankUser';
import { UserService } from '../services/UserService';
import * as actionPopup from "../Action/ActionPopup";
import I18n from '../i18n/i18n';

export default class InfoBank extends React.Component<Props, State> {
    constructor(props: any) {
        super(props)
        this.state = {
            nameBank: "",
            codeBank: "",
            branchBank: "",
            infoBank: {}
        }
    }

    // userId = this.props.route.params.phoneNumber;

    componentDidMount() {
        this.getInfoBank()

    }

    async getInfoBank() {
        let infoBank: BankUser[] = await UserService.getInfoBank();
        console.log(infoBank);
        if (infoBank.length > 0) {
            this.setState({ infoBank: infoBank[0] })
        }
    }

    async updateInfoBank() {
        UserService.updateInfoBank(this.state.infoBank).then((infoBank: BankUser) => {
            if (infoBank) {
                actionPopup.showMessage(I18n.t('success.updateProfile'))
                this.setState({ infoBank: infoBank })
            }
        })
    }




    render() {
        return (
            <View style={{ backgroundColor: Color.background_primary, flex: 1, alignItems: 'center', justifyContent: "center" }}>
                {/* <View style={{ height: 170, display: 'flex', justifyContent: 'center', position: 'relative' }}>


                </View> */}

                <View style={{ marginTop: 70, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: '#fff', fontSize: 20, fontWeight: '600', textTransform: 'uppercase' }}>{I18n.t('screens.bankInfo.bankInfoTitle')}</Text>
                </View>

                <View style={{ marginTop: 30, paddingHorizontal: 27 }}>
                    <View style={styles.info}>
                        <View>
                            <Text style={styles.title}>{I18n.t('screens.bankInfo.bankNameLabel')}</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <TextInput
                                style={styles.input}
                                onChangeText={(text) => {
                                    console.log(this.state.infoBank)
                                    this.setState({ infoBank: { ...this.state.infoBank, bankName: text } })
                                }}
                                value={this.state.infoBank.bankName}
                                maxLength={35}
                                placeholder={I18n.t('screens.bankInfo.bankNamePlaceHolder')}
                            />
                        </View>
                    </View>



                    <View style={styles.info}>
                        <View>
                            <Text style={styles.title}>{I18n.t('screens.bankInfo.bankNumberLabel')}</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <TextInput
                                style={styles.input}
                                onChangeText={(text: any) => {
                                    if (!isNaN(text)) {
                                        this.setState({ infoBank: { ...this.state.infoBank, bankCode: text } })
                                    }
                                }}
                                value={this.state.infoBank.bankCode}
                                maxLength={35}
                                placeholder={I18n.t('screens.bankInfo.bankNumberPlaceHolder')}
                            />
                        </View>
                    </View>

                    <View style={styles.info}>
                        <View>
                            <Text style={styles.title}>{I18n.t('screens.bankInfo.bankBranchLabel')}</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <TextInput
                                style={styles.input}
                                onChangeText={(text: any) => {
                                    this.setState({ infoBank: { ...this.state.infoBank, bankBrand: text } })
                                }}
                                value={this.state.infoBank.bankBrand}
                                maxLength={35}
                                placeholder={I18n.t('screens.bankInfo.bankBranchPlaceHolder')}
                            />
                        </View>
                    </View>


                </View>


                <View style={{ paddingHorizontal: 25, marginTop: 10, marginBottom: 50 }}>

                    <View style={[myStyle.frbuttonLogin]}>
                        <TouchableOpacity
                            style={[myStyle.buttonLogin]}
                            activeOpacity={0.7}
                            onPress={(event) => {
                                this.updateInfoBank()
                            }}
                        >
                            <Text style={[myStyle.textButton]}>{I18n.t('screens.editProfile.updateButton')}</Text>
                        </TouchableOpacity>
                    </View>
                </View>





            </View>

        )
    }

}

type Props = {
    route: any;
}

type State = {
    nameBank: string,
    codeBank: string,
    branchBank: string,
    infoBank: BankUser
}

const styles = StyleSheet.create({
    tinyLogo: {
        width: 130,
        height: 130,
        borderRadius: 65,
        borderWidth: 5,
        borderColor: Color.background_primary

    },
    idCard: {
        width: 20,
        height: 30,

        // borderWidth: 5,
        // borderColor: Color.background_primary

    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        alignItems: 'center'
    },
    imageIdCard: {
        flex: 1,
        resizeMode: "contain",
        justifyContent: "center",
        alignItems: 'center'
    },
    input: {
        padding: 0,
        paddingLeft: 30,
        outlineWidth: 0,
        textAlign: 'right',
        flex: 1,
        fontSize: 16,
        color: '#fff'
    },
    info: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingVertical: 20,
        borderBottomColor: 'rgba(153,153,153, 0.4)  ',
        borderBottomWidth: 1
    },
    title: {
        textTransform: 'uppercase',
        color: '#999',
        fontSize: 16,
        flex: 1
    }
})


