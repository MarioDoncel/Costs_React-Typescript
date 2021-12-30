import { IProject } from "../components/ProjectForm"

export const getData = async (dataType: string) => {
    const baseUrl = 'http://localhost:5000/'
    return fetch(`${baseUrl}${dataType}`).then(res=> res.json())
}
    
export const createProject = async ( project:IProject ) => {
    const baseUrl = 'http://localhost:5000/'
    return fetch(`${baseUrl}projects`,{
        method:'POST',
        headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(project)
        }).then(res=> res.json())
}
    


 