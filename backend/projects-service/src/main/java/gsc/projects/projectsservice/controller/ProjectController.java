package gsc.projects.projectsservice.controller;


import gsc.projects.projectsservice.dto.ProjectCreateDto;
import gsc.projects.projectsservice.dto.TaskCreateDto;
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
    @GetMapping("/{projectId}")
    public ResponseEntity<?> get(@PathVariable ("projectId") Long projectId){
        return ResponseEntity.ok(projectService.getProjectById(projectId));
    }
    @GetMapping()
    public ResponseEntity<?> getAll(@RequestParam ("userEmail") String userEmail){
        return ResponseEntity.ok(projectService.getProjectsByUserEmail(userEmail));
    }
    @DeleteMapping("/{projectId}")
    public ResponseEntity<?> delete(@PathVariable ("projectId") Long projectId){
        projectService.deleteProjectById(projectId);
        return new ResponseEntity<>("Project deleted successfully", HttpStatus.OK);
    }

    @PostMapping ("/{projectId}/tasks")
    public ResponseEntity<?> createTask(@RequestBody TaskCreateDto taskCreateDto, @PathVariable ("projectId") Long projectId){
        return new ResponseEntity<>(projectService.createTaskForEachProject(taskCreateDto, projectId), HttpStatus.CREATED);
    }

    @DeleteMapping("/{projectId}/tasks/{taskId}")
    public ResponseEntity<?> deleteTask(@PathVariable ("projectId") Long projectId, @PathVariable ("taskId") Long taskId
                                      ){
        projectService.deleteTaskById(projectId,taskId);
        return new ResponseEntity<>("Task deleted successfully!", HttpStatus.OK);
    }

}
