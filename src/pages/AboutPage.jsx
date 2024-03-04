import { Link } from 'react-router-dom';
import Card from '../components/shared/Card';

function AboutPage() {
  return (
    <Card>
      <div className='about'>
        <h1>About</h1>
        <p>
          This is an interface for users to leave feedback for a product or service. Created using React v18 with state and context hooks, React
          router, and animations from Framer Motion.
        </p>
        <p>
          Backend is provided by <a href='https://my-json-server.typicode.com/'>JSON Server by Typicode</a>
        </p>
        <p>Version: 1.1.0</p>

        <p>
          <Link to='/'>Home</Link>
        </p>
      </div>
    </Card>
  );
}

export default AboutPage;
