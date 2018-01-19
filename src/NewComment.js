import React, { Component } from 'react'

var styles = {
    margin: "0px 0 0 0"
}

var styles2 = {
    height: "100px"
}

class NewComment extends Component{
    constructor(props){
        super(props)

        this.handleEnter = this.handleEnter.bind(this)
    }
    handleEnter(event){
        if(event.keyCode===13){
            console.log(event.keyCode)
            this.props.postNewComment({
                comment: this.refs.comment.value
            })
            this.refs.comment.value = ''
            event.preventDefault()
        }
    }
    render(){
        return (
            <div className="col-sm-10" style={styles}>
                <textarea ref="comment" placeholder="Deixe seu comentário" className="form-control" style={styles2} onKeyDown={this.handleEnter}></textarea><br />
            </div>
        )
    }
}

export default NewComment