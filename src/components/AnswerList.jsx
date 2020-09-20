import React from 'react';
import {connect} from 'react-redux'
import Quiz from './Quiz'
import Finished from './Finished'

const AnswerList = (props) => {
    let max =props.state.items.length;
    return (
        props.state.activQuiz +1 <= max ?
        <div className='AnswerList'>
            <div className='AnswerList-title'>
                Ответьте на все вопросы
            </div>
            <Quiz 
            item ={props.state.items[props.state.activQuiz]}
            activQuiz ={props.state.activQuiz}
            max ={max}
            dispatch ={props.dispatch}
            />
        </div>
        :
        <Finished currentPoints={props.state.currentPoints} dispatch = {props.dispatch}/>
        
    )
}

const mapStateToProps = (state) => {
    return {
        state
    }
}
export default connect(mapStateToProps)(AnswerList)

