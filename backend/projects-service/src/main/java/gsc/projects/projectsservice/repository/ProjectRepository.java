package gsc.projects.projectsservice.repository;


import gsc.projects.projectsservice.model.Project;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProjectRepository extends JpaRepository<Project, Long> {

    List<Project> findByUserEmail(String userEmail);
    Project findByUserEmailAndName(String name, String userName);
}
