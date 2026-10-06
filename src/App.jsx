import "./App.css";
import FestivalCard from "./components/FestivalCard";

function App() {
  return (
    <div className="app">
      <header>
        <h1>Festival Finder 🎡</h1>
        <p>Discover fun festivals happening throughout the year.</p>
      </header>

      <div className="festival-container">
        <FestivalCard
          name="Music Festival"
          date="June 14"
          location="Atlanta, GA"
          description="Enjoy live music, food vendors, and performances from local artists."
        />

        <FestivalCard
          name="Food Festival"
          date="July 6"
          location="Atlanta, GA"
          description="Taste dishes, desserts, and treats from local restaurants and food vendors."
        />

        <FestivalCard
          name="Art Festival"
          date="April 20"
          location="Savannah, GA"
          description="Explore paintings, photography, crafts, and handmade artwork."
        />

        <FestivalCard
          name="Film Festival"
          date="August 10"
          location="Atlanta, GA"
          description="Watch independent films, short movies, and special screenings."
        />

        <FestivalCard
          name="Cultural Festival"
          date="September 7"
          location="Decatur, GA"
          description="Celebrate different cultures through music, food, clothing, and traditions."
        />

        <FestivalCard
          name="Cherry Blossom Festival"
          date="March 22"
          location="Macon, GA"
          description="Enjoy spring flowers, live entertainment, food, and outdoor activities."
        />

        <FestivalCard
          name="Fall Festival"
          date="October 12"
          location="Marietta, GA"
          description="Celebrate fall with pumpkins, seasonal food, games, and family activities."
        />

        <FestivalCard
          name="Holiday Festival"
          date="December 7"
          location="Atlanta, GA"
          description="Enjoy holiday lights, music, shopping, decorations, and seasonal activities."
        />

        <FestivalCard
          name="Book Festival"
          date="May 18"
          location="Decatur, GA"
          description="Meet authors, browse books, attend readings, and join literary discussions."
        />

        <FestivalCard
          name="Gaming Festival"
          date="November 15"
          location="Atlanta, GA"
          description="Enjoy video games, tournaments, competitions, and gaming activities."
        />
      </div>
    </div>
  );
}

export default App;