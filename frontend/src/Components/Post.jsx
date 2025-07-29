import {useState} from 'react';

function Post(){
    const [postText, setPostText] = useState('')
        
       
  

    return (
       <div className= "accountName" >
            <div className="post-entry">
                <input type="text" value={setPostText} onChange={handleChange}/>
                <p>{postText}</p>
            </div>
       </div>
    )
}