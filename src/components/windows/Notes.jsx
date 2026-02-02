import ReactQuill from "react-quill"
import "./notes.scss"
import MacWindow from "./MacWindow"
import html2pdf from "html2pdf.js"

const Notes = () => {

    const downloadPDF=()=>{
        const element=document.querySelector(".ql-editor")

        // generate PDF
        html2pdf()
            .set({
            margin: 12,
            filename: "notes.pdf",
            html2canvas: {
                scale: 2,
                useCORS: true,
            },
            jsPDF: {
                unit: "mm",
                format: "a4",
                orientation: "portrait",
            },
            })
            .from(element)
            .save();
    }

  return (
    <div>
        <MacWindow title="Notes">
            <div className="element-to-print">
                <ReactQuill className="editor" />
                <div className="download-btn" onClick={()=>{downloadPDF()}}>⬇</div>
            </div>  
        </MacWindow>
        
    </div>
  )
}

export default Notes