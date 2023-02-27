import './HorizontalSong.css'

function HorizontalSong() {
    return (
        <div className="song-container">
            <div className="song-img-name-cont">
                <img src="https://picsum.photos/900/300" className="song-img"/>
                <p className="song-name">Hamar Pahun</p>
            </div>

            <span className="song-artist">Kunj Bihari, Rachna Jha</span>
            <span className="song-album">Pahun</span>
            <span className="song-duration">06:30</span>
        </div>
    )

}

export default HorizontalSong;