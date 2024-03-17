package gsc.projects.projectsservice.dto;


import lombok.*;

import java.util.Date;
import java.util.List;

@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ProjectDto {

    private Long id;
    private String name;
    private Date date;
    private String description;
    private String userEmail;
    private List<TaskDto> tasks;
}
