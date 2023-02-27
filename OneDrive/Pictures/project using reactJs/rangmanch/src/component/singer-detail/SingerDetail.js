import './SingerDetail.css'
import HorizontalSong from "../horizontal-song/HorizontalSong";
import {faEllipsisVertical, faHeart} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Player from "../player/Player";


function SingerDetail() {
    const items = ['item 1', 'item 2', 'item 3', 'item 4', 'item 5', 'item 6', 'item 10', 'item 20', 'item 30',];
    return (
        <div className="singer-detail-parent">
            <div className="singer-detail-container">
                <div className="singer-detail-header">
                    <img className="singer-dp" src="https://picsum.photos/100/300"/>
                    <div className="singer-info-container">
                        <span className="singer-name">Kunj Bihari Mishra</span>
                        <span className="singer-track-count">120 Song</span>
                        <span className="singer-album-count">12 Album</span>
                        <div className="singer-action-item">
                            <button className="btn-play-all">Play All</button>
                            <FontAwesomeIcon className="action-btn" size={"2x"} color={"gold"} icon={faHeart}/>
                            <FontAwesomeIcon className="action-btn" size={"2x"} color={"gold"}
                                             icon={faEllipsisVertical}/>
                        </div>
                    </div>
                </div>
                <div className="singers-song-list">
                    <ol className="song-list">
                        {items.map(item => (
                            <HorizontalSong key={item}>{item}</HorizontalSong>
                        ))}
                    </ol>
                </div>
            </div>
            <Player></Player>
        </div>


    )

}

export default SingerDetail;