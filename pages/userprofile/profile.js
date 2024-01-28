import { useEffect,useState } from "react"

function Profile(){
const [user,setUser]=useState()
useEffect(() => {
    // localStorage'dan kullanıcı bilgilerini al
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      // Eğer localStorage'da kullanıcı bilgisi varsa, JSON parse yaparak state'e set et
      setUser(JSON.parse(storedUser));
    }
  }, [])
    return(
        <div className="grid grid-cols-2 w-full p-4 box-border">
<div className="bg-[#F0F0F0] w-[50%] h-[100vh] rounded-[10px] flex flex-col">
<div className="flex items-center justify-center">

</div>
<div className="flex">
<h1>{user}</h1>
</div>
</div>
        </div>
    )
}
export default Profile