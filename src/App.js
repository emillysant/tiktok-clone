import './App.css';
import Video from './pages/Video';

function App() {
  return (
    <div className="App">
        <div className='app__videos'>
          <Video
            likes={100}
            messages={200}
            shares={300}
            name="Paulo"
            description="Brecker o goleiro"
            music="musica épica"
            url="https://firebasestorage.googleapis.com/v0/b/jornada2-eb156.appspot.com/o/brecker2.mp4?alt=media&token=b7e3ebf7-89a0-47a0-8a34-66f1176a71e3"
          />
          <Video
            likes={120}
            messages={220}
            shares={320}
            name="Pedro"
            description="Brid olhando a camera"
            music="Clap your hands"
            url="https://firebasestorage.googleapis.com/v0/b/jornada2-eb156.appspot.com/o/brecker2.mp4?alt=media&token=b7e3ebf7-89a0-47a0-8a34-66f1176a71e3"
          />
        </div>
    </div>
  );
}

export default App;
