import React, {Component} from 'react'
import {View, Text, StyleSheet, Dimensions, ScrollView} from 'react-native'
import { connect } from 'react-redux'

import Title from '../components/Title'
import MovieItem from '../components/movieItem'
class Movie extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dataList: {
                theatersList: [],
                top: []
            }
        }
    }
    componentWillMount() {
        this.$http.get('/v2/movie/in_theaters?city=广州&start=0&count=10').then(res => {
            const {subjects} = res.data
            this.state.dataList.theatersList = subjects
            this.setState({dataList: this.state.dataList})
        })
        this.$http.get('/v2/movie/top250?start=0&count=10').then(res => {
            const {subjects} = res.data
            this.state.dataList.top = subjects
            this.setState({dataList: this.state.dataList})
        })
    }
    componentDidMount() {}

    MovieList (title, theatersList) {
        return  (<View style={styles.movie_container}>
            <Title text={title}/>
            <ScrollView horizontal={true}>
                <View style={styles.movie_list}>
                    {
                        theatersList.map((v,i) =>
                            <MovieItem item={v} key={i} />
                        )
                    }
                </View>
            </ScrollView>
        </View>)
    }

    render() {
        const {discoverMovie} = this.props
        return (
                <ScrollView>
                    <View>
                        {
                            this.MovieList('影院热映', this.state.dataList.theatersList)
                        }
                        {
                            this.MovieList('Top250', this.state.dataList.top)
                        }
                            <View style={styles.movie_container}>
                                <Title text='发现好电影'/>
                                <ScrollView horizontal={true}>
                                <View style={{
                                    flexDirection: 'row',
                                    width: Dimensions.get('window').width * 3.2,
                                    flexWrap: 'wrap'
                                }}>
                                    {
                                        discoverMovie.map((v, i) => <View key={i} style={styles.movie_list}>
                                            <View style={{
                                                height: 50,
                                                justifyContent: 'center',
                                                borderColor: v.color,
                                                borderWidth: 1,
                                                paddingLeft: 25,
                                                paddingRight: 25,
                                                borderRadius: 4
                                            }}>
                                                <Text style={{color: v.color, fontSize: 16}}>{v.name}</Text>
                                            </View>
                                        </View>)
                                    }
                                </View>
                                </ScrollView>
                            </View>
                    </View>
                </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    movie_container: {
        paddingTop: 10,
        marginBottom: 20
    },
    movie_list: {
        paddingLeft: 20,
        flexDirection: 'row',
        paddingTop: 20
    }
})
const mapStateToProps = state => state
export default connect(mapStateToProps)(Movie)