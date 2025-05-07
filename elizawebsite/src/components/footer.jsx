import { Logo } from "./logo";
import '../App.css'

export function Footer() {
	return (
		<div className='footer'>
			<div className="italic text-left h-10 gap-50 pt-3">
		  		More Questions? Reach us on mail! 
				<a href="mailto:teameliza@proton.me"> teameliza@proton.me </a>
			</div>
			<div className="absolute right-0 flex justify-end pr-10 pb-4">
				<Logo />
			</div>
		</div>
	)
}