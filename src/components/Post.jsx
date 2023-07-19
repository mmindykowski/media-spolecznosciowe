const Post = (props) => {
    return (
        <div className="post">
            <div className="avatar">
                <img src={props.post.user.avatar_url} alt={props.post.user.username} />
            </div>
            <div className="postData">
                <div className="postMeta">
                    <div className="author">{props.post.user.username}</div>
                    <div className="date">{props.post.created_at.substring(0,10)}</div>
                </div>
                <div className="postContent"> <div className="author">{props.post.content}</div></div>
            </div>
        </div>
    )
}

export default Post;