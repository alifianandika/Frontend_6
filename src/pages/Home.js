
import Form from "../components/AddForm/Form";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
import Navbar from "../components/Navbar/Navbar";


// Component Movie Main Database
function Main(){
    return (
        <main>
            <Hero />
            <Movies />
            <Form />

           
            
           
        </main>
    )
}



function Home(){
    return (
        <div>
            <Navbar/>
            <Main />
            <Footer />
        
        </div>
    )
}


export default Home;