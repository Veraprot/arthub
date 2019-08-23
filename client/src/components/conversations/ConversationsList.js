import React, {useEffect} from "react";
import { connect } from 'react-redux'
import { getConversations, setActiveConversation } from '../../actions/conversationActions'
import {socket} from '../../utils/socket'

function ConversationsList(props) {
  useEffect(() => {
    props.getConversations(props.currentUser._id)
  }, [])

  const conversationParticipants = (conversation) => {
    return conversation.users.map(user => {
      if (user._id !== props.currentUser._id) {
        return (
          <div key={user._id}> 
            {user.name}
          </div>
        )
      }
    })
  }

  const switchToConversation = (id) => {
    console.log('old', props.activeConversation)
    console.log('new', id)
    socket.emit('unsubscribe', props.activeConversation)

    props.setActiveConversation(id)
  }

  const renderConversations = () => {
    return props.conversations.map(conversation => {
      return(
        <div key={conversation._id} onClick={() => switchToConversation(conversation._id)}>
          {conversationParticipants(conversation)}
        </div>
      )
    }) 
  }

  return (
    <div className="convertations-list">
      <div className="profile-view-container">
        <div className="avatar-container">
            <img className="profile-icon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUPSysKN4CPaJbicNW2tNU-CgOiL6UxNkrNpmkH1VootIR6MkqXQ" alt=""/>
        </div>
        <div className="user-settings-container"> 
            {props.currentUser.name}
        </div>
        <br/>
        <br/>
      </div>
      <div className="friends-list">
        {renderConversations()}
      </div>
      <div className="new-conversation">
        <button onClick={props.openNewConversation}>+</button>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  currentUser: state.auth.user, 
  conversations: state.conversations.all,
  activeConversation: state.conversations.active
})
export default connect(mapStateToProps, {getConversations, setActiveConversation})(ConversationsList);