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
            <p>Team Eliza is a project group that is producing a webapplication for synchronizing drones. We consist of 
              2nd year ICT engineering students that study at KTH. The project started the 27th of March and will continue development in 
              three sprints and be finished 16th of May.
            </p>
          </div>
          <div class='appbox'>
            <h3 class="title">Drone<span class="highlight">Zone</span></h3>
            <p>
            DroneZone is the webapplication for synchronizing and viewing currently 
            active and flying drones in Sweden. With the application you can easily fly your drone without
            interuptning other airbourne objects.

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
                We have started the development on the application and are in
                the beginning of our frist sprint out of three. The basic application structure are done 
                and we are in the progress of designing and implementing the foundation of our ideas.
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
