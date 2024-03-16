package gsc.projects.projectsservice.service;

import gsc.projects.projectsservice.converter.ProjectConverter;
import gsc.projects.projectsservice.dto.ProjectCreateDto;
import gsc.projects.projectsservice.dto.ProjectDto;
import gsc.projects.projectsservice.model.Project;
import gsc.projects.projectsservice.repository.ProjectRepository;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;


@Service
@AllArgsConstructor
public class ProjectServiceImp implements ProjectService{


    private final ProjectRepository projectRepository;
    private final ProjectConverter projectConverter;
    @Override
    @Transactional
    public ProjectDto createProject(ProjectCreateDto projectCreateDto) {
        Project existingProject = projectRepository
                .findByUserEmailAndName(projectCreateDto.getName(), projectCreateDto.getUserEmail());
        if(existingProject != null){
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Project already exists!");
        }
        existingProject = projectConverter.fromCreateDto(projectCreateDto);
        projectRepository.save(existingProject);
        return projectConverter.toDto(existingProject);
    }

    @Override
    public ProjectDto getProjectById(Long id, String userEmail) {
        return projectRepository.findByUserEmail(userEmail).stream().filter(project -> project.getId().equals(id))
                .map(project -> projectConverter.toDto(project))
                .findAny().orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Project not found"));
    }

    @Override
    public List<ProjectDto> getProjectsByUserEmail(String userEmail) {
        return projectRepository.findByUserEmail(userEmail).stream()
                .map(project -> projectConverter.toDto(project)).toList();
    }

    @Override
    @Transactional
    public void deleteProjectById(Long id, String userEmail) {
        projectRepository.delete(projectRepository
                .findByUserEmail(userEmail).stream().filter(project -> project.getId().equals(id))
                .findAny().orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Project not found")));
    }

}
