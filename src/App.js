
import './App.css';
import Campaign from './Components/Campaign/Campaign';
import Sidebar from './Components/Sidebar/Sidebar';
import {Route,Switch} from 'react-router-dom'
function App() {
  return (
    <div className="App">
   <Sidebar  />
   <Switch>
   <Route exact path="/" component={Campaign}/>
   <Route path="/campaign" component={Campaign}/>
   <Route path="/get-started" />
   <Route path="/templates" />
   <Route path="/integrations" />
   <Route path="/manage-settings" />
   <Route path="/settings" />
   <Campaign />
   </Switch>
    </div>
  );
}

export default App;
