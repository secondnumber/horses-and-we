export type InitialStateType = {
  pageScrollPosition: number;
};

const initialState = {
  pageScrollPosition: 205,
};

const scrollReducer = (state: InitialStateType = initialState, action: any): InitialStateType => {
  return state;
};

export default scrollReducer;
