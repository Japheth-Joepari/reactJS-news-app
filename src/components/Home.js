import React, {Component} from 'react';
import './alpha.css'



class Home extends Component{
    render(){
        return(
            <div className='ctn-head'>
            <div class="dropdown">
                <button class="dropbtn">News</button>
            </div>

            <div class="dropdown">
                <button class="dropbtn">Tech</button>
            </div>

            <div class="dropdown">
                <button class="dropbtn">Travel</button>
            </div>

            <div class="dropdown">
                <button class="dropbtn">World News</button>
                <div class="dropdown-content">
                <a href="#">Africa</a>
                <a href="#">Asia</a>
                <a href="#">Europe</a>
                <a href="*">south America</a>
                <a href=''>North America</a>
                <a href=''>Australia</a>
                <a href=''>Antarctica</a>
            </div>
            </div>

            <div class="dropdown">
                <button class="dropbtn">Tech</button>
            </div>

            <div class="dropdown">
                <button class="dropbtn">Fashion</button>
            </div>

            <div class="dropdown">
                <button class="dropbtn">sports</button>
                <div class="dropdown-content">
                <a href="#">Football</a>
                <a href="#">Boxing</a>
                <a href="#">Other sports</a>
            </div>
            </div>

            <div class="dropdown">
                <button class="dropbtn">Entertainment</button>
            </div>

            <div class="dropdown">
                <button class="dropbtn">Politics</button>
            </div>

            <div class="dropdown">
                <button class="dropbtn">Our community</button>
            </div>
            </div>

        )
    }
}
export default Home;