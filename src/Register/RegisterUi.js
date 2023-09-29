import "./RegisterUi.css";
import profile from "./../image/a.png";
import mail from "./../image/email.jpg";
import pass from "./../image/pass.png";
import uva from "./../image/usern.jpg";

function RegisterUi() {
  return (
    <div className="main">
      <div className="sub-main">
        <div>
          <div className="imgs">
            <div className="container-image">
              <img src={profile} alt="profile" className="profile" />
            </div>
          </div>
          <div>
            <h1>Register</h1>

            <div className="input">
              <img src={uva} alt="name" className="input-field-icons" />
              <input type="text" placeholder="display name" className="name" />
            </div>

            <div className="input">
              <img src={mail} alt="email" className="input-field-icons" />
              <input type="text" placeholder="e-mail id" className="name" />
            </div>
            <div className="input">
              <img src={pass} alt="pass" className="input-field-icons" />
              <input
                type="password"
                placeholder="user password"
                className="name"
              />
            </div>
            <div className="Register-button">
              <button>Signup</button>
            </div>

            <p className="link">
              <a> You do have an account?</a> <a href="#">Login</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterUi;
