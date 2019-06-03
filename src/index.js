import React from 'react';
import ReactDOM from 'react-dom';
import Roulette from './roulette';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            filenames: [
                "13211dbca486.jpg",
                "19b1ebc3444c.jpg",
                "1b626a021380.jpg",
                "265a28e7cb1b.jpg",
                "2d4859993507.jpg",
                "3976f3ee0060.jpg",
                "40d1559728df.jpg",
                "425de0e1c818.jpg",
                "457cae78c6ba.jpg",
                "4be15408e637.jpg",
                "51c9556aeb6a.jpg",
                "5640e9e3efca.jpg",
                "608f6f7e661d.jpg",
                "61c622f5fd6d.jpg",
                "657c5de7f2b6.jpg",
                "65df9e7234f9.jpg",
                "690192d240c7.jpg",
                "789edd5f148a.jpg",
                "797e55d836ec.jpg",
                "7ff69a879355.jpg",
                "8480e2a86900.jpg",
                "97332e14f237.jpg",
                "9c210b9bb2e1.jpg",
                "9dd1ee7ca95d.jpg",
                "a761364ac43c.jpg",
                "a80f1872f2d6.jpg",
                "abb73c0abd30.jpg",
                "ad6de7301226.jpg",
                "b1a9af21729a.jpg",
                "c294d9ff8f16.jpg",
                "c33b6dc3ee4a.jpg",
                "c77108b93fdb.jpg",
                "c7a700323564.jpg",
                "ca2a64b81414.jpg",
                "cd0b80fc48cb.jpg",
                "d36611f51b7a.jpg",
                "d47a3bfb3703.jpg",
                "d5857e02aa40.jpg",
                "d61d4221cb6a.jpg",
                "db2c243b20bd.jpg",
                "df61371d6d22.jpg",
                "ead9e99c043e.jpg",
                "ee699f22613c.jpg",
                "f0ee56c57027.jpg",
                "f2ce32bc3377.jpg",
                "f34400cd1c0b.jpg",
                "f7b4ed55f828.jpg",
                "fb8e35d97f6f.jpg",],
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
                    <p>こうやって、<span className="green underline">名刺</span>を渡そう！</p>
                    <p><span className="blue underline">今のキミらしさ</span>、伝えるために。</p>
                </div>
                <Roulette filename={fileNames[fileIndex]} rouletteClick={this.clickRoulette}/>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('#app'));