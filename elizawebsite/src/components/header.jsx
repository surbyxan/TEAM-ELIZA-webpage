import '@/App.css'

export function Header() {
	return(
		<div className="topbar">
        	<h1 className="headers">TEAM <span className="highlight">ELIZA</span></h1>
        		<span className='contactbox'>
          			<button>
           	 			<a href="mailto:teameliza@patron.me" className="btn2"><span className="spn2">Contact Us</span></a>
         			 </button>
         		</span>
      	</div>
	)
}