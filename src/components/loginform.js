import Createaccount from "./createnewaccount";
import Loginbutton from "./loginbutton";
import '../style/loginform.css';



function Loginform() {
    return(
        <div className="LoginForm">
            
            <form>
                <input type="text" placeholder="Email or phone number" id="txtemail"></input><br></br>
                <input type="password" placeholder="Password" id="txtpw"></input>
            </form>
            <Loginbutton /> <br></br>

            <button className="ForgotPassword"><a href="#">Forgot Password?</a> </button>
            <hr></hr>
            <Createaccount />


        </div>
    )
}

export default Loginform;