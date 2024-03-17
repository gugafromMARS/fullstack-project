package gsc.projects.projectsservice.model;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "project")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Project {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    private String name;

    @Temporal(TemporalType.DATE)
    private Date date;

    private String description;

    private String userEmail;

    @OneToMany
    private List<Task> tasks;

    public static ProjectBuilder builder(){
        return new ProjectBuilder();
    }

    public static class ProjectBuilder{

        private Project project;

        public ProjectBuilder() {
            this.project = new Project();
        }

        public ProjectBuilder withName(String name){
            project.setName(name);
            return this;
        }

        public ProjectBuilder withDate(Date date){
            project.setDate(date);
            return this;
        }

        public ProjectBuilder withDescription(String description){
            project.setDescription(description);
            return this;
        }

        public ProjectBuilder withUserEmail(String userEmail){
            project.setUserEmail(userEmail);
            return this;
        }

        public ProjectBuilder withTasks(){
            project.setTasks(new ArrayList<>());
            return this;
        }

        public Project build(){
            return project;
        }


    }
}
