import React, { Component } from 'react';


class Space extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }



    
    render() { 
        let {up} = this.props;
        return (  
            <div className='container space'>
                <div className='row'>
                    <span onClick={up}  className='bg-secondary col-3 border-bottom border-right border-dark' id='1'>1</span>
                    <span onClick={up} id='2' className='bg-secondary col-3 border-bottom border-right border-dark'>2</span>
                    <span onClick={up} id = '3' className='bg-secondary col-3 border-bottom border-right border-dark'>3</span>
                    <span onClick={up} id='space' className='bg-secondary col-3 border-dark'>
                        
                    </span>
                    
                </div>                
                
            </div>
         );
    }
}
 
export default Space;