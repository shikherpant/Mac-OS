import MacWindow from "./MacWindow"
import gitHubData from '../../assets/github.json'
import "./github.scss"

const Github = () => {

    const GitCard=({data})=>{
        return <div className="card">

            <img src={data.image} alt="" />
            <h1>{data.title}</h1>
            <p>{data.description}</p>

            <div className="tags">
                {
                    data.tags.map((tag, idx)=>{
                        return <p className="tag" key={idx}>{tag}</p>
                    })
                }
            </div>

            <div className="urls">
                <a href={data.repoLink}>Repo Link</a>
                {
                    data.demoLink && <a href={data.demoLink}>Demo Link</a>
                }
            </div>

        </div>
    }

  return (
    <div>
        <MacWindow>
            <div className="cards">
                {
                    gitHubData.map((project, idx)=>{
                        return <GitCard data={project} key={idx}/>
                    })
                }
            </div>
            
        </MacWindow>
    </div>
  )
}

export default Github