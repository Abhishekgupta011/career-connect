import React from 'react';
import { useSelector } from 'react-redux';

const Forum = () => {
  const topics = useSelector(state => state.forum.topics);

  return (
    <div>
      <h1>Forum</h1>
      <ul>
        {topics.map(topic => (
          <li key={topic.id}>
            <h2>{topic.title}</h2>
            <p>{topic.description}</p>
            <p>Number of replies: {topic.replies.length}</p>
            <button>View Replies</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Forum;
