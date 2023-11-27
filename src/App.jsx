import AllRoutes from "./AllRoutes/AllRoutes"
import Header from "./components/Header"
import Footer from "./components/Footer"
function App() {
  
  return (
    <div className="dark:bg-slate-800">
        <Header />
        <AllRoutes />
        <Footer />
    </div>
  )
}

export default App
