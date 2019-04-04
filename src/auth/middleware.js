'use strict';

const User = require('./users-model.js');

module.exports = (req, res, next) => {
  
  try {
    console.log('headers', req.headers.authorization);
    let [authType, authString] = req.headers.authorization.split(/\s+/);
    console.log('authType', authType)
    switch( authType.toLowerCase() ) {
      case 'basic': 
        return _authBasic(authString);
      case 'bearer':
      console.log('bearer', _authBearer(authString));
        return _authBearer(authString);
      case 'tokenkey':
        return _authTokenKey(authString);
      default: 
        return _authError();
    }
  }
  catch(e) {
    next(e);
  }
  
  
  function _authBasic(str) {
    // str: am9objpqb2hubnk=
    let base64Buffer = Buffer.from(str, 'base64'); // <Buffer 01 02 ...>
    let bufferString = base64Buffer.toString();    // john:mysecret
    let [username, password] = bufferString.split(':'); // john='john'; mysecret='mysecret']
    let auth = {username,password}; // { username:'john', password:'mysecret' }
    
    return User.authenticateBasic(auth)
      .then(user => _authenticate(user) )
      .catch(next);
  }

  function _authenticate(user) {
    if(user) {
      req.user = user;
      req.token = user.generateToken();
      next();
    }
    else {
      _authError();
    }
  }

  function _authBearer(str) {
    console.log('string',str);
    return User.authenticateBearer(str)
      .then( user => _authenticate( user ))
      .catch( next );
  }


  function _authTokenKey(user) {
    if(user) {
      req.user = user;
      req.token = user.generateTokenKey();
      next();
    }
    else {
      _authError();
    }
  }
  
  function _authError() {
    next('Invalid User ID/Password');
  }
  
};