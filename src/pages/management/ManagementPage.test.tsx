import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ManagementPage from './ManagementPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ManagementPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});
