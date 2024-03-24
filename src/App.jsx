import { useState , useRef} from 'react'

let myStyle = {
  width : "70%",
  margin : "auto",
  border : "2px solid black",
  height : "200px"
}

function App() {

  let [color, setColor] = useState("")

  let alpha = "ABCDEFabcdef1234567890"
  let arr = alpha.split("")
  let clear;

  const handleChange = (event) => {
    
    if(clear){
      clearTimeout(clear)
    }

    clear = setTimeout(() => {
      setColor("")
      let value = event.target.value
      if(value){
      if(value.length === 4 || value.length === 5 || value.length === 7){
        if(value[0] === "#"){
          for(let x = 1; x < value.length; x++){
            if(arr.includes(value[x])){
            }
            else{
              alert("Invalid color code")
            }
          }
          setColor(value)
        }
        else{
          alert("# is missing")
        }
      }
      else{
        alert("Length is not valid")
      }
    }}, 2000)
  }
  
  return (
        <>
          <input style={{"marginBottom" : "10px"}} type="text" placeholder="Enter color code" onChange={(e) => handleChange(e)} />
          <div style={{...myStyle, "backgroundColor": color }}>Color will be</div>
        </>
      )
    }
    
    export default App