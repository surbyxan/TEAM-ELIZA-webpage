import '../App.css'
import { Teammember } from './teammember'

export function Mainpage() {
	return(
		<div className='mainbody'>
			<div className='infobox'>
				<div >
					<h3 className="headers">About us</h3>
					<p className='mt-4 mb-4'>Team Eliza is a project group developing a web application for synchronizing drones. 
					We consist of second-year ICT engineering students studying at KTH.
					The project started on March 27th and will continue development over three sprints,
					concluding on May 16th.
					</p>
				</div>
					<div className='appbox'>
						<h3 className="headers">Drone<span className="text-primary-yellow">Zone</span></h3>
						<p className='mt-4 mb-4 '>
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
					<h4 className='font-bold mt-5 mb-3' >Latests news from DroneZone</h4>
					<p className="font-bold text-sm mt-2 mb-1" >May 14th</p>
					<p className="text-sm mb-4">
					It is the final day of sprint work for the whole project. 
					DroneZone is up and running with a functioning backend. Today, we are focusing on fixing
					the final issues, reviewing feedback, and prepping for 
					the final demo and expo at the end of this week!
					</p>
					<p className="font-bold text-sm mt-3 mb-1" >May 7th</p>
					<p className="text-sm mb-3">
					We've begun the final sprint of this project. During this phase, 
					our main focus is on drone functionality. The sprint goal is to enable users
					 to see their own drones and other flying drones on the map. 
					 We'll also be making a few final tweaks and improvements to polish and wrap up DroneZone!
					</p>
					<p className="font-bold text-sm mt-3 mb-1 md:hidden" >April 17th</p>
					<p className="text-sm mt-1 mb-4 md:hidden">
					We have just completed our second sprint, and the application now has
					basic functionality with a nice UI. The application stores forbidden fly 
					zones in our new database, and all users have full functionality for storing 
					user data and devices. Next up is storing every flight path in the database and 
					viewing other users on the map.
					</p>
					<p className="font-bold text-sm mt-3 mb-1 md:hidden" >April 10th</p>
					<p className="text-sm mt-1 mb-4 md:hidden">
					The second sprint has started. In this sprint, the focus is on the backend and database.
					In the last sprint, we accomplished our sprint goal by building the webpage, 
					which is now deployed and up and running.
					We are continuing the good work and are working towards
					having a functioning database and backend integrated with our frontend.
					</p>
					<p className="font-bold text-sm mt-3 mb-1 md:hidden" >March 27th</p>
					<p className="text-sm mt-1 mb-4 md:hidden">              
					We have started the development of the application and are at the beginning of our first 
					sprint out of three. The basic application structure is done, and we are in the process of 
					designing and implementing the foundation of our ideas.
					</p>
				</div>
        	</div>
    	 </div>  
	)

}