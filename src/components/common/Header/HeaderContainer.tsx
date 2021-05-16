import { connect } from 'react-redux';
import Header from './Header';
import { AppStateType } from '../../../redux/store';
import { NavMenuType } from '../../../redux/reducers/navigationReducer';

type MapStatePropsType = {
  navMenuItems: NavMenuType[];
  logo: string;
};

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    navMenuItems: state.navigation.navMenuItems,
    logo: state.navigation.logo,
  };
};

const HeaderContainer = connect(mapStateToProps, null)(Header);

export default HeaderContainer;
