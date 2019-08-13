import React from "react";
import { connect } from 'react-redux'
 
function ConversationsList(props) {

  const renderSuggestions = () => {
    return props.user.friends.map( friend => {
      return(
        <div key={friend.user._id}>
          {friend.user.name}
        </div>
      )
    })
  }

  const renderConversations = () => {
    return props.conversations.map(conversation => {
      console.log(conversation)
      return(
        <div key={conversation._id}>
          hi
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
            something will go here
        </div>
      </div>
      <div className="friends-list">
        {renderConversations()}
        <div className="separator">=================</div>
        {renderSuggestions()}
      </div>
      <div className="new-conversation">
        <button onClick={props.openNewConversation}>+</button>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  user: state.auth.user,
  conversations: state.conversations.all,
  activeConversation: state.conversations.active
})
export default connect(mapStateToProps)(ConversationsList);