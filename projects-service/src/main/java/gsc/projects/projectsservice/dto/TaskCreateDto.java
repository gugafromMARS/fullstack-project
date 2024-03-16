package gsc.projects.projectsservice.dto;


import gsc.projects.projectsservice.model.Project;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class TaskCreateDto {

    private String name;
    private String description;
    private Project project;
}
