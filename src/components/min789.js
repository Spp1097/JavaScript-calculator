import React, { Component } from 'react';

class Minus extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        let {up} = this.props;
        return (  
            <div className='container Minus'>
                <div className='row'>
                    <span onClick={up} className='bg-secondary col-3 border-bottom border-right border-dark' id='7'>7</span>
                    <span onClick={up} id='8' className='bg-secondary col-3 border-bottom border-right border-dark'>8</span>
                    <span onClick={up} id = '9' className='bg-secondary col-3 border-bottom border-right border-dark'>9</span>
                    <span onClick={up} id = 'resta' className='bg-secondary col-3 border-bottom border-dark'>-</span>
                </div>
                
            </div>
        );
    }
}
 
export default Minus;