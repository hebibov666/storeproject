import Profile from "./profile"

function Layout({children}){
    const width = typeof window !== 'undefined' ? window.innerWidth : 0;
    return(
        <div className="flex flex-col">
{width<=480 ? null : 
<Profile/>}
{children}
        </div>
    )
}
export default Layout