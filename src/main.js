import {useState} from "react"

const Main=()=>{
// ......FUNCTINALITY......
const[data,setdata]=useState([])

const handleone=()=>{
    setdata(data+"1")
}
const handletwo=()=>{
    setdata(data+"2")
}
const handlethree=()=>{
    setdata(data+"3")
}
const handlefour=()=>{
    setdata(data+"4")
}
const handlefive=()=>{
    setdata(data+"5")
}
const handlesix=()=>{
    setdata(data+"6")
}
const handleseven=()=>{
    setdata(data+"7")
}
const handleeight=()=>{
    setdata(data+"8")
}
const handlenine=()=>{
    setdata(data+"9")
}
const handleminus=()=>{
    setdata(data+"-")
}
const handleequal=()=>{
    setdata(eval(data))
}
const handleplus=()=>{
    setdata(data+"+")
}
const handlemulti=()=>{
    setdata(data+"*")
}
const handlediv=()=>{
    setdata(data+"/")
}
const handlezero=()=>{
    setdata(data+"0")
}
const handledot=()=>{
    setdata(data+".")
}
const handleclear=()=>{
    setdata("")
}

    return(
        <>
        <div className="main">
        <div className="container">
            <div className="claculator"><h1 >Calculator</h1></div>
            <div className="input">
            <input style={{width:"380px",height:"25px"}} type="text" id="calc" value={data} name="calc"/>
           <button style={{margin:"0px 0px 0px 7px",backgroundColor:"blue",color:"white",borderStyle: "none",height:"30px",width:"30px"}} onClick={handleclear}>C</button>
</div>
            <div>
                <table className="tb">
                    <tr>
                        <td>
                            <button className="btn" onClick={handleone}>1</button>
                            <button className="btn" onClick={handletwo}>2</button>
                            <button className="btn"onClick={handlethree}>3</button>
                            <button className="side-btn" onClick={handlediv}>/</button>
                        </td>
                    </tr>
                    
                    <tr>
                        <td>
                            <button className="btn" onClick={handlefour}>4</button>
                            <button className="btn" onClick={handlefive}>5</button>
                            <button className="btn" onClick={handlesix}>6</button>
                            <button className="side-btn" onClick={handleminus}>-</button>
                        </td>
                    </tr>
                   
                    <tr>
                        <td>
                            <button className="btn" onClick={handleseven}>7</button>
                            <button className="btn" onClick={handleeight}>8</button>
                            <button className="btn" onClick={handlenine}>9</button>
                            <button className="side-btn" onClick={handleplus}>+</button>
                        </td>
                    </tr>
                    
                    <tr>
                        <td>
                            <button className="btn" onClick={handledot}>.</button>
                            <button className="btn" onClick={handlezero}>0</button>
                            <button className="btn"onClick={handleequal}>=</button>
                            <button className="side-btn" onClick={handlemulti}>*</button>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
        </div>
        </>
    )
}
export default Main