import MacWindow from "./MacWindow"
import pdf from "../../assets/ShikherPantSE.pdf" 

const Resume = () => {
  return (
    <div>
        <MacWindow title="Resume" initX="750" page="pdf">
            {/* embed or iframe or object anything can be used */}
            <embed src={pdf} height={"100%"} width={"100%"}/>
        </MacWindow>
    </div>
  )
}

export default Resume