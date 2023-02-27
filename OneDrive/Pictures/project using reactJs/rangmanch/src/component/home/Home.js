import './Home.css'
import Song from "../Song/Song";
import Singer from "../Singer/Singer";
import Album from "../Album/Album";
import SingerDetail from "../singer-detail/SingerDetail";

function Home() {
    const items = ['item 1', 'item 2', 'item 3','item 1', 'item 2', 'item 3'];
    return (
        <div className="home-container">
           {/* <span className="title">Trending Songs</span>
            <div className="song-list-container">
                <ul className="song-list">
                    {items.map(item => (
                        <Song key={item}>{item}</Song>
                    ))}
                </ul>

            </div>
            <span className="title">Trending Singer</span>
            <div className="song-list-container">
                <ul className="song-list">
                    {items.map(item => (
                        <Singer key={item}>{item}</Singer>
                    ))}
                </ul>

            </div>
            <span className="title">Trending Album</span>
            <div className="song-list-container">
                <ul className="song-list">
                    {items.map(item => (
                        <Album key={item}>{item}</Album>
                    ))}
                </ul>

            </div>

*/}

            <SingerDetail>

            </SingerDetail>
        </div>
    )
}

export default Home;