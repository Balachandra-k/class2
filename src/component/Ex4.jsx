import React from "react";

class Ex4 extends React.Component{
    constructor(props){
        super(props);
        //state
        this.state = {
            x : 123,
            y : 24,
            title : "welcome to string Example",
            view : false,
            colors : ['red','green','blue'],
            user :{
                name : "balu",
                email : "balu@gami.com",
                age : 24
            }

        }
    }
    render(){
        return(
            <div>
                <h3>States in class component</h3>
                <h3> x = {this.state.x}</h3>
                <h3> Y = { this.state.y}</h3>
                <h3> Title = {this.state.title}</h3>
                <h3> view = { this.state.view? "sayTrue": "sayFalse"}</h3>

                <hr/>
                <ol>
                    {
                        this.state.colors.map((item,index)=>{
                            return(
                                <li key = {index}>{item}</li>
                            )
                        })
                    }
                </ol>
                <hr/>
                <h3>user Name = {this.state.user.name}</h3>
                <h3>user eamil = {this.state.user.email}</h3>
                <h3>User age = {this.state.user.age}</h3>

            </div>
        )
    }
}
export default Ex4