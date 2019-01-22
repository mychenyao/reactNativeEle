import React, {Component} from 'react'
import {View, Text, StyleSheet, Animated} from 'react-native'
import {connect} from 'react-redux'

class Animations extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fadeAnim: new Animated.Value(0)  //透明初始值为0
        }
    }
    componentWillMount() {
    }
    componentDidMount() {
        Animated.timing(                    // 随时间变化而执行的动画类型
            this.state.fadeAnim,            // 动画中的变量值
            {
                duration: 2000,
                toValue: 1                  // 透明度最终为1， 即完全不透明
            }
        ).start()                           // 开始执行动画
    }
    render() {
        const AnimatedView = Animated.View
        return (
            <View>
                <Text>
                    Animated
                </Text>
                <AnimatedView
                    style={{
                        width: 250,
                        height: 50,
                        backgroundColor: 'pink',
                        opacity: this.state.fadeAnim
                    }}
                >
                    <Text>
                        hellow Animated
                    </Text>
                </AnimatedView>
            </View>
        );
    }
}

const styles = StyleSheet.create({})
const mapStateToProps = state => state
export default connect(mapStateToProps)(Animations)