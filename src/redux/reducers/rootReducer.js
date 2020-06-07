import {combineReducers} from 'redux'
import menu from './menu'
import blog from './blog'
import photo from './photo'
import pass from './pass'

export default combineReducers({
    menu, blog, photo, pass
})