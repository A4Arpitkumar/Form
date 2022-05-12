import './App.css';
import './form.css';
import {useState} from 'react';

 

function App() {

  const [maindata,setmaindata] = useState([])
  const [name,getname] = useState([]);
  const [contact,getcontact] = useState([]);
  const [email,getemail] = useState([]);
  const [hobby,gethobby] = useState([]);
  const [city,getcity] = useState([]);  
  const [state,getstate] = useState([]);
  const [country,getcountry] = useState([]);
  const [editdata,seteditdata] = useState(false);
  const [editdata1,seteditdata1] = useState('');

 

  // const [userdetail,setuserdetails] = useState({name:"",contact:"",email:"",hobby:"",city:"",state:"",country:""})
 
   const formsave = () => {
     
      let obj = {
        name:name,
        contact:contact,
        email:email,
        hobby:hobby,
        city:city,
        state:state,
        country:country
      }
      if(editdata)
      {
        const updatedobject = maindata.map((user,ind)=>
        ind === editdata1 ? obj : user
        );
        setmaindata(updatedobject);
      }
      else{
          setmaindata([...maindata,obj]);
      }

      getname(" ");
      getcontact(" ");
      getemail(" ");
      gethobby(" ");
      getcity(" ");
      getstate(" ");
      getcountry(" ");
   }
   const deletehandler = (i) => 
   {
        maindata.splice(i,1);
        setmaindata([...maindata]); 
   }
   const edithandler = (i) =>{
        seteditdata(true);
        seteditdata1(i);

        const getdata = maindata[i];
        getname(getdata.name);
        getcontact(getdata.contact);
        getemail(getdata.email);
        gethobby(getdata.hobby);
        getcity(getdata.city);
        getstate(getdata.state);
        getcountry(getdata.country);
   }
  return (
    <div className="App">
      <div>
        <h1>FORM</h1>
      </div>
      <div>
     <form className='formborder'>
       <table align='center'> 
         <tr>
           <th>NAME : </th>
           <td>
             <input type="text" onChange={(a) => {getname(a.target.value)}} value={name} />
           </td>
         </tr>
         <tr>
           <th>CONTACT :</th>
           <td>
             <input type="text" onChange={(b) => {getcontact(b.target.value)}} value={contact}/>
           </td>
         </tr>
         <tr>
           <th>EMAIL :</th>
           <td>
             <input type="email" onChange={(c) => {getemail(c.target.value)}} value={email}/>
           </td>
         </tr>
         <tr>
           <th>HOBBY :</th>
           <td>
             <input type="text" onChange={(d) => {gethobby(d.target.value)}} value={hobby}/>
           </td>
         </tr>
         <tr>
           <th>CITY :</th>
           <td>
             <input type="text" onChange={(e) => {getcity(e.target.value)}} value={city}/>
           </td>
         </tr>
         <tr>
           <th>STATE :</th>
           <td>
             <input type="text" onChange={(f) => {getstate(f.target.value)}} value={state}/>
           </td>
         </tr>
         <tr>
           <th>COUNTRY :</th>
           <td>
             <input type="text" onChange={(g) => {getcountry(g.target.value)}} value={country}/>
           </td>
         </tr>
       </table>
     </form>
     <button onClick={formsave} >SUBMIT</button>
     </div>
     <br></br>
     <br></br>
     <div className='printdata'> 
       <table align="center">
         <tr>
           <td>id</td>
           <td>NAME </td>
           <td>CONTACT </td>
           <td>EMAIL </td>
           <td>HOBBY </td>
           <td>CITY </td>
           <td>STATE </td>
           <td>COUNTRY </td>
         </tr>
         {
           maindata.map((item,i)=>{
             return(
              <tr>
              <td>{i}</td>
              <td> {item.name}</td>
              <td> {item.contact}</td>
              <td> {item.email}</td>
              <td> {item.hobby}</td>
              <td> {item.city}</td>
              <td> {item.state}</td>
              <td> {item.country}</td>
              <td><input type="button" value="EDIT" onClick={()=>{edithandler(i)}}/></td>
              <td><input type="button" value="DELETE" onClick={()=>{deletehandler(i)}}/></td>
            </tr>
             )
           })
         }  
       </table>
     </div>
    </div>
  );
}

export default App;
