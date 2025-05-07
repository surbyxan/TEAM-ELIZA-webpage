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
						<p className='mt-4 mb-4'>
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
					<h4 className='font-bold mt-5 mb-5' >Latests news from DroneZone</h4>
					<p className="font-bold text-sm mt-4 mb-4" >May 7th</p>
					<p className='mt-4 mb-4'>
					We've begun the final sprint of this project. During this phase, 
					our main focus is on drone functionality. The sprint goal is to enable users
					 to see their own drones and other flying drones on the map. 
					 We'll also be making a few final tweaks and improvements to polish and wrap up DroneZone!
					</p>
				</div>
        	</div>
    	 </div>  
	)

}