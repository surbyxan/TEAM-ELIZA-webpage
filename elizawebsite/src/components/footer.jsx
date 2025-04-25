import { Logo } from "./logo";

export function Footer() {
	return (
		<div className='flex border-t-[1.5px] border-t-black pt-5 pb-5 pl-8 mt-7 bottom-0 absolute w-full items-center'>
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