const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String
  },

  coverPhoto: [
    {
    contentSize: String,
    S3Key: String
    }
  ], 

  date: {
    type: Date,
    default: Date.now
  }, 
  
  // friends: [
  //   {
  //     requested: {
  //       type: Schema.Types.ObjectId,
  //       ref: 'users',
  //     },
  //     sent: {
  //       type: Schema.Types.ObjectId,
  //       ref: 'users',
  //     },
  //     accepted: {
  //       type: Schema.Types.ObjectId,
  //       ref: 'users',
  //     }
  //   }
  // ], 
  
  friends: [
    { 
      type: Schema.Types.ObjectId, ref: 'friends'
    }
  ],

  conversations: [
    { 
      type: Schema.Types.ObjectId,
      ref: 'conversations'
    }
  ],

  items: [
    { 
      type: Schema.Types.ObjectId,
      ref: 'items'
    }
  ]
});

module.exports = User = mongoose.model('users', UserSchema);