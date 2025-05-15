import { TbDrone } from "react-icons/tb";
import '../App.css'

export function ExpoContent() {
	return(
		<div className="flex flex-col sm:flex-row  gap-8 mt-3 ">
			<div className="ml-10 w-8/10 sm:w-1/3 flex flex-col ">
				<div >
					<h3 className="headers">Expo Info</h3>
					<p className="text-center sm:text-left ">
						The expo for DroneZone will take place at KTH Kista. During the expo
						you will have the chance to talk with our developers, test the 
						application and ask all the questions that you have about DroneZone!
					</p>
				</div>
				<div className="mt-6">
					<h3 className="headers">Time and Place</h3>
					<p className="text-center sm:text-left">The Expo will take place on the <span className="font-semibold">May 16th from 10.30 through 15.30. </span>
					The place for the expo is <span className="font-semibold">Kistagången 16, KTH Kista Electrum. </span>
					</p>
				</div>
			</div>
			<div className="flex flex-col sm:flex-row ml-10 w-8/10 sm:w-2/3 ">
			<div className="flex flex-col w-full sm:w-1/3">
				<div className="" >
					<h3 className="headers">Zoom link</h3>
					<p className="text-center sm:text-left">
						If you're not able to visit the expo, join us on zoom for a virtual expo! 
						<span><a className="text-primary-yellow"  href="https://kth-se.zoom.us/j/67893384260"> Zoom Link</a></span>
						. 
					</p>
				</div>
				<div>
				<h3 className="flex items-center justify-center font-bolder italic mt-8 mb-4 sm:justify-start">Drone<span className="text-primary-yellow mr-1">Zone</span><TbDrone/></h3>
					<p className="text-center sm:text-left">Visit <a href="https://www.dronezone.se/">DroneZone</a> to try out the application! 
					For the true dronezone experience make sure to make a account, add a drone, draw your flight path and launch the 
					imaginatory drone!
					</p>
				</div>
			</div>
				<div className="ml-7 w-full sm:w-1/2">
					<h3 className="flex items-center justify-center w-full font-bolder italic mt-8 mb-4 sm:justify-start">Technical Description</h3>
						<p className="text-center sm:text-left">
						DroneZone is the outline of an Unmanned Traffic Management (UTM) system for Unmanned Aircraft; particularly drones.
						The project manages real-time aircraft tracking, identification and accountability according to the regulations for unmanned aircraft in place by the Swedish Ministry of Transport.
						The fullstack web-application uses multiple technologies to enable reliable bi-directional connection and accurate data transfer between all active users to the central control server.
						</p>
				</div>
			</div>
		</div>
	)
}