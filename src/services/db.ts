import { IProject } from "../components/ProjectForm"
import { IService } from "../components/ServiceForm"

export const getAll = async (dataType: string) => {
    const baseUrl = 'http://localhost:5000/'
    return fetch(`${baseUrl}${dataType}`).then(res=> res.json())
}
export const getOne = async (dataType: string, id:string) => {
    const baseUrl = 'http://localhost:5000/'
    return fetch(`${baseUrl}${dataType}/${id}`).then(res=> res.json())
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
export const createService = async ( services:IService[], id:string, cost:number ) => {
    const baseUrl = 'http://localhost:5000/'
    return fetch(`${baseUrl}projects/${id}`,{
        method:'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({services:services, cost:cost})
    }).then(res=> res.json())
}


export const updateProject = async ( project:IProject) => {
    const baseUrl = 'http://localhost:5000/'
    return fetch(`${baseUrl}projects/${project?.id}`,{
        method:'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(project)
    }).then(res=> res.json())
}
export const deleteService = async ( project:IProject, services:IService[], cost:number) => {
    const baseUrl = 'http://localhost:5000/'
    return fetch(`${baseUrl}projects/${project?.id}`,{
        method:'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({services:services, cost:cost})
    }).then(res=> res.json())
}
export const deleteProject = async ( id:number ) => {
    const baseUrl = 'http://localhost:5000/'
    return fetch(`${baseUrl}projects/${id}`,{
        method:'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res=> res.json())
}
    


 