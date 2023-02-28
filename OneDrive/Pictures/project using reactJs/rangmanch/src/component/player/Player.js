import './Player.css';
import { faPlay, faPause, faForward, faShuffle, faRepeat, faBackward, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Component } from "react";

class Player extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isPlaying: false,
        };
        this.playMusic = this.playMusic.bind(this);
        this.pauseMusic = this.pauseMusic.bind(this);
    }

    revertAction() {
        this.setState(prevState => ({
            isPlaying: !prevState.isPlaying
        }));
    }

    audio = new Audio('/kunj bihari/hamar-pahun.mp3')

    playMusic() {
        this.revertAction()
        this.audio.play();
        console.log('playMusic clicked');
    }

    pauseMusic() {
        this.revertAction()
        this.audio.pause();
        console.log('pauseMusic clicked');
    }

    playNext() {

    }

    playPrev() {

    }

    render() {
        const { isPlaying } = this.state;
        return (
            <div className="player-container">
                <div className="player-song-info">
                    <img src="https://picsum.photos/100/300" className="player-song-img" />
                    <div className="player-song-meta-data">
                        <span className="player-song-meta-name">bhutiya gelo ham pibaite pibaite</span>
                        <span className="player-song-meta-singer">Kunj Bihari</span>
                    </div>
                </div>
                <div className="player-song-action">
                    <div className="player-duration-meta">
                        <input type="Range"/>
                        
                    </div>


                    <FontAwesomeIcon className="action-btn" color={"gold"} icon={faRepeat} />
                    <FontAwesomeIcon className="action-btn" color={"gold"} icon={faBackward} />
                    {isPlaying ? <FontAwesomeIcon className="action-btn" onClick={this.pauseMusic} color={"gold"}
                        icon={faPause} /> :
                        <FontAwesomeIcon className="action-btn" onClick={this.playMusic} color={"gold"}
                            icon={faPlay} />}

                    <FontAwesomeIcon className="action-btn" color={"gold"} icon={faForward} />
                    <FontAwesomeIcon className="action-btn" color={"gold"} icon={faShuffle} />
                </div>
                <div className="player-song-info">

                </div>
            </div>
        )
    }

}

export default Player;