import React from 'react';

export default class Roulette extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        const imagePath = "img/poses/" + this.props.filename;

        return(
            <div className="roulette" onClick={this.props.rouletteClick}>
                <img src={imagePath} />
            </div>
        );
    }
}