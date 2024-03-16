package gsc.projects.projectsservice.controller;


import gsc.projects.projectsservice.dto.ProjectCreateDto;
import gsc.projects.projectsservice.service.ProjectService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/projects")
@AllArgsConstructor
public class ProjectController {

    private final ProjectService projectService;

    @PostMapping
    public ResponseEntity<?> create(@RequestBody ProjectCreateDto projectCreateDto){
        return new ResponseEntity<>(projectService.createProject(projectCreateDto), HttpStatus.CREATED);
    }
    @GetMapping("/{projectId}/{userEmail}")
    public ResponseEntity<?> get(@PathVariable ("projectId") Long projectId, @PathVariable ("userEmail") String userEmail){
        return ResponseEntity.ok(projectService.getProjectById(projectId, userEmail));
    }
    @GetMapping("/{userEmail}")
    public ResponseEntity<?> getAll(@PathVariable ("userEmail") String userEmail){
        return ResponseEntity.ok(projectService.getProjectsByUserEmail(userEmail));
    }
    @DeleteMapping("/{projectId}/{userEmail}")
    public ResponseEntity<?> delete(@PathVariable ("projectId") Long projectId, @PathVariable ("userEmail") String userEmail){
        projectService.deleteProjectById(projectId, userEmail);
        return new ResponseEntity<>("Project deleted successfully", HttpStatus.OK);
    }


}