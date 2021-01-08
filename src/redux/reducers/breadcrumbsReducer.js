let initialState = {
  crumbsList: [
    { id: 1, name: 'Home', link: '#', separator: ' /' },
    { id: 2, name: 'Pages', link: '#', separator: ' /' },
    { id: 3, name: 'About', link: '#', separator: '' },
  ],
  title: 'About',
};

const breadcrumbsReducer = (state = initialState, action) => {
  return state;
};

export default breadcrumbsReducer;
