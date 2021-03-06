import React from 'react'
import './Post.css'
import {Avatar} from "@material-ui/core"
function Post({name , description, message, photoUrl}) {
    return (
        <div>
            <div className="post">
                <div className="post_header">
                    <Avatar/>
                    <div className="post_info">
                        <h2>Vipul Raj</h2>
                        <p>Description</p>
                    </div>
                </div>

                <div className="post_body">
                    <p>Message goes here</p>
                </div>
            </div>
        </div>
    )
}

export default Post
