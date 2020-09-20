import React from 'react'

const Quiz = (props)=>{
    let [answerStatus,setAnswerStatus] = React.useState(null)
    const answers = props.item.Answers.map( (elem,index) => (
        <div className ={ clickHandler(index)} 
            key={index} 
             onClick ={()=>{answerHandler(index)}}>{elem}
        </div>
     ))
    function clickHandler(index){
        if(answerStatus && answerStatus[index]){
            if(answerStatus[index]  === 'succes'){
               return 'succes'
            }
            else{
                return 'fail'
            }
        }
    }
    function createDispatchDelay(type){
        setTimeout(() => {
            setAnswerStatus(null);
            props.dispatch({
                type,
                index:props.activQuiz
            })
        }, 700);
     }
    const answerHandler = (index)=>{
        if(index === props.item.correct){ 
                setAnswerStatus({
                    [index] :'succes'
                })
                createDispatchDelay('succes')
        }
        else{
            setAnswerStatus({
                [index] :'fail'
            })
            createDispatchDelay('fail');
        }
    }
    return (
        <div className='Quiz'>
            <div className='Quiz-info dflex' >
                <div className='Quiz-info-title'>
                {props.activQuiz +1}.{props.item.Questions}
                </div>
                <div className='Quiz-info-current'>
                    {props.activQuiz +1} из {props.max}
                </div>
            </div>
            <div className='Quiz-answers'>
                {answers}
            </div>
        </div>
    )
}
export default Quiz