import "./App.css";
import profile from "./images/profile.jpg";
import email from "./images/email.PNG";
import password from "./images/password.PNG";

function App() {
  return (
    <div className="main">
      <div className="sub-main">
        <div>
          <div className="imgs">
            <div className="container-image">
              <img src={profile} alt="Profile" className="profile" />
            </div>
          </div>
          <div>
              <h1>Login Page</h1>
              <div>
                <img src={email} alt="Email" className="email"/>
                <input type="text" placeholder="User Name" className="name"/>
              </div>
              <div className="second-input">
                <img src={password} alt="Password" className="email"/>
                <input type="password" placeholder="Password" className="name"/>
              </div>
              <div className="login-btn">
              <button>Login</button>
              </div>
                <p className="link">
                  <a href="#">Forgot Password ?</a> Or <a href="#">Sign Up</a>
                </p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
