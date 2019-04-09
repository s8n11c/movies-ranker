import { TEST_ACTION } from "../actions";

export function Bridge({ dispatch }) {
  return function(next) {
    return function(action) {
      // do your stuff
      if (action.type === TEST_ACTION) {

        console.log("every thing is cool ... u can pass ")
      }
      return next(action);
    };
  };
}
