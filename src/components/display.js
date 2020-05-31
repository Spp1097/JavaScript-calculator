import React, {Component} from 'react'

class Display extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        let {upText, downText} = this.props;
        return (
           <div className='display container-fluid'> 
            <div className='displayUp text-right'>{upText}</div>
            <div className='displayDown text-right '>{downText}</div>
            
           </div> 
          );

    }
}
 
export default Display ;