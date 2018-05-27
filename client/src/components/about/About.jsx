import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div>
        <section className="jumbotron text-center">
          <h1 className="jumbotron-heading my-3">About Student Larder</h1>
          <a href="https://www.github.com/09millarda" target="_blank" rel="noopener noreferrer"><button className="btn btn-primary">View my GitHub account</button></a>
        </section>
        <div className="bg-light">
          <div className="container">
            <br/>
            <h3>What is Student Larder?</h3>
            <p className="text-muted">Student Larder is a tool that allows people to search for recipes by entering ingredients they want to use up.</p>
            <br/>
            <h5>Where did the idea come about?</h5>
            <p className="text-muted">When I was at university I always had a load of weird ingredients that I had no idea what to do with. I didn't even remember buying most of them... Being a uni student, I wasn't a fan of wasting money nor food so I came up with this website.</p>
            <br/>
            <h5>Who am I?</h5>
            <p className="text-muted">Hi, I'm Alistair. I generally enjoy making things with code. In my free time (I am a software engineer by trade) I try and find a way of producing some of the ideas that I come up with. The only problem is that if I think up something I deem cool I completely abandon the thing I am currently working on. This means actually finishing anything is some sort of minor miracle... Inside of the computing world I am normally trying to learn new things. Recently it has been AI. The next project I work on will definitely be something to do with that.</p>
            <hr/>
            <h3>Student Larder's Technology</h3>
            <p className="text-muted" style={{ marginTop: '15px' }}>I've been trying out the React framework for the client-side of this application. It is super cool. I hadn't had too much experience with SPA frameworks in the past but it is most definitely the future of web-apps.</p>
            <p className="text-muted">Server-side; I decided to settle with Node JS. I am most comfortable with C# and the .NET frameworks so I decided to go out of my comfort zone a little bit. I like Node JS. I prefer the strict structuring of C# more than javascript (I know there are things like typescript for this) but I can see it being much more beneficial for smaller projects such as this one.</p>
            <p className="text-muted">Security is handled using JWT. It is the first time I have used this and it is awesome. It is easy to handle and, due to the extensive list of libraries available for node js, is extremely straightforward to set up. I decided on just using OAuth over having my own accounts system because I personally prefer the simplicity of it. You just click a button and you have signed up. None of this time-consuming filling in forms for a service you will likely use once or twice.</p>
            <br/>
          </div>
        </div>
      </div>
    );
  }
}

export default About;