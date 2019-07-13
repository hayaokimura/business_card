import React from 'react';
import ReactDOM from 'react-dom';
import Roulette from './roulette';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            filenames: [
                "13211dbca486",
                "19b1ebc3444c",
                "1b626a021380",
                "265a28e7cb1b",
                "2d4859993507",
                "3976f3ee0060",
                "40d1559728df",
                "425de0e1c818",
                "457cae78c6ba",
                "4be15408e637",
                "51c9556aeb6a",
                "5640e9e3efca",
                "608f6f7e661d",
                "61c622f5fd6d",
                "657c5de7f2b6",
                "65df9e7234f9",
                "690192d240c7",
                "789edd5f148a",
                "797e55d836ec",
                "7ff69a879355",
                "8480e2a86900",
                "97332e14f237",
                "9c210b9bb2e1",
                "9dd1ee7ca95d",
                "a761364ac43c",
                "a80f1872f2d6",
                "abb73c0abd30",
                "ad6de7301226",
                "b1a9af21729a",
                "c294d9ff8f16",
                "c33b6dc3ee4a",
                "c77108b93fdb",
                "c7a700323564",
                "ca2a64b81414",
                "cd0b80fc48cb",
                "d36611f51b7a",
                "d47a3bfb3703",
                "d5857e02aa40",
                "d61d4221cb6a",
                "db2c243b20bd",
                "df61371d6d22",
                "ead9e99c043e",
                "ee699f22613c",
                "f0ee56c57027",
                "f2ce32bc3377",
                "f34400cd1c0b",
                "f7b4ed55f828",
                "fb8e35d97f6f",],
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
            window.location.href = 'dist/result.php\?id='+this.state.filenames[this.state.fileindex];
          }, 1000);
    }
    
    render() {
        const fileNames = this.state.filenames;
        const fileIndex = this.state.fileindex;
        return(
            <div>
                <div className="title">
                    <p>こうやって、<span className="green underline">名刺</span>を渡そう！</p>
                    <p><span className="blue underline">今のキミらしさ</span>、伝えるために。</p>
                </div>
                <Roulette filename={fileNames[fileIndex]} rouletteClick={this.clickRoulette}/>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('#app'));