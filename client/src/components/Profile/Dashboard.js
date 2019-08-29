import React, {useState} from "react";
import { Link } from 'react-router-dom';
import UploadImageModal from '../common/UploadImageModal'
import {connect} from 'react-redux'
const resourceRoot = process.env.REACT_APP_RESOURCE_ROOT

function Dashboard(props) {
  const[uploadModal, setUploadModal] = useState(false)

  const toggleUploadView = (e) => {
    setUploadModal(!uploadModal)
  }

  return (
    <div className="profile-dashboard full-hd">
      <div className="profile-info-container">
        <div className="cover-photo-container"></div>
        <div className="user-info-navbar">
          <div className="avatar-container">
            <img className="profile-icon" src={`${resourceRoot}/${props.currentUser.avatar}`} alt=""/>
            <div className="profile-pic-selector">
              <div className="update-photo-btn" onClick={toggleUploadView}>update</div>
            </div>
          </div>
          <div className="nav-items">
              <div>{props.currentUser.name}</div>
              <Link to="/friends">
                friends
              </Link>
          </div>
        </div>
      </div>
      <div className="profile-feed-container">
        use feed
      </div>
      {
         uploadModal && 
        <UploadImageModal close={toggleUploadView}/>
      }
    </div>
  )
}

const mapStateToProps = state => ({
  currentUser: state.user.info, 
})

export default connect(mapStateToProps, {})(Dashboard);
