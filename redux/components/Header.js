import React, {PropTypes, Component} from 'react'
import TodoTextInput from './TodoTextInput'

class Header extends Component {
    handleSave(text) {
        if (text.length !== 0) {
            this.props.addTodo(text)
        }
    }

    render() {
        return ( < header className = "header" >
            < h1 > 在这里 < /h1> < TodoTextInput newTodo onSave = {
                this.handleSave.bind(this)
            }
            placeholder = "输入什么好呢?" / >
            < /header>
        )
    }
}

Header.propTypes = {
    addTodo: PropTypes.func.isRequired
}

export default Header
