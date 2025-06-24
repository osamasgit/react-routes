import projects from '../data/projects'
function Projects () {
    return(
        <ul>
            {projects.map(project => {
                return (
                <li key={project.id}>
                    <h2>{project.name}</h2>
                    <img src={project.image} alt={project.name} />
                    <p>{project.description}</p>
                </li>
                )
            }
            )}
        </ul>    
    )
}

export default Projects