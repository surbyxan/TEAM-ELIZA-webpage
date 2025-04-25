import './component.css'
import '../App.css'
import { Teammember } from './teammember'

export function Mainpage() {
	return(
		<div className='mainbody'>
			<div className='infobox'>
				<div >
					<h3 className="text-xl mt-5 mb-5">About us</h3>
					<p className='mt-4 mb-4'>Team Eliza is a project group developing a web application for synchronizing drones. 
					We consist of second-year ICT engineering students studying at KTH.
					The project started on March 27th and will continue development over three sprints,
					concluding on May 16th.
					</p>
				</div>
					<div className='appbox'>
						<h3 className="text-gray-700 font-bold text-xl mt-5 mb-5">Drone<span className="text-primary-yellow">Zone</span></h3>
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
					<h3 className="text-xl mt-5 mb-5">TEAM MEMBERS</h3>
					<span>
						<Teammember></Teammember>
						<p className="mt-4 mb-4 italic text-center">We are Team Eliza!</p>
					</span>
				</div>
				<div className='newsbox'>
					<h4 className='font-bold text-lj mt-5 mb-5' >Latests news from DroneZone</h4>
					<p className="font-bold text-sm mt-4 mb-4" >April 17th</p>
					<p className='mt-4 mb-4'>
					We have just completed our second sprint, and the application now has
					basic functionality with a nice UI. The application stores forbidden fly 
					zones in our new database, and all users have full functionality for storing 
					user data and devices. Next up is storing every flight path in the database and 
					viewing other users on the map.
					</p>
				</div>
        	</div>
    	 </div>  
	)

}