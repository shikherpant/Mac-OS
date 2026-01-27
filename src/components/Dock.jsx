import "./dock.scss"

const Dock = () => {
  return (
    <section className="dock">
        <div className="icon github"><img src="/src/assets/doc-icons/github.svg" alt="" /></div>
        <div className="icon note"><img src="/src/assets/doc-icons/note.svg" alt="" /></div>
        <div className="icon pdf"><img src="/src/assets/doc-icons/pdf.svg" alt="" /></div>
        <div className="icon calender"><img src="/src/assets/doc-icons/calender.svg" alt="" /></div>
        <div className="icon spotify"><img src="/src/assets/doc-icons/spotify.svg" alt="" /></div>
        <div className="icon mail"><img src="/src/assets/doc-icons/mail.svg" alt="" /></div>
        <div className="icon link"><img src="/src/assets/doc-icons/link.svg" alt="" /></div>
        <div className="icon cli"><img src="/src/assets/doc-icons/cli.svg" alt="" /></div>
    </section>
  )
}

export default Dock