import Layout from "./layout"

function Favorites(){
    return(
       <Layout>
          <div className="flex pt-[10px] flex-col w-[80%] max-[571px]:w-full">
          <div className="bg-[#8A2BE2]  h-[50px] flex pl-4 items-center max-[571px]:h-[40px]">
                    <h1 className="text-white font-bold text-xl">Favorites</h1>
                </div>
          </div>
       </Layout>
    )
}
export default Favorites