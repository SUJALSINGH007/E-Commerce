import Navbar from "../Common/Navbar";
import Topbar from "../Layout/Topbar";


const Header = () => {
  return(
    <div>
      <header className="border-b border-gray-200">
      <Topbar />
      <Navbar />
      </header>
    </div>
  )
}

export default Header;