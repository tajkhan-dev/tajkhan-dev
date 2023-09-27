export const projectSchema= {

    name:"projects",
    type:"document",
    title:"My portfolio",
    fields:[
        {
            name:"name",
            title:"project name",
            type:"string"
        },{
            name:"image",
            title:"project image",
            type:"image"
        },
        {
             name:"techStack",
            title:"techStack",
            type:"string"
        },
        {
            name:"description",
            title:"project description",
            type:"string"
        }
    ]
    }
