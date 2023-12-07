import React, { useEffect ,useState} from "react";
import './App.css';

function App() {
  let [link,setLink] = useState("");
  let [websiteName,setwebsitename] = useState("");
  let handleSubmit = async(event) =>{
    event.preventDefault();
    console.log(link);
    console.log(websiteName);
    let res = await fetch("/twitter?link="+link);
    console.log(await res.json());
  }
  
  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"}}>
      <div className='center-box'>
        <h1>Sentiment Analysis</h1>
        <div>
          <form className="AnalysisForm" onSubmit={handleSubmit}>
            <div>
            <input placeholder='Search for analysis' type="link" name='link' onChange={event=>{setLink(event.target.value)}}/>
            <select name='websiteName' onChange={e=>{setwebsitename(e.target.value)}}>
              <option value="">
                Choose One
              </option>
              <option value="Twitter">
                Twitter
              </option>
            </select>
            </div>
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
