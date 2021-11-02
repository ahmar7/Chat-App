import React from "react";
import "./style.css";
import "../../fonts/CascadiaCode.ttf";
import { connect } from "react-redux";
import { facebook_login, chat_users } from "../../store/action";
import logo from "../../assets/images/chaticon.jpg";
import { Link } from "react-router-dom";
class Home extends React.Component {
  togglePopup = () => {
    document.getElementById("popup-1").classList.toggle("active");
  };
  render() {
    return (
      <div id="homesec" className="mainhome">
        <div className="container">
          <div className="chatHeading">
            <img className="chatIcon" src={logo} alt="logo" />
            <p className="appName">Chat App</p>
          </div>
          <h4 className="chatDesc">Welcome to web chat app!</h4>
          <br />
          <span className="chatDesc2">Please sign in to continue.</span>
          <div className="allbtn">
            <Link className="link" to={"/chat"}>
              Go to chat
            </Link>
            <button
              className="fbBtn"
              onClick={() => this.props.facebook_login(this.props.history)}
            >
              Facebook login
            </button>
            <br />
            <br />
            <div className="approvalpopup" id="popup-1">
              <div className="overlay"></div>
              <div className="content">
                <div className="close-btn" onClick={() => this.togglePopup()}>
                  x
                </div>
                <h1 className="approvaltitle"> Error occurred!</h1>
                <p className="approvalnote">
                  Google sign in is not available! please try another option for
                  now.
                </p>
              </div>
            </div>
            <button
              className="signupbtn googleBtn"
              onClick={() => this.togglePopup()}
            >
              Google Login
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.users,
});

const mapDispatchToProp = (dispatch) => ({
  facebook_login: (history) => dispatch(facebook_login(history)),
  chat_users: () => dispatch(chat_users()),
});
export default connect(mapStateToProps, mapDispatchToProp)(Home);
