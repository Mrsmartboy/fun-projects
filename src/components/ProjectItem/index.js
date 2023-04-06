import { ProjectContainer,ProjectImage,Container,ProjectTitle,ProjectDescription} from "./styled"

const ProjectItem =(props)=>{
     const {eachProject} =props
     const {imageURL,title,description}=eachProject
    return(
        <ProjectContainer>
            <ProjectImage src={imageURL}/>
            <Container>
             <ProjectTitle>{title}</ProjectTitle>
             <ProjectDescription>{description}</ProjectDescription>
            </Container>
        </ProjectContainer>
    )

}

export default ProjectItem