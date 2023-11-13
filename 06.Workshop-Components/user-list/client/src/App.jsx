import "./styles.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Userlist from "./components/UserList"

function App() {
    return (
        <div>
        <Header />
    
        <main className="main">
            <Userlist />
        </main>
        <Footer />
      </div>
    )

}

export default App;
