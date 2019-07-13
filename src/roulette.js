import React from 'react';

const EXTENTION = '.jpg';

export default class Roulette extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        const imagePath = "img/poses/" + this.props.filename + EXTENTION;

        return(
            <div className="roulette" onClick={this.props.rouletteClick}>
                <img src={imagePath} />
            </div>
        );
    }
}