import React, { Component } from 'react';

class Head extends Component {
    state = {  } 

    render() { 

        return (
            <>
            <div className='header'>
                <img src='/detailimage2.PNG' />
                <span className='welcome'>
                    Welcome
                </span>
                <br></br>
                <span className='online'>
                    To Your online <span className='store'>SHOPPING STORE!!!</span></span>
            </div>
            </>
        );
    }
}
 
export default Head;