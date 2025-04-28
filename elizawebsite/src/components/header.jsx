import '@/App.css'
import './component.css'
import { useNavigate } from "react-router";

export function Header() {
	const navigate = useNavigate();
	
	return(
		<div className="topbar">
        	<h1 className="text-5xl mt-9 mb-8 w-7/10">
				TEAM <span className="text-primary-yellow">ELIZA</span>
			</h1>
        	<div className='flex items-center'>
				<div className="flex items-center mr-10 h-12 bg-gray-200 rounded-2xl ">
					<button
					className="text-gray-700 bg-transparent ml-2 font-bold text-sm p-1 w-16 hover:scale-107 transition-all duration-200"
					onClick={() => navigate("/")}
					>
						Home
					</button>
					<button
					className="text-gray-700 bg-transparent mr-2 font-bold text-sm p-1 w-16 hover:scale-107 transition-all duration-200"
					onClick={() => navigate("/expo")}
					>
						Expo
					</button>

				</div>
			</div>
      	</div>
	)
}