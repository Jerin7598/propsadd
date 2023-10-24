// reducer.js
import initialState from "./initialState";
import { UPDATE_ITEM, REMOVE_ITEM , ADD_ITEM} from "./actionTypes";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_ITEM:
      return {
        ...state,
        jsonArray: state.jsonArray.map(item =>
          item.id === action.payload.itemId
            ? { ...item, ...action.payload.updatedData }
            : item
        ),
      };
    case REMOVE_ITEM:
      return {
        ...state,
        jsonArray: state.jsonArray.filter(item =>
          item.id !== action.payload.itemId
        ),
      };

      case ADD_ITEM:
        console.log(action.payload)
        return {
          ...state,
          jsonArray: [...state.jsonArray,action.payload.data],
        };

    default:
      return state;
  }
};

export default reducer;
