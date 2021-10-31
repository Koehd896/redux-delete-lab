import React from "react";
import Band from './Band';

class Bands extends React.Component {
    
    render() {
        const bands = this.props.bands.map((band) => <Band {...band} key={band.id} deleteBand={this.props.deleteBand}/>);
        return (
            <div>
                {bands}
            </div>
        )
       
    }
}

export default Bands;