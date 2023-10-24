// actions.js
import { UPDATE_ITEM, REMOVE_ITEM,ADD_ITEM } from "./actionTypes";

export const updateItem = (itemId, updatedData) => ({
  type: UPDATE_ITEM,
  payload: { itemId, updatedData },
});

export const removeItem = (itemId) => ({
  type: REMOVE_ITEM,
  payload: { itemId },
});
export const addItem = (data) => ({
  type: ADD_ITEM,
  payload: { data },
});