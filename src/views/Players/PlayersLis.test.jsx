import { render } from '@testing-library/react';
import PlayerList from './PlayersList';

it('should render PlayerList Component ', ()=> {
  const { container } = render(<PlayerList/>);
  expect(container).toBeInTheDocument();
});