package gsc.projects.projectsservice.service;

import gsc.projects.projectsservice.dto.ProjectCreateDto;
import gsc.projects.projectsservice.dto.ProjectDto;
import gsc.projects.projectsservice.dto.TaskCreateDto;
import gsc.projects.projectsservice.dto.TaskDto;

import java.util.List;

public interface ProjectService {


    ProjectDto createProject(ProjectCreateDto projectCreateDto);
    ProjectDto getProjectById(Long id, String userEmail);
    List<ProjectDto> getProjectsByUserEmail(String userEmail);
    void deleteProjectById(Long id, String userEmail);

    TaskDto createTaskForEachProject(TaskCreateDto taskCreateDto, Long projectId, String userEmail);

    void deleteTaskById(Long projectId, Long taskId, String userEmail);
}

