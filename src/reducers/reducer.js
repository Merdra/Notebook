import { v4 as uuid } from "uuid";

const initialState = {
  users: [
    {
      title: "Avengers: Infinity War",
      note: "This was one crazy hell of a movie. In this movie, Thanos was able to defeat the Avengers with the aid of the infinity stones and was able to wipe away 50% of life across the entire universe. He did this with just a snap of his fingers.",
      id: uuid()
    },
    {
      title: "Avenger: Endgame",
      note: "This movies deserves an Oscar. Five years after Thanos wiped out 50% of the universe population, the Avengers came back for a re-match with Thanos. In this re-match, impossibilities became possibilities as the Avengers were able to bring back the 50% that Thanos wipe off the surface of the universe.",
      id: uuid()
    },
  ],
  student: [],
  number: [],
  isLoggedIn: false,
  age: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_USER":

      // const newUser = {
      //     name: this.state.name,
      //     location: this.state.location,
      //     phone: this.state.phone,
      //     id: this.state.id,
      //   };
      return { ...state, users: [...state.users, action.payload] };

    case "EDIT_USER":
      const users = state.users.map((user) => {
        if (user.id === action.payload.id) return action.payload.newDetails;
        return user;
      });
      return { ...state, users: users };

    case "DELETE_USER":
      // eslint-disable-next-line array-callback-return
      const filteredUsers = state.users.filter((user) => {
        if (user.id !== action.payload) return user;
      });

      return { ...state, users: filteredUsers };
    default:
      return state;
  }
};

export default reducer;