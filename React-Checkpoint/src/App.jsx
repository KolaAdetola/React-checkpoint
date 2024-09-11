import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Name from './components/Name';
import Desc from './components/Desc';
import Price from './components/Price';

function App() {
  return (
    <Card style={{ width: '25rem' }}>
      <Card.Img variant="top" src="https://www.androidheadlines.com/wp-content/uploads/2024/09/apple-iphone-16-2-scaled.jpeg" />
      <Card.Body>
        <Card.Title><Name/><Price/></Card.Title>
        <Card.Text>
          <Desc/>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default App;