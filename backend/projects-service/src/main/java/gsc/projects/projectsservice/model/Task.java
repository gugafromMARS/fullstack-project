package gsc.projects.projectsservice.model;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Entity
@Table(name = "task")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Task {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;
    private String name;
    private String description;
    @ManyToOne
    private Project project;


    public static TaskBuilder builder(){
        return new TaskBuilder();
    }
    public static class TaskBuilder {

        private Task task;

        public TaskBuilder() {
            this.task = new Task();
        }

        public TaskBuilder withName(String name){
            task.setName(name);
            return this;
        }

        public TaskBuilder withDescription(String description){
            task.setDescription(description);
            return this;
        }

        public TaskBuilder withProject(Project project){
            task.setProject(project);
            return this;
        }

        public Task build(){
            return task;
        }

    }
}
