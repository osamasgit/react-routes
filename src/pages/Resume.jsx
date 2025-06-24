import { studies, experiences } from '../data/resume'
function Resume () {
    return(
        <>
        <ul>
            {studies.map(study => 
                <li key={study.id}>
                    <h2>{study.title}</h2>
                    <h3>{study.institution}</h3>
                    <p>{study.date}</p>
                </li>
            )}
        </ul>
        </>
    )
}

export default Resume