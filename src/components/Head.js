import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';

const Head = () => {

  const dispatch = useDispatch();

  const toggleMenuHandler = () =>{
   dispatch(toggleMenu());
  }
   
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
        <div className="flex col-span-2">
            <img 
                onClick={() => toggleMenuHandler()}
                 className="h-8 cursor-pointer" 
                 alt="menu"
                 src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAARVBMVEX///8jHyAgHB0OBQgMAAWlpKQpJSaenZ309PUAAAAIAAD8/Pz5+fna2tqop6dvbW1oZmevrq4tKivFxMQYExRiYGC+vr7Dc4WrAAABB0lEQVR4nO3cS3LCMBAFQGIIIBPbhN/9jxqSyiIsTUnlydB9g1eSNV5MvdUKAAAAAAAAAAAAAAAAXtEwvscwDk3yHabSb2Loy/TRIOHUv8XRH+sHHMrSqR6U+hd1jHSE90P8lHC2/Lc0/0vzMy3WMdynxaFBwu+Jv4uh0cQHAAAAAAAAAIB59jG0ijdcT9sYTtcmK0PncumiuJRz/YD7bbf0ut4f3br+GvQt2PblrXrC3WbpUA/6sXrC/GeY/zvM/5aGmofHZiu0S//M/GoVDwAAAAAAAAAAZsjeuRerN1HL7hPy95fm76DNnzD/Lc3/0rxAJ3v+Xn0AAAAAAAAAAAAAAAD4T74AYhs1O+vt3ioAAAAASUVORK5CYII=" />
            <img className="h-8" 
                 alt="youtube-logo"
                 src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1200px-YouTube_Logo_2017.svg.png" />
        </div>
        <div className="col-span-8">
            <input className="w-1/2 border border-gray-500 rounded-l-full" type="text" />
            <button className="border border-gray-500 rounded-r-full bg-gray-200">Search</button>
        </div>
        <div>
            <img className="h-8 col-span-8" 
                 alt="user"
                 src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" />
        </div>
    </div>
  )
}

export default Head;