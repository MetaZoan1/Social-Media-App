import NavBar from "../Components/NavBar"
import Post from "../Components/Post"
import {useState} from "react"

function Home(){
    const[userSearch, setUserSearch] = useState("");
    const searchAction = (e) => {
        e.preventDefault()
    }
    
    
    return(
    
    <div className= "Home">
        <form onSubmit={handleSearch} className= "search for user">
            <input type="text" placeholder= "search for users" className="search-input" value= {userSearch}
                onChange={(e) => setSearchQuery(e.target.value)}/>
            <button type="submit" className="searchButton">Search</button>
        </form>

    
    
    </div>

    )
}