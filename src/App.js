import './App.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Card from './components/Card';
import data from './data';
// change font by importing url from app.css, then naming it in index.css body font family

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Hero/>
      <section className="Card-rows">
        {data.map((person) => {
          return(
            <Card
              key={person.id}
              img_src={`../images/${person.coverImg}`}
              rating={person.stats.rating}
              n_reviews={person.stats.reviewCount}
              location={person.location}
              title={person.title}
              price={person.price}
              status={(person.openSpots > 0) ? ("Available") : ("Sold out")}
            />
          )
        })}
      </section>
    </div>
  );
}

export default App;
