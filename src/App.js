import React, { Component } from 'react';
import 'bootstrap-css-only'

import NewComment from './NewComment'
import Comments from './Comments'

var styles = {
  padding: "10px 0 10px 0",
  margin: "20px 0 30px 0"
}

var styles2 = {
  
}


class App extends Component {
  constructor(props){
    super(props)

    this.postNewComment = this.postNewComment.bind(this)

    this.state = {
      comments: {
      },
      isLoggedIn: false,
      user: {}
    }

    this.refComments = this.props.base.syncState('comments', {
      context: this,
      state: 'comments'
    })

    this.props.auth.onAuthStateChanged((user)=>{
      if(user){
        this.setState({ isLoggedIn: true, user })
      }else{
        this.setState({ isLoggedIn: false, user: {} })
      }
    })

  }

  postNewComment(comment){
    comment.user = {
      id: this.state.user.uid,
      name: this.state.user.displayName,
      picture: this.state.user.photoURL
    }
    const comments = { ...this.state.comments }
    const timestamp = Date.now()
    comments[`comm-${timestamp}`] = comment
    this.setState({
      comments: comments
    })
  }
  auth(provider){
    this.props.auth.signInWithPopup(this.props.providers[provider])  
  }



  render() {
    return (

      
      <div className="container">
        {this.state.isLoggedIn && 
          <div className="row well" style={styles}>
            <div className="col-sm-2 font-weight-light">
                <center><img alt={this.state.user.displayName} src={this.state.user.photoURL} className="img-thumbnail" /><br />
                {this.state.user.displayName}<br />
                <button onClick={() => this.props.auth.signOut()} className="btn btn-danger btn-sm font-weight-light">Deslogar</button></center>
            </div>
           
            <NewComment postNewComment={this.postNewComment} />

          </div>      
          
         }
        { !this.state.isLoggedIn &&
          <div className='alert alert-info'>
              <button onClick={() => this.auth('facebook') }>Entre com o Facebook para comentar</button>
          </div>
        }
        <Comments comments={this.state.comments} />
      </div>
    )
  }
}

export default App;
