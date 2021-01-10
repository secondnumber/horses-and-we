export type InitialStateType = {
  crumbsList: Array<CrumbsType>;
  title: string;
};

export type CrumbsType = {
  id: number;
  name: string;
  link: string;
  separator: string;
};

const initialState = {
  crumbsList: [
    { id: 1, name: 'Home', link: '#', separator: ' /' },
    { id: 2, name: 'Pages', link: '#', separator: ' /' },
    { id: 3, name: 'About', link: '#', separator: '' },
  ],
  title: 'About',
};

const breadcrumbsReducer = (state: InitialStateType = initialState, action: any): InitialStateType => {
  return state;
};

export default breadcrumbsReducer;
