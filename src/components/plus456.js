import React, { Component } from 'react';

class Plus extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        let {up} = this.props;
        return ( 
            <div className='container Plus'>
            <div className='row'>
                <span onClick={up} className='bg-secondary col-3 border-bottom border-right border-dark' id='4'>4</span>
                <span onClick={up} id='5' className='bg-secondary col-3 border-bottom border-right border-dark'>5</span>
                <span onClick={up} id = '6' className='bg-secondary col-3 border-bottom border-right border-dark'>6</span>
                <span onClick={up} id = 'suma' className='bg-secondary col-3 border-bottom border-dark'>+</span>
            </div>
            
        </div>
         );
    }
}
 
export default Plus;