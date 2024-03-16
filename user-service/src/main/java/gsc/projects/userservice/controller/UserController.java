package gsc.projects.userservice.controller;


import gsc.projects.userservice.dto.UserCreateDto;
import gsc.projects.userservice.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/user")
@AllArgsConstructor
public class UserController {

    public final UserService userService;

    @PostMapping
    public ResponseEntity<?> create(@RequestBody UserCreateDto userCreateDto){
        return ResponseEntity.ok(userService.createUser(userCreateDto));
    }
}
