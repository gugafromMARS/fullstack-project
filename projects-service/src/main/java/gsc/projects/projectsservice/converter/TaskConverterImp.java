package gsc.projects.projectsservice.converter;

import gsc.projects.projectsservice.dto.TaskCreateDto;
import gsc.projects.projectsservice.dto.TaskDto;
import gsc.projects.projectsservice.model.Project;
import gsc.projects.projectsservice.model.Task;
import org.springframework.stereotype.Component;

@Component
public class TaskConverterImp implements TaskConverter{

    public TaskDto toDto(Task task){
        return new TaskDto().builder()
                .id(task.getId())
                .name(task.getName())
                .description(task.getDescription())
                .build();
    }

    public Task fromCreateDto(TaskCreateDto taskCreateDto, Project project){
        return new Task().builder()
                .withName(taskCreateDto.getName())
                .withDescription(taskCreateDto.getDescription())
                .withProject(project)
                .build();
    }
}
