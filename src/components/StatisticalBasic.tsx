import React, { Component } from 'react'
import { View, Text, Image } from "react-native";
import myStyle from "../style"
import * as color from '../Color'

export default class StatisticalBasic extends Component <props, state>{
    constructor(props : any ){
        super(props)
        this.state = {
            
        }
    }
    render() {


        return (
            <View style={[myStyle.statisticalBasic, myStyle.row]}>
                <View style={[, myStyle.frImgStatisticalBasic]}>
                    <Image
                        source={require("../icons/icons8_average_2_75px.png")}
                        style={[myStyle.imgStatisticalBasic]}
                    />
                </View>
                <View style={[]}>
                    <View style={[,myStyle.flex3, myStyle.contentStatisticalBasic]}>
                        <Text style={[{color : color.inactive, fontSize : 10}]}>{this.props.content}</Text>
                    </View>
                    <View style={[myStyle.flex3, myStyle.contentStatisticalBasic]}>
                        <Text style={[myStyle.colorWhite]}>{this.props.money} COIN</Text>
                    </View>

                </View>
            </View>
        )
    }
}

type props = {
    img : string
    money : number,
    content : string
}
type state = {
    
}