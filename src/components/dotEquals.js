import React, { Component } from 'react';

class DotEquals extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        let {up} = this.props;
        return ( 
        <div className='container dotEquals'>
            <div className='row'>
                <span onClick={up}  className=' bg-secondary col-6 border-bottom border-right border-dark' id='0'>0</span>
                <span onClick={up} id='dot' className='bg-secondary col-3 border-bottom border-right border-dark'>.</span>
                <span onClick={up} id = 'equals' className='bg-secondary col-3 border-bottom border-dark'>=</span>
                
            </div>
         </div> 
    );
    }
}
 
export default DotEquals;