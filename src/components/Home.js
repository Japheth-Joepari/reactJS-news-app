import React, {Component} from 'react';
import './alpha.css'



class Home extends Component{
    render(){
        return(
            <div className="ctn-head">
            <div className="dropdown">
                <button className="dropbtn">News</button>
            </div>

            <div className="dropdown">
                <button className="dropbtn">Tech</button>
            </div>

            <div className="dropdown">
                <button className="dropbtn">Travel</button>
            </div>

            <div className="dropdown">
                <button className="dropbtn">World News</button>
                <div className="dropdown-content">
                <a href="">Africa</a>
                <a href="">Asia</a>
                <a href="">Europe</a>
                <a href="">south America</a>
                <a href=''>North America</a>
                <a href=''>Australia</a>
                <a href=''>Antarctica</a>
            </div>
            </div>

            <div className="dropdown">
                <button className="dropbtn">Tech</button>
            </div>

            <div className="dropdown">
                <button className="dropbtn">Fashion</button>
            </div>

            <div className="dropdown">
                <button className="dropbtn">sports</button>
                <div className="dropdown-content">
                <a href="#">Football</a>
                <a href="#">Boxing</a>
                <a href="#">Other sports</a>
            </div>
            </div>

            <div className="dropdown">
                <button className="dropbtn">Entertainment</button>
            </div>

            <div className="dropdown">
                <button className="dropbtn">Politics</button>
            </div>

            <div className="dropdown">
                <button className="dropbtn">Our community</button>
            </div>

        <div className='inp'>
        <input type='text' placeholder='search'></input>
        </div>


        </div>

        )
    }
}
export default Home;