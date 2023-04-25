import './index.css';
import { useState,useEffect } from 'react';
import axios from 'axios';

function App() {
  const [bmwandlowerfive,setBmwandlowerfive] = useState([]);
  const [maleandgreaterthanten,setMaleandgreaterthanten] = useState([]);
  const [lastname,setLastname]=useState([]);
  const [carbrand,setCarbrand] = useState([]);
  const [avg,setAvg] = useState([]);
 
  const [isVisible1,setIsvisible1] = useState(false);
  const [isVisible2,setIsvisible2] = useState(false);
  const [isVisible3,setIsvisible3] = useState(false);
  const [isVisible4,setIsvisible4] = useState(false);
  const [isVisible5,setIsvisible5] = useState(false);

  const toggleVisibility1 = () => {
    getbmw();
    setIsvisible1(true);
  };
  
  const togglehide1 = () => {
    setBmwandlowerfive([]);
    setIsvisible1(false);
  }

   const toggleVisibility2 = () => {
    getmale();
    setIsvisible2(true);
  };
  
  const togglehide2 = () => {
    setMaleandgreaterthanten([]);
    setIsvisible2(false);
  }

  const toggleVisibility3 = () => {
    getlastname();
    setIsvisible3(true);
  };
  
  const togglehide3 = () => {
    setLastname([]);
    setIsvisible3(false);
  }

  const toggleVisibility4 = () => {
    getcarbrand();
    setIsvisible4(true);
  };
  
  const togglehide4 = () => {
    setCarbrand([]);
    setIsvisible4(false);
  }

  const toggleVisibility5 = () => {
    getavg();
    setIsvisible5(true);
  };
  
  const togglehide5 = () => {
    setAvg([]);
    setIsvisible5(false);
  }

 
    const getbmw = async()=>{
      try{
           const res = await axios.get('http://localhost:3000/api/v1/create-bmw');
           setBmwandlowerfive(res.data);
           
      }catch(err){
        console.log(err);
      }
    }

   

    const getmale = async()=>{
      try{
        const res = await axios.get('http://localhost:3000/api/v1/create-male');
           setMaleandgreaterthanten(res.data);
      }catch(err){
          console.log(err);
      }
    }

    

    const getlastname = async()=>{
      try{
        const res = await axios.get('http://localhost:3000/api/v1/last-name');
           setLastname(res.data);
      }catch(err){
          console.log(err);
      }
    }
   
  


    const getcarbrand = async()=>{
      try{
        const res = await axios.get('http://localhost:3000/api/v1/car-brand');
           setCarbrand(res.data);
      }catch(err){
          console.log(err);
      }
    }
    
    

     const getavg = async()=>{
      try{
        const res = await axios.get('http://localhost:3000/api/v1/avg');
           setAvg(res.data);
      }catch(err){
          console.log(err);
      }
    }
    
   
    

 
  return (
    <>
    <div className='textpara'>
      <h1>Problem Assignment</h1>
    </div>
    
    <div className = "table-1">
      <h3>1. Users which have income lower than $5 USD and have a car of brand “BMW” or “Mercury”.</h3>
      <div className='btn'>

      
      <button onClick={toggleVisibility1} className="show">Clickme</button>
      <button onClick={togglehide1} className="hide">Hide</button>

      </div>
      <table className='table'>
        {isVisible1 && (
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Income</th>
            <th>City</th>
            <th>Car</th>
            <th>Quote</th>
            <th>Phone Price</th>
          </tr>
        </thead>
        )
}
        <tbody>
          {
            bmwandlowerfive.map((user)=>(
             
              <tr key = {user.id}>
                  
                <td>{user.id}</td>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>{user.email}</td>
                <td>{user.gender}</td>
                <td>{user.income}</td>
                <td>{user.city}</td>
                <td>{user.car}</td>
                <td>{user.quote}</td>
                <td>{user.phone_price}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
      
    </div>


    <div className='table-2'>
      <h3>2. Male Users which have phone price greater than 10,000.</h3>
      <div className='btn'>

      
      <button onClick={toggleVisibility2} className="show">Clickme</button>
      <button onClick={togglehide2} className="hide">Hide</button>

      </div>
        <table className='table'> 
        {isVisible2 && (
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Income</th>
            <th>City</th>
            <th>Car</th>
            <th>Quote</th>
            <th>Phone Price</th>
          </tr>
        </thead>
        )
}
        <tbody>
           {
            maleandgreaterthanten.map((user)=>(
             
              <tr key = {user.id}>
                  
                <td>{user.id}</td>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>{user.email}</td>
                <td>{user.gender}</td>
                <td>{user.income}</td>
                <td>{user.city}</td>
                <td>{user.car}</td>
                <td>{user.quote}</td>
                <td>{user.phone_price}</td>
              </tr>
            ))
          }
        </tbody>
       </table>

    </div>

    <div className='table-3'>
      <h3>3. Users whose last name starts with “M” and has a quote character length greater than 15 and email includes his/her last name.</h3>

       <div className='btn'>

      
      <button onClick={toggleVisibility3} className="show">Clickme</button>
      <button onClick={togglehide3} className="hide">Hide</button>

      </div>
              <table className='table'>
                { isVisible3 && (
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Income</th>
            <th>City</th>
            <th>Car</th>
            <th>Quote</th>
            <th>Phone Price</th>
          </tr>
        </thead>
                )
}
        <tbody>
           {
            lastname.map((user)=>(
             
              <tr key = {user.id}>                 
                <td>{user.id}</td>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>{user.email}</td>
                <td>{user.gender}</td>
                <td>{user.income}</td>
                <td>{user.city}</td>
                <td>{user.car}</td>
                <td>{user.quote}</td>
                <td>{user.phone_price}</td>
              </tr>
            ))
          }
        </tbody>

       </table>

    </div>


    <div className='table-4'>
      <h3>4. Users which have a car of brand “BMW”, “Mercedes” or “Audi” and whose email does not include any digit.</h3>
      <div className='btn'>

      
      <button onClick={toggleVisibility4} className="show">Clickme</button>
      <button onClick={togglehide4} className="hide">Hide</button>

      </div>
             <table className='table'>
              {
                isVisible4 && (
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Income</th>
            <th>City</th>
            <th>Car</th>
            <th>Quote</th>
            <th>Phone Price</th>
          </tr>
        </thead>
                )
}
        <tbody>
           {
            carbrand.map((user)=>(
             
              <tr key = {user.id}>                 
                <td>{user.id}</td>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>{user.email}</td>
                <td>{user.gender}</td>
                <td>{user.income}</td>
                <td>{user.city}</td>
                <td>{user.car}</td>
                <td>{user.quote}</td>
                <td>{user.phone_price}</td>
              </tr>
            ))
          }
        </tbody>
       </table>
    </div>


    <div className='table-5'>
       <h3>5. Show the data of top 10 cities which have the highest number of users and their average income.</h3>
       <div className='btn'>

      
      <button  onClick={toggleVisibility5} className="show">Clickme</button>
      <button  onClick={togglehide5} className="hide">Hide</button>

      </div>
           <table className='table'>
            {
            isVisible5 && (
        <thead>
          <tr>
            <th>City</th>
            <th>Count</th>
            <th>Average Income</th>
          </tr>
        </thead>
  )
}
        <tbody>
           {
            avg.map((user)=>(
             
              <tr key = {user._id}> 
                             
                <td>{user._id}</td>
                <td>{user.count}</td>
                <td>{Number(user.avgincome.$numberDecimal).toFixed(2)}</td>
                
              </tr>
            ))
          }

            
        </tbody>

       </table>
    </div>
    </>
  );
}

export default App;
