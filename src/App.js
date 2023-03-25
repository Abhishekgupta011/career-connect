
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Courses from './pages/Courses';
import CourseDetail from './pages/CourseDetail';
import Forum from './pages/Forum';
import Quiz from './pages/Quiz';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import axios from 'axios';

function App() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios.get('/api/courses')
      .then(res => setCourses(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/courses" render={() => <Courses courses={courses} />} />
          <Route path="/courses/:id" component={CourseDetail} />
          <Route path="/forum" component={Forum} />
          <Route path="/quiz" component={Quiz} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
