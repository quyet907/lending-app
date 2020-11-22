import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import myStyle from "../../style";
import * as color from "../../Color";
import { BidProduct } from "@StockAfiCore/model/bid/BidProduct";
import { BidService } from "../../services/BidService";
import { MyFormat } from "../../Helper/MyFormat";
import moment from "moment";

export default class ProductBidHistory extends Component<Props, state> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={[myStyle.productBid]}>
        <View>
          <View style={[myStyle.frImgAndPrice]}>
            <View style={[myStyle.frImgProdcurBid]}>
              <Image
                style={[myStyle.imgProductBid]}
                source={{
                  uri: `${BidService.getImgFirtBidProduct(
                    this.props.bidProduct
                  )}`,
                }}
              />
            </View>
            <View style={[myStyle.frPriceAndTime]}>
              <View style={[myStyle.frStatusAndTime]}>
                <View>
                  <Text style={[myStyle.timeProductBid,{padding:10, fontWeight:"400"}]}>
                    Kết thúc: {" "} 
                    {moment(this.props.bidProduct.latestBidAt).format(
                      "HH:mm DD/MM/yyyy"
                    )}
                  </Text>
                </View>
              </View>
              {/* <View>
                <Text style={[myStyle.priceProductBid]}>
                  {MyFormat.roundingMoney(
                    BidService.getPriceBidProduct(this.props.bidProduct)
                  )}{" "}
                  xu
                </Text>
              </View> */}
            </View>
          </View>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View style={[myStyle.frNameandDetailProductBid, { flex: 2 }]}>
            <Text style={[myStyle.nameProductBid]}>
              {BidService.getNameBidProduct(this.props.bidProduct)}
            </Text>
            <Text
              style={{ color: color.inactive, textTransform: "capitalize" }}
            >
              {BidService.getNameUserWin(this.props.bidProduct)}
            </Text>
          </View>
          <View style={[{ flex: 1 }]}>
            <Text style={[{ color: color.primary }]}>
              {this.props.bidProduct.stepPrice} xu/lượt
            </Text>
          </View>
        </View>
      </View>
    );
  }
}
type Props = {
  bidProduct: BidProduct;
};
type state = {};
