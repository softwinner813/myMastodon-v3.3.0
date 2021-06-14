import React from 'react';
import { connect } from 'react-redux';
import { expandHomeTimeline } from '../../actions/timelines';
import PropTypes from 'prop-types';
// import StatusListContainer from '../ui/containers/status_list_container';
import Column from '../../components/column';
// import ColumnHeader from '../../components/column_header';
// import { addColumn, removeColumn, moveColumn } from '../../actions/columns';
import { defineMessages, injectIntl, FormattedMessage } from 'react-intl';
// import ColumnSettingsContainer from './containers/column_settings_container';
// import { Link } from 'react-router-dom';
// import { fetchAnnouncements, toggleShowAnnouncements } from 'mastodon/actions/announcements';
// import AnnouncementsContainer from 'mastodon/features/getting_started/containers/announcements_container';
// import classNames from 'classnames';
// import IconWithBadge from 'mastodon/components/icon_with_badge';



const mapStateToProps = state => ({
  hasUnread: state.getIn(['timelines', 'home', 'unread']) > 0,
  isPartial: state.getIn(['timelines', 'home', 'isPartial']),
  hasAnnouncements: !state.getIn(['announcements', 'items']).isEmpty(),
  unreadAnnouncements: state.getIn(['announcements', 'items']).count(item => !item.get('read')),
  showAnnouncements: state.getIn(['announcements', 'show']),
});

export default @connect(mapStateToProps)
@injectIntl
class EmailVerifyRedirect extends React.PureComponent {
  componentWillMount() {
    var redirect_url = "http://sitelinez.com/";
    location.replace(redirect_url);
  }
 
  render () {
    const { intl, shouldUpdateScroll, hasUnread, columnId, multiColumn, hasAnnouncements, unreadAnnouncements, showAnnouncements } = this.props;
    const pinned = !!columnId;

    

    return (
      <Column >
        
      </Column>
    );
  }

}
