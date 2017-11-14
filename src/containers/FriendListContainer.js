import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { requestNewFriend } from '../actions';

import FriendList from '../components/FriendList';

const mapStateToProps = ({ friends }) => ({ friends });

const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestNewFriend }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(FriendList);
