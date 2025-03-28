import './App.css'
import { Teammember } from './components/teammember'
import './components/component.css'

function App() {

  return (
   <div>
      <div class="topbar">
        <h1 class="headers">TEAM <span class="highlight">ELIZA</span></h1>
        <span class='contactbox'>
          <button>
            <a href="mailto:teameliza@patron.me" class="btn2"><span class="spn2">Contact Us</span></a>
          </button>
         </span>
      </div>
      <div class='mainbody'>
        <div class='infobox'>
          <div >
            <h3 class="headers">About us</h3>
            <p>Team Eliza is a project group developing a web application for synchronizing drones. 
              We consist of second-year ICT engineering students studying at KTH.
              The project started on March 27th and will continue development over three sprints,
              concluding on May 16th.
            </p>
          </div>
          <div class='appbox'>
            <h3 class="title">Drone<span class="highlight">Zone</span></h3>
            <p>
            DroneZone is a web application for synchronizing and monitoring active, 
            flying drones in Sweden. With this application, you can easily fly your drone
            without interrupting other airborne objects.
            </p>
          </div>
        </div>
        <div class='visualbox'>
          <div class='teambox'>
            <h3 class="headers">TEAM MEMBERS</h3>
            <span>
              <Teammember></Teammember>
            <p class="teamelizatext">We are Team Eliza!</p>
            </span>

          </div>
          <div class='newsbox'>
              <h4>Lastets news from DroneZone</h4>
              <p class="date" >March 27th</p>
              <p>
              We have started the development of the application and are at the beginning of our first 
              sprint out of three. The basic application structure is done, and we are in the process of 
              designing and implementing the foundation of our ideas.
              </p>
          </div>
        </div>
      </div>  
          <div className='contactinfo'>
              <span class="mailtext">
                More Questions? Reach us on mail! 
              <a href="mailto:teameliza@patron.me"> teameliza@patron.me </a>
              </span>
          </div>
   </div>
  )
}

export default App
