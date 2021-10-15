import React from 'react';
import '@testing-library/jest-dom';
import {render, screen, waitFor} from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import MutationObserver from 'mutationobserver-shim';

import Article from './Article';

const testArticle =
    {
        id: 'aMqwd', //unique article id
        headline: "headline", //title of article
        createdOn: '2021-08-09T18:02:38-04:00 ', //timestamp of when article was added
        author:'Bob',
        summary: "summary", //short summary statement of article
          body: ""  //paragraph of article text
    }
const testArticleWithOutAuthor =
    {
        id: 'aMqwd', //unique article id
        headline: "headline", //title of article
        createdOn: '2021-08-09T18:02:38-04:00 ', //timestamp of when article was added
        author:'',
        summary: "summary", //short summary statement of article
          body: ""  //paragraph of article text
    }

test('renders component without errors', ()=> {
    render(<Article id={564678935} article={'something'} />)
    
});

test('renders headline, author from the article when passed in through props', ()=> {
    render( <Article key={testArticle.id} article={testArticle} />);
    const headline=screen.queryByText(/headline/i);
    const author=screen.queryByText(/Bob/i)
    expect(headline).toBeInTheDocument()
    expect(author).toBeInTheDocument()
});

test('renders "Associated Press" when no author is given', ()=> {
    render(<Article key={testArticleWithOutAuthor.id} article={testArticleWithOutAuthor} />)
    const defaultAuthor=screen.queryByText(/Associated Press/i)
    expect(defaultAuthor).toBeTruthy()
});

// test('executes handleDelete when the delete button is pressed', ()=> {
// });

//Task List:
//1. Complete all above tests. Create test article data when needed.