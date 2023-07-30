import logo from '../logo.svg'
import '../style/logo.css';
function Facebooklogo() {
    return(
        <div>
            <img src={logo} className='logo' alt='facebook logo'></img>
            <h2>Connect with friends and the world<br></br> around you on Facebook.</h2>
        </div>
    )
}

export default Facebooklogo;