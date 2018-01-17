import React, { Component } from 'react';
import { requireNativeComponent } from 'react-native';
import PropTypes from 'prop-types'

const barcodeTeypesArray = [
 ["CODE_128", 0x0001],
 ["CODE_39", 0x0002],
 ["CODE_93", 0x0004],
 ["CODEBAR", 0x0008],
 ["DATA_MATRIX", 0x0010],
 ["EAN_13", 0x0020],
 ["EAN_8", 0x0040],
 ["ITF", 0x0080],
 ["QR_CODE", 0x0100],
 ["UPC_A", 0x0200],
 ["UPC_E", 0x0400],
 ["PDF417", 0x0800],
 ["AZTEC", 0x1000]
];

class BarcodeScanner extends Component {
  _onBarcodeRead = (event) => {

    if (!this.props.onBarcodeRead) {
      return;
    }

    this.props.onBarcodeRead({data: event.nativeEvent.data, type: event.nativeEvent.type});
  }

  render() {
    return <NativeBarcodeScanner 
      {...this.props}
      onBarcodeRead = {this._onBarcodeRead}
    />
  }
}

BarcodeScanner.propTypes = {
  onBarcodeRead: PropTypes.func,
  barcodeType: PropTypes.number
};

const NativeBarcodeScanner = requireNativeComponent('BarcodeScannerView', BarcodeScanner);

export default BarcodeScanner;
