export const initialState = { esPrimeraImg: true };

export function reducer(state, action) {
  // switch (action.type) {
  //   case "toggleImage":
  //     return { esPrimeraImg: !state.esPrimeraImg };
  //   default:
  //     return state;
  // }
  if (action.type === "toggleImage") {
    return { esPrimeraImg: !state.esPrimeraImg };
  } else {
    return state;
  }
}
