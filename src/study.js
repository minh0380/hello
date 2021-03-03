import React from 'react';

const title = 'React';
const welcome = {
    greeting: 'Hey',
    title: 'React',
};
const list = [
    {
        title: 'React',
        url: 'https://reactjs.org/',
        author: 'Jordan Walke',
        num_comments: 3,
        points: 4,
        objectID: 0,
    },
    {
        title: 'Redux',
        url: 'https://redux.js.org',
        author: 'Dan Abramov, Andrew Clark',
        num_comments: 2,
        points: 5,
        objectID: 1,
    },
];

function getTitle(title){
    return title;
}

//htmlFor는 HTML의 for 속성을 나타낸다.
//HTML 속성은 카멜 케이스 표기법을 따른다. ex)className, onClick
function Study(){
    return(
        <div>
            <h1>
                Hello {title}<br/>
                {welcome.greeting} {welcome.title}<br/>
                Hello {getTitle('REACT')}<br/>
                My HackerStories
            </h1>

            <label htmlFor="search">Search: </label>
            <input id="search" type="text"></input>
            <hr/>
            {list.map(function(item){
                return(
                    <div key={item.objectID}>
                        <span>
                            <a href={item.url}>{item.title}</a>
                        </span>
                        <span>{item.author}</span>
                        <span>{item.num_comments}</span>
                        <span>{item.points}</span>
                    </div>
                );
            })}
        </div>
    );
}

export default Study;