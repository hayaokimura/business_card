import React from 'react';
import ReactDOM from 'react-dom';
import Roulette from './roulette';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            filenames: [
                "image1.jpg",
                "image2.jpg",
                "image3.jpg",
                "image4.jpg",
                "image5.jpg",
                "image6.jpg",
                "image7.jpg",
                "image8.jpg",],
            fileindex: 0,
            changeImageHandler: null,
        }
        this.changeImage = this.changeImage.bind(this);
        this.clickRoulette = this.clickRoulette.bind(this);
    }

    componentDidMount(){
        this.setState(() => {
            return {
                changeImageHandler: setInterval(this.changeImage,50),
            };
        });
    }

    changeImage(){
        let nextIndex;
        if(this.state.fileindex + 1 < this.state.filenames.length) {
            nextIndex = this.state.fileindex + 1;
        } else {
            nextIndex = 0;
        }
        this.setState(() => {
            return {
                fileindex: nextIndex,
            };
        });
    }

    clickRoulette(){
        clearInterval(this.state.changeImageHandler);
        setTimeout(() => {
            window.location.href = 'dist/result.php\?image='+this.state.filenames[this.state.fileindex];
          }, 1000);
    }
    
    render() {
        const fileNames = this.state.filenames;
        const fileIndex = this.state.fileindex;
        return(
            <div>
                <div className="title">
                    <p>名刺交換ルーレット！</p>
                </div>
                <Roulette filename={fileNames[fileIndex]} rouletteClick={this.clickRoulette} />
                <div className="description">
                    <p>タッチしてストップ！</p>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('#app'));