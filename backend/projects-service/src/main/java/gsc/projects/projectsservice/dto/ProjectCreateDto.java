package gsc.projects.projectsservice.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;


@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class ProjectCreateDto {

    private String name;
    private Date date;
    private String description;
    private String userEmail;
}
