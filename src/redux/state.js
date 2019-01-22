import {createStore} from 'redux'
import reducer from './index'
import Movie from '../view/movie'
import Book from '../view/book'
const initData = {
    add: false,
    Page: Book,
    eleProductList: [],
    discoverMovie: [
        {
            name: '同时入选IMDB250和豆瓣电影250的电影',
            color: '#3BA94D'
        },
        {
            name: '带你进入不正常的世界',
            color: '#CC3344'
        },
        {
            name: '用【电影】来祭奠失去的岁月',
            color: '#2384E8'
        },
        {
            name: '女孩们的故事【电影】',
            color: '#CC3344'
        },
        {
            name: '使用App【找电影】功能',
            color: '#3BA94D'
        },
        {
            name: '可欢是未来的钥匙。【科幻题材佳作·收藏必备】',
            color: '#4F9DED'
        },
        {
            name: '美国生活面面观',
            color: '#FFAC2D'
        },
        {
            name: '2015终极期待',
            color: '#FFC46C'
        },
        {
            name: '金典韩国电影 - - 收集100部',
            color: '#3BA94D'
        },
    ]
}
const store = createStore(reducer, initData)
export default store