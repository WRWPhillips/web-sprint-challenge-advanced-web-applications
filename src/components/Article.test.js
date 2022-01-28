import React from 'react';
import '@testing-library/jest-dom';
import { render, screen }  from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MutationObserver from 'mutationobserver-shim';

import Article from './Article';

const testArticle = {
  createdOn: 'now',
  image: 'https://images.unsplash.com/photo-1643390920099-93ed8d1b605d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=700&q=60',
  headline: 'big news',
  author: 'jj abrams',
  summary: 'summarized here',
  body: 'body of text'
}

test('renders component without errors', ()=> {
  render(<Article article={testArticle} />);
});

test('renders headline, author from the article when passed in through props', ()=> {
  const article = render(<Article article={testArticle}/>);

  const articleHeadline = screen.queryByTestId('headline');
  const author = screen.queryByTestId('author');

  expect(articleHeadline).toBeInTheDocument();
  expect(author).toBeInTheDocument();
});

test('renders "Associated Press" when no author is given', ()=> {
  const testArticleNullAuthor = {
    createdOn: 'now',
    image: 'https://images.unsplash.com/photo-1643390920099-93ed8d1b605d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=700&q=60',
    headline: 'big news',
    author: null,
    summary: 'summarized here',
    body: 'body of text'
  }

  render(<Article article={testArticleNullAuthor} />);

  const associatedPress = screen.queryByText(/associated press/i);

  expect(associatedPress).toBeInTheDocument();
  expect(associatedPress).toBeTruthy();
});

test('executes handleDelete when the delete button is pressed', ()=> {
  const handleDelete = jest.fn();
  render(<Article article={testArticle} handleDelete={handleDelete} />);

  const deleteButton = screen.queryByTestId('deleteButton');
  userEvent.click(deleteButton);

  expect(handleDelete).toBeCalled();

});

//Task List: 
//1. Complete all above tests. Create test article data when needed.
