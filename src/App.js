import "./App.css";
import YoutubeEmbed from "./components/YoutubeEmbed/YoutubeEmbed";
import YouTubeSampleNPM from "./components/YouTubeSampleNPM";

function App() {
  return (
    <div className="App">
      <h1>Youtube APIs Test</h1>
      <YouTubeSampleNPM />
      <YoutubeEmbed embedId="r-yxNNO1EI8" />
      <iframe
        src="https://player.vimeo.com/video/679647457?h=386a4b5d2a"
        width="640"
        height="360"
        frameborder="0"
        allow="autoplay;  picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default App;
