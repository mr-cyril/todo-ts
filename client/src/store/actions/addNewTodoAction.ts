import axios from 'axios';
import { Dispatch } from 'redux';
import { TodoAction, TodoActionTypes } from '../types/typesTodo';

export const addNewTodo = (todoData: object) => async (dispatch: Dispatch<TodoAction>) => {
  try {
    dispatch({ type: TodoActionTypes.ADD_TODO_LOADING });
    const { data } = await axios.post('http://localhost:5000/api/todos/1', todoData);
    dispatch({ type: TodoActionTypes.ADD_TODO_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: TodoActionTypes.ADD_TODO_ERROR, payload: 'Ошибка сервера' });
  }
};
