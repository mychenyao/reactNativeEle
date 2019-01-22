import React, {Component} from 'react'
import {View, Text, StyleSheet, Dimensions} from 'react-native'
import {connect} from 'react-redux'
const WIN_WIDTH = Dimensions.get('window').width
class Title extends Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
    }

    componentDidMount() {
    }

    render() {
        return (
            <View style={styles.title}>
                <Text style={{
                    fontSize: 18,
                    color: '#111'
                }}>{this.props.text}</Text>
                <View>
                    <Text style={{
                        color: '#42bd56',
                        fontSize: 16
                    }}>更多</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    title: {
        width: WIN_WIDTH,
        height: 24,
        paddingLeft: 20,
        alignItems: 'center',
        paddingRight: 20,
        justifyContent: 'space-between',
        flexDirection: 'row',
    }
})
const mapStateToProps = state => state
export default connect(mapStateToProps)(Title)