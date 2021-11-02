import React from "react";
import "./style.css";
// import image from "../../assets/images/book-with-green-board-background.jpg";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { chat_users } from "../../store/action";
class Chat extends React.Component {
  componentDidMount() {
    this.props.chat_users();
  }

  render() {
    console.log("chatuserss==>>", this.props.users);
    let user = this.props.current_user;
    // let userlist = this.props.users;

    return (
      <div className="mainchat">
        <Link className="link" to={"/"}>
          Go to Home
        </Link>

        <h1>Welcome {user.name} </h1>
        <img src={user.profile} alt="profile" />
        <div>
          <ul>
            {this.props.users.map((v, i) => {
              return <li key={i}></li>;
            })}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  current_user: state.current_user,
  users: state.users,
});

const mapDispatchToProp = (dispatch) => ({
  chat_users: () => dispatch(chat_users()),
});
export default connect(mapStateToProps, mapDispatchToProp)(Chat);
