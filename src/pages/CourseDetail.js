import React from 'react';
import { useParams } from 'react-router-dom';

const CourseDetail = () => {
  const { id } = useParams(); // get the course id from the URL

  // fetch course details based on the id
  // you can use useEffect hook and axios library to make API calls
  const course = {
    title: 'Introduction to React',
    instructor: 'John Doe',
    description: 'Learn the basics of React and build your first app!',
    materials: [
      { id: 1, title: 'React Documentation', url: 'https://reactjs.org/docs/getting-started.html' },
      { id: 2, title: 'React Tutorial', url: 'https://reactjs.org/tutorial/tutorial.html' },
      { id: 3, title: 'React Native', url: 'https://reactnative.dev/' },
    ],
    quizzes: [
      { id: 1, title: 'React Basics Quiz', questions: 10 },
      { id: 2, title: 'React Advanced Quiz', questions: 20 },
    ],
    discussions: [
      { id: 1, title: 'Introduction and Course Overview', author: 'John Doe', comments: 5 },
      { id: 2, title: 'React Components', author: 'Jane Smith', comments: 10 },
    ],
  };

  return (
    <div>
      <h2>{course.title}</h2>
      <p>Instructor: {course.instructor}</p>
      <p>{course.description}</p>

      <h3>Course Materials:</h3>
      <ul>
        {course.materials.map(material => (
          <li key={material.id}>
            <a href={material.url} target="_blank" rel="noopener noreferrer">
              {material.title}
            </a>
          </li>
        ))}
      </ul>

      <h3>Quizzes:</h3>
      <ul>
        {course.quizzes.map(quiz => (
          <li key={quiz.id}>
            <a href={`/courses/${id}/quizzes/${quiz.id}`}>{quiz.title}</a> ({quiz.questions} questions)
          </li>
        ))}
      </ul>

      <h3>Discussions:</h3>
      <ul>
        {course.discussions.map(discussion => (
          <li key={discussion.id}>
            <a href={`/courses/${id}/discussions/${discussion.id}`}>{discussion.title}</a> by {discussion.author} ({discussion.comments} comments)
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseDetail;
