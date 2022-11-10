import React from 'react';

const Blog = () => {
    return (
        <div className='lg:px-28 py-12'>
            <div>
                <h2 className='text-4xl font-semibold'>Q1: Difference between SQL and NoSQL</h2>
                <div className='text-xl py-3'>
                    <p>1. SQL databases are relational, NoSQL databases are non-relational.</p>
                    <p>2. SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data.</p>
                    <p>3. SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.</p>
                    <p>4. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.</p>
                    <p>5. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p>
                </div>
            </div>
            <div>
                <h2 className='text-4xl font-semibold'>Q2: What is JWT, and how does it work?</h2>
                <div className='text-xl py-3'>
                    <p>What is JWT JSON Web Token? JSON Web Token JWT is an open standard RFC 7519 for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider IdP</p>
                </div>
            </div>
            <div>
                <h2 className='text-4xl font-semibold'>Q3: What is the difference between javascript and NodeJS?</h2>
                <div className='text-xl py-3'>
                    <p>Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance.</p>
                    <p>NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development.</p>
                </div>
            </div>
            <div>
                <h2 className='text-4xl font-semibold'>Q4: How does NodeJS handle multiple requests at the same time?</h2>
                <div className='text-xl py-3'>
                    <p>How NodeJS handle multiple client requests? NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them</p>
                </div>
            </div>
        </div >
    );
};

export default Blog;