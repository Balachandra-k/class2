import React,{useState} from "react";

// Login Component

const LoginFrom = (props) => {
    return(
        <div className="from">
            <form>
                <fieldset>
                    <legend>Login From</legend>
                    <div className="row">
                        <label htmlFor="user">User Name</label>
                        <input type="text" name="user" id="user"required/>
                    </div>
                    <div className="row">
                        <label htmlFor="pass">Password</label>
                        <input type="password" name="pass" id="pass" required/>

                    </div>
                    <div className="row">
                        <input type="submit" value= "login" className="btn"/>
                    </div>
                </fieldset>
            </form>
        </div>
    )
}

//register Component

const Register = (props) =>{
    return(
        <div className="from">
            <form>
                <fieldset>
                    <legend>Register From</legend>
                    <div className="row">
                        <label htmlFor="user">Username</label>
                        <input type="text" name="user" id="user" required/>
                    </div>
                    <div className="row">
                        <label htmlFor="pass">Password</label>
                        <input type="password" name="pass" id="pass" required/>
                        
                    </div>
                    <div className="row">
                        <input type="submit" value= "Register" className="btn"/>
                    </div>
                </fieldset>
            </form>
        </div>
    )
}

const Ex6 = (props) =>{
    //const [state,handler] = useState(intitial value)

    const [view,setView] = useState(false)

    const balu = () =>{
        if(view){
            setView(false) /*register*/
        }else {
            setView(true) /*Login */
        }
    }

    return(
        <div>
            <h3>State handler </h3>
            <button onClick={balu} className="btn">{view? "Register" : "login"}</button>
            <section>
                {
                    view? <LoginFrom/> : <Register/>
                }
            </section>
        </div>
    )
 }
 export default Ex6