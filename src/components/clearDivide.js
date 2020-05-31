import React, { Component } from 'react';

class ClearDivide extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        let {up} = this.props;
        return ( 
            <div className='container clearDivide'>
                <div className='row'>
                    <span onClick={up} className=' bg-secondary col-6 border-bottom border-right border-dark' id='Ac'>AC</span>
                    <span onClick={up}id='divide' className='bg-secondary col-3 border-bottom border-right border-dark'>/</span>
                    <span onClick={up}id = 'Multiply' className='bg-secondary col-3 border-bottom border-dark'>x</span>
                </div>
                
            </div>
         );
    }
}
 
export default ClearDivide;