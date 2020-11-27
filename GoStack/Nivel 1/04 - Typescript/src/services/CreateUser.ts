interface TechObject {
    title : string,
    experience: number
}

interface createUserData{
    name ?: string,
    email : string,
    password : string,
    techs: Array<string | TechObject>
}


export default function createUser( {name="", email, password}:createUserData) {
    const user = {
        name, email, password
    }
    return user
}