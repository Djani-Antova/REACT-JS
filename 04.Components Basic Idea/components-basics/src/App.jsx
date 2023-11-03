import MovieList from './components/MovieList';
import movies from './assets/movies';
import Timer from './components/Timer';
import Counter from './components/Counter';
import './App.css'



function App() {

    return (
        <div>
            <h1>My First Dynamic React Application</h1>
                {/* use startTime={5}, because startTime="5" will be read as string  */}

            <Counter />

            {/* <Timer startTime={5}/>   */}
            {/* <Timer startTime={6}/>  
            <Timer startTime={8}/>   */}

            <MovieList movies={movies} headingText='Movie List' secondaryText="Secondary Text" />
        </div>
    )
}

export default App
