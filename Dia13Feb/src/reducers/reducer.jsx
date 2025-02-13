export const initialState = [];

export function reducer(state, action) {
  switch (action.type) {
    case "add":
      return [...state, { id: Date.now(), text: action.payload }];
    case "remove":
      return state.filter((task) => task.id !== action.payload);
    case "clear":
      return [];
    default:
      return state;
  }
}
