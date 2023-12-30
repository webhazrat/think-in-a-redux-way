// import redux createStore from cdn link
import { createStore } from "https://cdn.jsdelivr.net/npm/redux@5.0.1/dist/redux.legacy-esm.min.js";

// select dom
const allMatches = document.querySelector(".all-matches");
const lwsAddMatch = document.querySelector(".lws-addMatch");
const lwsReset = document.querySelector(".lws-reset");

// action type constants
const ADD_MATCH = "ADD_MATCH";
const REMOVE_MATCH = "REMOVE_MATCH";
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";

// initial state
const initialState = [
  {
    id: 1,
    score: 0,
  },
];

// reducer function
const scoreReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MATCH:
      const id = state.length > 0 ? state[state.length - 1].id + 1 : 1;
      return [...state, { id: id, score: 0 }];
    case REMOVE_MATCH:
      return state.filter((match) => match.id !== action.payload.id);
    case INCREMENT:
      const incrementMatch = state.map((match) => {
        if (match.id === action.payload.id) {
          return {
            ...match,
            score: match.score + action.payload.value,
          };
        }
        return { ...match };
      });
      return incrementMatch;
    case DECREMENT:
      const decrementMatch = state.map((match) => {
        if (match.id === action.payload.id) {
          return {
            ...match,
            score:
              match.score > action.payload.value
                ? match.score - action.payload.value
                : 0,
          };
        }
        return { ...match };
      });
      return decrementMatch;
    case RESET:
      const resetState = state.map((match) => {
        return {
          ...match,
          score: 0,
        };
      });
      return resetState;
    default:
      return state;
  }
};

// create a store
const store = createStore(scoreReducer);

// render function
const render = () => {
  const state = store.getState();

  let matches = "";
  state.map((match) => {
    matches += `<div class="match">
    <div class="wrapper">
      <button class="lws-delete" data-match-id="${match.id}">
        <img src="./image/delete.svg" alt="" />
      </button>
      <h3 class="lws-matchName">Match ${match.id}</h3>
    </div>
    <div class="inc-dec">
      <form class="incrementForm" data-match-id="${match.id}">
        <h4>Increment</h4>
        <input type="number" name="increment" class="lws-increment" />
      </form>
      <form class="decrementForm" data-match-id="${match.id}">
        <h4>Decrement</h4>
        <input type="number" name="decrement" class="lws-decrement" />
      </form>
    </div>
    <div class="numbers">
      <h2 class="lws-singleResult">${match.score}</h2>
    </div>
  </div>`;
  });
  allMatches.innerHTML = matches;
  console.log(state);

  // delete match after rendering
  const deleteButtons = document.querySelectorAll(".lws-delete");
  deleteButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const matchId = Number(button.dataset.matchId);
      removeMatch(matchId);
    });
  });

  // increment value form
  const incrementForm = document.querySelectorAll(".incrementForm");
  incrementForm.forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const id = Number(form.dataset.matchId);
      const value = Number(form.children["increment"].value);
      incrementValue(id, value);
    });
  });

  // decrement value form
  const decrementForm = document.querySelectorAll(".decrementForm");
  decrementForm.forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const id = Number(form.dataset.matchId);
      const value = Number(form.children["decrement"].value);
      decrementValue(id, value);
    });
  });
};
render();

// subscribe the store
store.subscribe(render);

// add match
lwsAddMatch.addEventListener("click", () => {
  store.dispatch({
    type: ADD_MATCH,
  });
});

// remove match
const removeMatch = (id) => {
  store.dispatch({
    type: REMOVE_MATCH,
    payload: {
      id,
    },
  });
};

// increment value
const incrementValue = (id, value) => {
  store.dispatch({
    type: INCREMENT,
    payload: {
      id,
      value,
    },
  });
};

// decrement value
const decrementValue = (id, value) => {
  store.dispatch({
    type: DECREMENT,
    payload: {
      id,
      value,
    },
  });
};

// reset match
lwsReset.addEventListener("click", () => {
  store.dispatch({
    type: RESET,
  });
});
