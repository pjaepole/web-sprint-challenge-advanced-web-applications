import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import View from './View';
const testArticles =[{
        id: 'aMqwd', //unique article id
        headline: "headline", //title of article
        createdOn: '2021-08-09T18:02:38-04:00 ', //timestamp of when article was added
        author:'Bob',
        summary: "summary", //short summary statement of article
          body: ""  //paragraph of article text
    },
    {
        id: 'aMqwdwert', //unique article id
        headline: "headline2", //title of article
        createdOn: '2021-08-09T18:02:38-04:04 ', //timestamp of when article was added
        author:'BobBob',
        summary: "summary2", //short summary statement of article
          body: ""  //paragraph of article text
    },
    {
        id: 'aMqwdwertqewrt', //unique article id
        headline: "headline3", //title of article
        createdOn: '2021-08-09T18:02:38-04:02 ', //timestamp of when article was added
        author:'BobBobBob',
        summary: "summary3", //short summary statement of article
          body: ""  //paragraph of article text
    }
]
    
test("renders zero articles without errors", async () => {
    render(<View articles={[]}/> )
});

test("renders three articles without errors", async ()=> {
    render(<View articles={testArticles}/>)
   const articles= await document.querySelectorAll(".articless");
    expect(articles).toHaveLength(3);
});

//Task List
//1. Complete the above two tests. Make sure to mocking the articleService call before rendering.