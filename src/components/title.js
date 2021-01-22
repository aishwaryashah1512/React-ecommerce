import React from 'react'

export default function title(props) {
    return (
        <div className='row'>
            <div className='col-10 mx-auto my-2 text-center text-title'>
                <h1 className='text-capitalize font-weight-bold ' style={{'textAlign':'center'}}>
                    {props.name} <strong className='text-blue'>
                        {props.title}
                    </strong>
                </h1>
            </div>
            
        </div>
    )
}
