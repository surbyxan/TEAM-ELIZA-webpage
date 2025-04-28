import { Logo } from "./logo";
import '../App.css'

export function Footer() {
	return (
		<div className='footer'>
			<div className="italic text-center h-10 gap-50">
		  		More Questions? Reach us on mail! 
				<a href="mailto:teameliza@proton.me"> teameliza@proton.me </a>
			</div>
			{/* <div className="absolute right-0 justify-end">
				<Logo />
			</div> */}
		</div>
	)
}