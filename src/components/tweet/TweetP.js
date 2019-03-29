import React from 'react';

//Components
import ErrorMessage from '../layout/ErrorMessage';

const TweetP = props => {
    const { title, body, btnText, error } = props.data;
    const { handleSubmit, handleChange } = props;

    return (
        <form onSubmit={handleSubmit}>
            {error ? <ErrorMessage message={error}/> : ''}
            <label htmlFor="title">Title</label>
            <input id="title" value={title} onChange={handleChange}/>

            <label htmlFor="body">Body</label>
            <textarea id="body" value={body} onChange={handleChange}/>

            <button>{btnText || 'Post'} tweet</button>
        </form>
    );
};

export default TweetP;