import React from 'react';
import ReactDOM from 'react-dom';
import Roulette from './roulette';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            filenames: [
                'image1.gif',
                'image15.gif',
                'image20.gif',
                'image26.gif',
                'image31.gif',
                'image37.gif',
                'image42.gif',
                'image48.gif',
                'image10.gif',
                'image16.gif',
                'image21.gif',
                'image27.gif',
                'image32.gif',
                'image38.gif',
                'image43.gif',
                'image5.gif',
                'image11.gif',
                'image17.gif',
                'image22.gif',
                'image28.gif',
                'image33.gif',
                'image39.gif',
                'image44.gif',
                'image6.gif',
                'image12.gif',
                'image18.gif',
                'image23.gif',
                'image29.gif',
                'image34.gif',
                'image4.gif',
                'image45.gif',
                'image7.gif',
                'image13.gif',
                'image19.gif',
                'image24.gif',
                'image3.gif',
                'image35.gif',
                'image40.gif',
                'image46.gif',
                'image8.gif',
                'image14.gif',
                'image2.gif',
                'image25.gif',
                'image30.gif',
                'image36.gif',
                'image41.gif',
                'image47.gif',
                'image9.gif',],
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