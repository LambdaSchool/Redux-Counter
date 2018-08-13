import { INCREMENT, DECREMENT, RANDINCREMENT } from '../actions';
import { Object } from 'core-js';

// Our reducer that handles our two action cases:
// increment and decrement. It receives the state
// of our redux store, along with an action created
// by our action creator. What does the reducer
// need to do with the count in each case?
export default (count = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return count + 1
     
    case DECREMENT:
      return count - 1

    case RANDINCREMENT:
      return count + Math.floor(Math.random() * 11)
    
    default:
      return count;
  }
};
