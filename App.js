import React from 'react'
import { View, Text } from 'react-native'

import QRCodeScanner from 'react-native-qrcode-scanner'

export default class App extends React.Component {

    flick(id) {
        fetch(`http://192.168.1.43:3000/locks/${ id }`, {
            method: 'PUT'
        })
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <QRCodeScanner
                    fadeIn={ true }
                    showMarker={ true }
                    cameraProps={{ ratio: '1:1' }}
                    reactivate={ true }
                    reactivateTimeout={ 2000 }
                    onRead={ e => this.flick(e.data) }
                />
            </View>
        )
    }
}