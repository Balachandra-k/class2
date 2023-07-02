import React,{useState} from "react";

  const Ex3 = function(props){
    const [x,setx] = useState(123)
    const [title,setTitle] = useState("welcome to react")
    const [view,setView] = useState(true)

    const[user,setUser] = useState({
        name : "raju",
        email :"raju@gmail.com",
        age :"23"
    })

 const [colors,setColors] = useState(['red','blue','grey'])

 return(
    <div>
        <h1>States in functional Component</h1>
        <h4>var x = {x}</h4>
            <h4>var title = {title}</h4>
            <h4>var bollen {view? "saytrue":" sayFlase"}</h4>
            <h4>{user.name},{user.age},{user.email}</h4>
            <hr/>

            
                <ul>
                    {
                        colors.map((item,index)=>{
                            return(
                            <li key = {index}>{index}{item}</li>
                            )
                        })
                    }
                </ul>
 
    </div>
 )
}
 export default Ex3