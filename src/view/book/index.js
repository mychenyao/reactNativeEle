import React, {Component} from 'react'
import {View, ScrollView,Image, Text, StyleSheet} from 'react-native'
import {connect} from 'react-redux'
import Title from '../components/Title'
import BookItem from '../components/movieItem'
import bookList from '../../static/json/book'
class Book extends Component {
    constructor(props) {
        super(props)
        this.state = {
            bookList
        }
    }

    componentWillMount() {
    }
    BookList () {

    }
    componentDidMount() {
    }

    marketProductTitle(item) {
        return item.length > 8 ? item.substring(0, 8)+'...' : item
    }
    BookCategory({items, title}) {
        return (
            <View style={styles.book_container}>
                <Title text={title}/>
                <ScrollView horizontal={true}>
                    <View style={styles.book_list}>
                        {
                            items.map((v,i) =>
                                <BookItem item={v} key={i} />
                            )
                        }
                    </View>
                </ScrollView>
            </View>
        )
    }

    title(item) {
        return item.length > 4 ? item.substring(0, 4) : item
    }

    render() {
        const {fiction, nofiction, market_product_book} = this.state.bookList
        const {header} = market_product_book
        const {BookCategory} = this
        const category = [
            {
                item: fiction.subject_collection_items,
                title: '最受关注图书 | 虚构类'
            }, {
                item: nofiction.subject_collection_items,
                title: '最受关注图书 | 非虚构类'
            }
        ]
        return (
            <ScrollView>
                <View>
                    {
                        category.map((v, i) => <BookCategory key={i} items={v.item} title={v.title}/>)
                    }
                    <View style={styles.book_container}>
                        <Title text="豆瓣书店"/>
                        <View style={styles.book_list}>
                            {/*left*/}
                                <Image style={{
                                    width: 100,
                                    height: 133
                                }} source={{uri: header.cover.url}} />
                            {/*right*/}
                            <View style={{flex: 1, paddingLeft: 20, paddingRight: 20, paddingTop: 8}}>
                                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                    <Text style={{color: '#494949',fontWeight: 'bold', fontSize: 19}}>{this.marketProductTitle(header.title)}</Text>
                                    <Text style={{color: '#E76648', fontSize: 16}}>¥ {header.price}</Text>
                                </View>
                                <Text style={{marginTop: 10, color: '#9B9B9B', fontSize: 14}}>
                                    {header.info}
                                </Text>
                            </View>
                        </View>
                        <ScrollView horizontal={true}>
                            <View style={styles.book_list}>
                                {
                                    market_product_book.subject_collection_items.map((v, i) =>
                                        <View key={i} style={{alignItems: 'center', marginRight: 10}}>
                                            <Image style={{
                                                width: 100,
                                                height: 133
                                            }} source={{uri: v.cover.url}} />
                                            <Text style={{color: '#111', fontSize: 16, marginTop: 10}}>{this.title(v.title)}</Text>
                                            <Text style={{color: '#aaa'}}>¥ {v.price}</Text>
                                        </View>
                                    )
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
    book_container: {
        paddingTop: 10,
        marginBottom: 20
    },
    book_list: {
        paddingLeft: 20,
        flexDirection: 'row',
        paddingTop: 20
    }
})
const mapStateToProps = state => state
export default connect(mapStateToProps)(Book)