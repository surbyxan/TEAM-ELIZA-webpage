import '@/App.css'
import './component.css'
import { useNavigate } from "react-router";

export function Header() {
	const navigate = useNavigate();
	
	return(
		<div className="rounded-sm border-b-2 border-b-black border-t border-t-black shadow-[0_4px_5px_rgba(0,0,0,0.5)] pl-8 bg-white flex flex-row">
        	<h1 className="text-5xl mt-9 mb-9">
				TEAM<span className="text-primary-yellow">ELIZA</span>
			</h1>
        	<div className="flex items-center gap-4">
				<div className="flex items-center mr-10 h-12 bg-gray-200 rounded-2xl">
					<button
					className="text-gray-700 bg-transparent ml-2 font-bold text-sm p-2 w-16 hover:scale-107 transition-all duration-200"
					onClick={() => navigate("/")}
					>
						Home
					</button>
					<button
					className="text-gray-700 bg-transparent ml-2 font-bold text-sm p-2  w-16 hover:scale-107 transition-all duration-200"
					onClick={() => navigate("/expo")}
					>
						Expo
					</button>

				</div>
			</div>
      	</div>
	)
}