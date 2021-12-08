import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';

it('should render the header with navLinks', ()=>{
  const { container } = render(
    <Router>
      <Header />
    </Router>);
  expect(container).toMatchSnapshot();
});