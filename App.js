// import logo from './logo.svg';
import suzuki1 from './assets/Suzuki-GSX-8S_001.jpeg';
import './App.css';

function App() {
  return (
    <div>
      <div>
      <h1 id='heading1'>2023 Suzuki GSX-8S | First Ride Review</h1>

      <p>I'm the kind of shopper who likes to have it all in one package if I can. I love a bike that excels in its category, but for the day-to-day, you can't beat a motorcycle that ticks all the boxes without feeling like any of those boxes are being compromised. The new Suzuki GSX-8S middleweight streetfighter comes pretty darn close to checking all the right boxes for me. It's a harmonic blend of power, price, stability, comfort, and fun.</p>

      <img src={suzuki1} alt="Suzuki GSX 8S" />

      <p>The GSX-8S is a new model for Suzuki, with an all-new 776cc 4-stroke DOHC parallel-Twin engine and a new chassis. The engine can also be found in the V-Strom 800DE, which is also new for 2023. </p>
      <p><iframe width="560" height="315" src="https://www.youtube.com/embed/t2dt8Jb8-xA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></p>
      </div>

    </div>
  );
}

export default App;
