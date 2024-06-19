// Tasks.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import '../styles/Tasks.css';

const Tasks = () => {
  const [tasks] = useState([
    { id: 1, name: 'Web Development', route:'web-development' },
    { id: 2, name: 'Data Science', route:'data-science' },
    { id: 3, name: 'Python', route:'python-development' },
    { id: 4, name: 'Java Development', route:'java-development' },
    { id: 5, name: 'App Development', route:'app-development' },
    { id: 6, name: 'UI/UX Design', route:'ui-design' },
    { id: 7, name: 'C++ Development', route:'cpp-development' },
    { id: 8, name: 'Machine Learning', route:'machine-learning' },
  ]);

  return (
    <Layout>
    <div className="tasks-container">
      <h1>Tasks</h1>
      <div className="tasks-list">
        {tasks.map(task => (
          <Link key={task.id} to={`/tasks/${task.route}`} className="task-link">
            {task.name}
          </Link>
        ))}
      </div>
    </div>
    </Layout>
  );
};

export default Tasks;
