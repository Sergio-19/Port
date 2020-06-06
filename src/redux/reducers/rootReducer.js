import {combineReducers} from 'redux'
import menu from './menu'
import blog from './blog'
import photo from './photo'

export default combineReducers({
    menu, blog, photo
})