import firebase from "../../config/firebase";
// import firebase from "firebase/compat/app";
import { getAuth, signInWithPopup, FacebookAuthProvider } from "firebase/auth";
import { getDatabase, ref, set, onValue } from "firebase/database";

// Facebook auth+database start
const facebook_login = (history) => {
  return (dispatch) => {
    const provider = new FacebookAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        const create_user = {
          name: user.displayName,
          email: user.email,
          profile: user.photoURL,
          phone: user.phoneNumber,
          uid: user.uid,
        };

        const db = getDatabase();
        set(ref(db, "users/" + user.uid), {
          name: user.displayName,
          email: user.email,
          profile: user.photoURL,
          phone: user.phoneNumber,
          uid: user.uid,
        }).then((result) => {
          dispatch({ type: "SETUSER", payload: create_user });
          alert("Login successfull!");
          history.push("/chat");
        });
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };
};

// Facebook auth+database end

// chatusers list func start
const chat_users = () => {
  return (dispatch) => {
    let users = [];
    const db = getDatabase();
    const starCountRef = ref(db, "/users/");
    onValue(starCountRef, (snapshot) => {
      let data = snapshot.val();

      users.push(Object.values(data));
      dispatch({ type: "FIREBASEUSERS", payload: users[0] });
    });
  };
};

// chatusers list func end

export { facebook_login, chat_users };
