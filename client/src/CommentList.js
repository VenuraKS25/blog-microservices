import React from "react";


function CommentList({ comments }) {

    const renderedComments = comments.map(comment => {
        let content;

        if (comment.status === 'rejected') {
            content = 'This comment is rejected';
        }
    
        if (comment.status === 'approved') {
            content = comment.content;
        }
    
        if (comment.status === 'Pending'){
            content = 'This comment is not moderated';
        }
        return (
            <li key={comment.id}>
                {content}
            </li>
        )
    });

    return (
        <ul>
            {renderedComments}
        </ul>
    );

}

export default CommentList;