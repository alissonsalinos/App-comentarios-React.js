import React, { Component } from 'react'

// functional stateless components

var styles = {
	width: '60px',
    display:'inline-block',
    float: 'left',
	margin:'0 5px 5px 0'
}

const Comment = props => 
    <p className="well font-weight-light">
    <img alt={props.comment.user.name} src={props.comment.user.picture} className="img-thumbnail" style={styles} />
    {props.comment.comment} <br/>
    <small><strong>por: {props.comment.user.name}</strong></small>
    <br /><br />
    </p>
    

export default Comment