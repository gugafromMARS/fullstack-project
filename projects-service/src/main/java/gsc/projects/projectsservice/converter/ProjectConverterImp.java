package gsc.projects.projectsservice.converter;


import gsc.projects.projectsservice.dto.ProjectCreateDto;
import gsc.projects.projectsservice.dto.ProjectDto;
import gsc.projects.projectsservice.model.Project;
import org.springframework.stereotype.Component;


@Component
public class ProjectConverterImp implements ProjectConverter{


    @Override
    public Project fromCreateDto(ProjectCreateDto projectCreateDto) {
        return new Project().builder()
                .withName(projectCreateDto.getName())
                .withDescription(projectCreateDto.getDescription())
                .withDate(projectCreateDto.getDate())
                .withUserEmail(projectCreateDto.getUserEmail())
                .withTasks()
                .build();
    }

    @Override
    public ProjectDto toDto(Project project) {
        return new ProjectDto().builder()
                .id(project.getId())
                .name(project.getName())
                .date(project.getDate())
                .description(project.getDescription())
                .userEmail(project.getUserEmail())
                .tasks(project.getTasks())
                .build();
    }

}
