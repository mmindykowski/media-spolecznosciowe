const Post = (props) => {
    return (
        <div className="post">
            <div className="avatar">
                <img src={props.post.user.avatar_url} alt={props.post.user.username} />
            </div>
        </div>
    )
}

export default Post;