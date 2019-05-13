import React from 'react';
import { connect } from 'react-redux';
import earthjpg from '../images/earth.jpg';
import lakejpg from '../images/lake.jpg';
import mountainjpg from '../images/mountain.jpg';

const Home = props => (
    <div>
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src={earthjpg} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                    <img src={lakejpg} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                    <img src={mountainjpg} class="d-block w-100" alt="..." />
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
        <div class="container" style={{marginTop: 15 + "px", marginBottom: 76 + "px",}}>
            <h1>Hello, world!</h1>
            <p>Welcome to your new single-page application, built with:</p>
            <ul>
                <li><a href='https://get.asp.net/'>ASP.NET Core</a> and <a href='https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx'>C#</a> for cross-platform server-side code</li>
                <li><a href='https://facebook.github.io/react/'>React</a> and <a href='https://redux.js.org/'>Redux</a> for client-side code</li>
                <li><a href='http://getbootstrap.com/'>Bootstrap</a> for layout and styling</li>
            </ul>
            <p>To help you get started, we've also set up:</p>
            <ul>
                <li><strong>Client-side navigation</strong>. For example, click <em>Counter</em> then <em>Back</em> to return here.</li>
                <li><strong>Development server integration</strong>. In development mode, the development server from <code>create-react-app</code> runs in the background automatically, so your client-side resources are dynamically built on demand and the page refreshes when you modify any file.</li>
                <li><strong>Efficient production builds</strong>. In production mode, development-time features are disabled, and your <code>dotnet publish</code> configuration produces minified, efficiently bundled JavaScript files.</li>
            </ul>
            <p>The <code>ClientApp</code> subdirectory is a standard React application based on the <code>create-react-app</code> template. If you open a command prompt in that directory, you can run <code>npm</code> commands such as <code>npm test</code> or <code>npm install</code>.</p>
        </div>
    </div>
);

export default connect()(Home);
