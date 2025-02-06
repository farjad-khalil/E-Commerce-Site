import Button from "../components/Button"
import { useNavigate } from "react-router"
function Home() {
  const navigate = useNavigate();
  const handleClick = ()=>{
    navigate('/featured_products')
  }
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-[500px]">
        <div className="text-6xl font-bold text-center">
          Discover the Best Deals
        </div>
        <div className="text-lg text-center text-gray-500">
          Shop the latest styles, gadgets, and essentials—all in one place
        </div>
        <div className="mt-4">
          <Button text="Featured Products" E_classes="w-45 h-10" onClick={handleClick}/>
        </div>
      </div>

    </>
  )
}

export default Home
