package gsc.projects.projectsservice.repository;

import gsc.projects.projectsservice.model.Project;
import gsc.projects.projectsservice.model.Task;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TaskRepository extends JpaRepository<Task, Long> {

    List<Task> deleteAllByProject(Project project);
}
