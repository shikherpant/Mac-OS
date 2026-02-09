import MacWindow from "./MacWindow"
import "./spotify.scss"

const Spotify = () => {
  return (
    <div>
        <MacWindow width="10vw" height="45vh" initX="1000" initY="400" title="Spotify" page="spotify">
            <div className="spotify">
                {/* <iframe data-testid="embed-iframe"  src="https://open.spotify.com/embed/playlist/7cHWpjlm7bWzOSAsLSxz7h?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe> */}
                <iframe data-testid="embed-iframe"  src="https://open.spotify.com/embed/playlist/0LvYmZs7u4gUEh2e1z7Yk3?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
        </MacWindow>
               
    </div>
  )
}

export default Spotify