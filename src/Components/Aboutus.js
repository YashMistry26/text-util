

export default function AboutUs(props) {

// const [myStyle, setmyStyle] = useState({
//   color:'white',
//   backgroundColor:'black'
// })

const myStyle = {
color : props.mode === 'dark' ? 'white' :'rgb(16, 16, 88)',
backgroundColor : props.mode === 'dark '? 'blue':'white',
}

    return (
   <div className='container'   style={{ color: props.mode === "dark" ? "white" : "black" }} >
        <h1 className='my-3'>About Us</h1>
        <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button"  style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      Analyze your text
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={{color : props.mode === 'dark' ?' white' :'rgb(16, 16, 88)'}}>
     <strong>Analyze your text</strong>  
Textutils gives you a way to analyze your text quickly and efficiently .Be it word count , character  count or 
    </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button"  style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      Free to use
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={{color : props.mode === 'dark' ?' white' :'rgb(16, 16, 88)'}}>
     <strong>Free to use </strong> 
 TextUtils  is a free character  counter tool that provides instant  character  count & word count statistics  for a given text. TextUtils  reports the number of words and characters. This is suitable  for writing text with word/character limit.

      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button"  style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      Browser Compatible
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={{color : props.mode === 'dark' ?' white' :'rgb(16, 16, 88)'}}>
     <strong> Browser Compatible</strong>
This word counter software  works in any web browsers such as Chrome , Firefox, blog, excel document, pdf document, essays, etc.
      </div>
    </div>
 </div>
 </div>

    </div>
  )
}
