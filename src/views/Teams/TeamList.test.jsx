import { render } from '@testing-library/react';
import TeamList from './Team.List';

it('should render PokeList component', ()=> {
  const { container } = render(<TeamList/>);
  expect(container).toBeInTheDocument();
});