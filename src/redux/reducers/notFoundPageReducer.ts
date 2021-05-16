export type InitialStateType = {
  notFoundItems: Array<NotFoundType>;
};

export type NotFoundType = {
  id: number;
};

const initialState = {
  notFoundItems: [{ id: 1 }, { id: 2 }],
};

const notFoundPageReducer = (state: InitialStateType = initialState, action: any): InitialStateType => {
  return state;
};

export default notFoundPageReducer;
