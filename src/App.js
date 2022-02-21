import './App.css';
import { Route, Link} from "react-router-dom";
import HomeScreen from './components/HomeScreen';
import Sauces from './rawData/hotSaucesData.json';
import NextBatch from './components/NextBatch'
//import Order from "./components/Order";
import LeaveATip from "./components/LeaveATip";


const App = () => {
  
  const sauceData = Sauces

  return (
    <body>
      <div>
        <h1 class="title">Prometheus Hot Sauce</h1>
        <h3 class="title">Bring some fire to your life</h3>
      </div>
      <nav>
        <ul><Link to="/">Home</Link></ul>
        <ul><Link to="/next-batch-notes">Next Batch</Link></ul>
        {/*<ul><Link to="/order">Pick Your Fire!</Link></ul>*/}
        <ul><Link to="/tip">Leave A Tip!</Link></ul>
      </nav>
      <div>
        <Route exact path="/" render={() => {
          return <HomeScreen sauces={sauceData.sauces}/> 
        }}/>
        <Route exact path="/next-batch-notes" render={() => {
          return <NextBatch sauces={sauceData['next-batch']}/>
        }}/>
        {/*<Route path="/order" render={() => {
          return <Order />
        }}/>*/}
        <Route exact path="/tip" render={()=> {
          return <LeaveATip />
        }}/>
      </div>
      <span class='title'>
        Questions? Send us a message at prometheushotsauce@gmail.com
      </span>
    </body>
  );
}

export default App;
