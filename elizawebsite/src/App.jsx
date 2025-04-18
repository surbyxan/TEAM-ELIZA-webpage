import './App.css'
import { Teammember } from './components/teammember'
import './components/component.css'

function App() {

  return (
   <div>
      <div className="topbar">
        <h1 className="headers">TEAM <span className="highlight">ELIZA</span></h1>
        <span className='contactbox'>
          <button>
            <a href="mailto:teameliza@patron.me" className="btn2"><span className="spn2">Contact Us</span></a>
          </button>
         </span>
      </div>
      <div className='mainbody'>
        <div className='infobox'>
          <div >
            <h3 className="headers">About us</h3>
            <p>Team Eliza is a project group developing a web application for synchronizing drones. 
              We consist of second-year ICT engineering students studying at KTH.
              The project started on March 27th and will continue development over three sprints,
              concluding on May 16th.
            </p>
          </div>
          <div className='appbox'>
            <h3 className="title">Drone<span className="highlight">Zone</span></h3>
            <p>
            DroneZone is a web application for synchronizing and monitoring active, 
            flying drones in Sweden. With this application, you can easily fly your drone
            without interrupting other airborne objects.
            Checkout our website at <a href='https://dronezone.se'>DroneZone!</a>
            </p>
          </div>
        </div>
        <div className='visualbox'>
          <div className='teambox'>
            <h3 className="headers">TEAM MEMBERS</h3>
            <span>
              <Teammember></Teammember>
            <p className="teamelizatext">We are Team Eliza!</p>
            </span>

          </div>
          <div className='newsbox'>
              <h4>Lastets news from DroneZone</h4>
              <p className="date" >April 17th</p>
              <p>
              We have just completed our second sprint, and the application now has
              basic functionality with a nice UI. The application stores forbidden fly 
              zones in our new database, and all users have full functionality for storing 
              user data and devices. Next up is storing every flight path in the database and 
              viewing other users on the map.
              </p>
          </div>
        </div>
      </div>  
          <div className='contactinfo'>
              <span className="mailtext">
                More Questions? Reach us on mail! 
              <a href="mailto:teameliza@proton.me"> teameliza@proton.me </a>
              </span>
          </div>
   </div>
  )
}

export default App
