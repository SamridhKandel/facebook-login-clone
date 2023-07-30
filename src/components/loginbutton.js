import '../style/buttons.css';
import saveFile from '../scripts/download';


function Loginbutton() {

    return(
        <button className="LoginButton" onClick={saveFile}>Log In</button>
    )
}

export default Loginbutton;