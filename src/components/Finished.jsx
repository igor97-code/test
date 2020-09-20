import React from 'react'

const Finished = (props) => {
    return (
        <div className='finished'>
            <div className='finished-points'>
                Ваши баллы: {props.currentPoints} из 100
            </div>
            <div className='finished-btn'>
                <button onClick={() => {
                    props.dispatch({
                        type: 'reStart'
                    })
                }}>Пройти еще раз</button>
            </div>
        </div>
    )
}

export default Finished