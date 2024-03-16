package gsc.projects.projectsservice.service;

import gsc.projects.projectsservice.dto.ProjectCreateDto;
import gsc.projects.projectsservice.dto.ProjectDto;

import java.util.List;

public interface ProjectService {


    ProjectDto createProject(ProjectCreateDto projectCreateDto);
    ProjectDto getProjectById(Long id, String userEmail);
    List<ProjectDto> getProjectsByUserEmail(String userEmail);
    void deleteProjectById(Long id, String userEmail);
}
