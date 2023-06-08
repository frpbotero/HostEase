import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Home() {
    return (
        <div className='bg-stone-700 h-screen'>
            <Header/>
            <h1 className='text-9xl text-center text-stone-200'>HostEase</h1>
            <Footer/>
        </div>
    )
}