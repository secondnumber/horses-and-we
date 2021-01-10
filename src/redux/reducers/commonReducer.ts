import LoaderIcon from '../../assets/Loader/Loader.svg';

export type InitialStateType = {
  loaderIcon: string;
};

const initialState = {
  loaderIcon: LoaderIcon,
};

const commonReducer = (state: InitialStateType = initialState, action: any): InitialStateType => {
  return state;
};

export default commonReducer;
