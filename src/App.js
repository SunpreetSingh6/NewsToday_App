// import './App.css';

// function App() {
//   return (
//     <>
//     Hello This is a simple news app
//     </>
//   );
// }

// export default App;

import React, { Component } from 'react'
import NavBar from './Components/NavBar'
import News from './Components/News'
import {
  BrowserRouter as Router,
  // Switch,
  Route,
  //  Link,
  Routes
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {

  apiKey = process.env.REACT_APP_NEWS_API_KEY
  //apiKey = "f74f08c496ec4751bdb9e6c7807c4658"
  state = {
    progress : 0
  }

  setProgress = (prog)=>{
    this.setState({
      progress : prog
    })
  }

  render() {
    return (
      <div>

        {/* <News setProgress={this.setProgress} apiKey={this.apiKey}  pageSize={8} country="in" category="science" /> */}
        <Router>
          <NavBar />
          <LoadingBar color='#f11946' progress={this.state.progress} height={3} />
          <Routes>
            {/* <Route  path="/about" element={ <News setProgress={this.setProgress} apiKey={this.apiKey}  setProgress={this.progress}  pageSize={8} country="in" category="science" /> } /> */}
            <Route path="/" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="general" pageSize={8} country="in" category="general" />} />
            <Route path="/business" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="business" pageSize={8} country="in" category="business" />} />
            <Route path="/entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="entertainment" pageSize={8} country="in" category="entertainment" />} />
            {/* <Route path="/general" element={ <News setProgress={this.setProgress} apiKey={this.apiKey}  pageSize={8} country="in" category="general" /> } /> */}
            {/* Comment it because general will be default category */}
            <Route path="/health" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="health" pageSize={8} country="in" category="health" />} />
            <Route path="/science" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="science" pageSize={8} country="in" category="science" />} />
            <Route path="/sports" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="sports" pageSize={8} country="in" category="sports" />} />
            <Route path="/technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="technology" pageSize={8} country="in" category="technology" />} />
 
            <Route path="/austrailia" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="austrailia" pageSize={8} country="au" category="general" />} />
            <Route path="/india" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="india" pageSize={8} country="in" category="general" />} />
            <Route path="/canada" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="canada" pageSize={8} country="ca" category="general" />} />
            <Route path="/china" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="china" pageSize={8} country="cn" category="general" />} />
            <Route path="/france" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="france" pageSize={8} country="fr" category="general" />} />
            <Route path="/japan" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="japan" pageSize={8} country="jp" category="general" />} />
            <Route path="/newzealand" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="newzealand" pageSize={8} country="nz" category="general" />} />
            <Route path="/unitedstates" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="unitedstates" pageSize={8} country="us" category="general" />} /> 

          </Routes>
        </Router>


      </div>
    )
  }
}

//  Refer below link for app style
// https://deadline.com/2022/01/kanye-west-pete-davidson-new-song-threatens-beat-davidson-ass-1234913320/  