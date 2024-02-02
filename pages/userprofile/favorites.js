import Layout from "./layout"

function Favorites(){
    return(
       <Layout>
          <div className="flex flex-col w-[80%] max-[571px]:w-full">
          <div className="bg-white border-2 border-[#E2E2E2]  h-[50px] flex pl-4 items-center max-[571px]:h-[40px]">
                    <h1 className="text-black font-bold text-xl">Favorites</h1>
                </div>
          </div>
       </Layout>
    )
}
export default Favorites