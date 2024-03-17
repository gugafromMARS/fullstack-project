package gsc.projects.projectsservice.converter;


import gsc.projects.projectsservice.dto.ProjectCreateDto;
import gsc.projects.projectsservice.dto.ProjectDto;
import gsc.projects.projectsservice.model.Project;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;


@Component
@AllArgsConstructor
public class ProjectConverterImp implements ProjectConverter{

    private final TaskConverter taskConverter;

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
                .tasks(project.getTasks().stream().map(task -> taskConverter.toDto(task)).toList())
                .build();
    }

}
