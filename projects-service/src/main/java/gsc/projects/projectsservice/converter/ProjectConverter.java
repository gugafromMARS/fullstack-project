package gsc.projects.projectsservice.converter;

import gsc.projects.projectsservice.dto.ProjectCreateDto;
import gsc.projects.projectsservice.dto.ProjectDto;
import gsc.projects.projectsservice.model.Project;

import java.util.List;

public interface ProjectConverter {


    Project fromCreateDto(ProjectCreateDto projectCreateDto);
    ProjectDto toDto(Project project);

}
