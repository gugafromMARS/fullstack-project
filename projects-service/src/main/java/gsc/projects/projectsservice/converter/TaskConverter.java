package gsc.projects.projectsservice.converter;


import gsc.projects.projectsservice.dto.TaskCreateDto;
import gsc.projects.projectsservice.dto.TaskDto;
import gsc.projects.projectsservice.model.Task;
import org.springframework.stereotype.Component;

@Component
public interface TaskConverter {

    TaskDto toDto(Task task);
    Task fromCreateDto(TaskCreateDto taskCreateDto);

}
