import React, { Component } from 'react'

export default class HigherOrderComponent extends Component {
    constructor(){
        super();
        this.state = {
            userData: [
                { id: '1', name: 'Joe', user_type: 'Developer', age:31, years:11 },
                { id: '2', name: 'Hill', user_type: 'Designer', age:26, years:4 },
                { id: '3', name: 'John', user_type: 'Teacher', age:24, years: 2},
                { id: '4', name: 'Sam', user_type: 'Entreprenuer', age:58,years:25},
                { id: '5', name: 'Jack', user_type: 'Designer', age:43, years: 18}

            ]
        }
    }
    // display all items
    renderItems = () => {
        const data = this.state.userData;
        const mapRows = data.map((item) => (
            <React.Fragment key={item.id}>
                <li className="list-elements">
                    {/* Passing unique value to 'key' prop, eases the process for virtual DOM to remove the specific element and update HTML tree  */}
                    <span>Id: {item.id}</span>
                    <span>Name : {item.name}</span>
                    <span>User Type: {item.user_type}</span>
            </li>
            </React.Fragment>
    ));
    return mapRows;
};
    //display items based on user type
    renderitemstypes =()=>{
        const data=this.state.userData;
        const filteritem=data.filter((item) => {
            if(item.user_type==='Designer'){
                return item;
            }
        })
        const filtereditems=filteritem.map((item)=>(
            <React.Fragment key={item.id}>
                <li className="list-elements">
                    <span>Id: {item.id}</span>
                    <span>Name : {item.name}</span>
                    <span>User Type: {item.user_type}</span>
                </li>
            </React.Fragment>
            
        ))
        return filtereditems;
        }
    // display data  starting with the letter
    renderlettertypes=()=>{
        const data=this.state.userData;
        const filterletter=data.filter((item) => {
            if(item.name.charAt(0)==='J'){
                return item;
            }
        })
        const filteredletter=filterletter.map((item)=>(
            <React.Fragment key={item.id}>
                <li className="list-elements">
                    <span>Id: {item.id}</span>
                    <span>Name : {item.name}</span>
                    <span>User Type: {item.user_type}</span>
                </li>
            </React.Fragment>
            
        ))
        return filteredletter;
        }
    
    // display data based on age
    renderagetypes=()=>{
        const data=this.state.userData;
        const filterletter=data.filter((item) => {
            if(item.age>28 && item.age<=50){
                return item;
            }
        })
        const filteredletter=filterletter.map((item)=>(
            <React.Fragment key={item.id}>
                <li className="list-elements">
                    <span>Id: {item.id}</span>
                    <span>Name : {item.name}</span>
                    <span>User Type: {item.user_type}</span>
                </li>
            </React.Fragment>
            
        ))
        return filteredletter;
        }
    
    // display data based on age
    renderexpereincetypes=()=>{
        const data=this.state.userData;
        const filterletter=data.reduce((count,item) => {
            if(item.user_type==='Designer'){
                count+=item.years
            }
            return count;
        },0)
        return filterletter
    }



  render() {
    return (
       // instead of a parent div tag, we can also use React.Fragment
       <React.Fragment>
       <h1>Display all items</h1>
       <div className="display-box">
       <ul>{this.renderItems()} </ul>
       </div>

       <h1>Display based on usertypes</h1>
       <div className="display-box">
       <ul>{this.renderitemstypes()} </ul>
       </div>

       <h1>Filter all data starting with J</h1>
       <div className="display-box">
       <ul>{this.renderlettertypes()} </ul>
       </div>

       <h1>Filter all data the data based on age greater than 28 and less than equal to 50</h1>
       <div className="display-box">
       <ul>{this.renderagetypes()} </ul>
       </div>

       <h1>Find the total years of expereince of Designer</h1>
       <div className="display-box">
       <span>{this.renderexpereincetypes()}</span>
       </div>
     </React.Fragment> 
    )
  }
}

