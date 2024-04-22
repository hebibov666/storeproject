import { useEffect, useState } from "react"
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import axios from "axios"
function SearchFilter() {
    const [active, setActive] = useState(false)
    const [model, setModel] = useState("Choose model")
    const [brand, setBrand] = useState(null)
    const [make, setMake] = useState("Choose make")
    const [cars, setCars] = useState([])
    const getCars = async () => {
        const result = await axios.get("https://mocki.io/v1/9327f1ff-c651-4ddc-bf8a-b7cee5348b46")
        setCars(result.data)
        console.log(cars)
    }
    useEffect(() => {
        getCars()
    }, [])
    const openSelect = () => {
        setActive(active === false ? true : false)
    }

    const change = (el) => {
        el.currentTarget.classList.toggle("red")
    }
    const text = (e, index) => {
        setModel(e.currentTarget.textContent)
        setBrand(index)
    }

    const selectMake = (e) => {
        setMake(e.currentTarget.textContent)
    }


    return (
        <div className="w-[20%] p-[10px] flex flex-col gap-[15px] items-center">
            <div onClick={(e) => { change(e) }} className="select-container transition-all duration-500 w-[200px] h-[40px] overflow-hidden">
                <div className="bg-[#1F1F1F]  select-header relative border-[1px] flex justify-between rounded-[5px] border-[#252525] p-[5px]">
                    <h1 className="text-[#E6E6E6]">{model}</h1>
                    <ArrowDropDownIcon  className="absolute h-full w-[30px] text-[#E6E6E6] right-0 top-0" />
                </div>
                <ul className={`select-body bg-[#1F1F1F] transition-all duration-500 border-l-0 border-[1px] border-[#252525] scroll rounded-[5px]  mt-2 h-[300px] overflow-y-scroll`}>
                    {cars?.map((car, index) => {
                        return <li className="hover:bg-[#000000] text-[#E6E6E6] rounded-r-[10px] h-[40px] p-[5px]" onClick={(e) => { text(e, index) }}>{car.brand}</li>
                    })}
                </ul>
            </div>
            {/*Second select dropdown */}
            <div onClick={(e) => { change(e) }} className="select-container transition-all duration-500 w-[200px] h-[40px] overflow-hidden">
                <div className="bg-[#1F1F1F] select-header relative border-[1px] flex justify-between rounded-[5px] border-[#252525] p-[5px]">
                    <h1 className="text-[#E6E6E6]">{make}</h1>
                    <ArrowDropDownIcon className="text-[#E6E6E6] absolute h-full w-[30px] right-0 top-0" />
                </div>
                <ul className={`select-body bg-[#1F1F1F] border-l-0 border-[1px] border-[#252525] scroll rounded-[5px]  mt-2 h-[300px] overflow-y-scroll`}>
                    {cars[brand]?.models?.map(model => {
                        return <li onClick={(e) => { selectMake(e) }} className="hover:bg-[#000000] rounded-r-[10px] text-[#E6E6E6] h-[40px] p-[5px]">{model}</li>
                    })}
                </ul>
            </div>
        </div>
    )
}
export default SearchFilter
