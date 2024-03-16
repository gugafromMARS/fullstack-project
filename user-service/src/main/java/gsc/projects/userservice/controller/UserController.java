package gsc.projects.userservice.controller;


import gsc.projects.userservice.dto.UserCreateDto;
import gsc.projects.userservice.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/user")
@AllArgsConstructor
public class UserController {

    public final UserService userService;

    @PostMapping
    public ResponseEntity<?> create(@RequestBody UserCreateDto userCreateDto){
        return new ResponseEntity<>(userService.createUser(userCreateDto), HttpStatus.CREATED);
    }

    @GetMapping("/{userEmail}")
    public ResponseEntity<?> get(@PathVariable ("userEmail") String userEmail){
        return ResponseEntity.ok(userService.getUserByEmail(userEmail));
    }

    @DeleteMapping("/{userId}")
    public ResponseEntity<?> deleteUser(@PathVariable ("userId") Long userId){
        userService.deleteUserById(userId);
        return new ResponseEntity<>("User delete sucessfully", HttpStatus.OK);
    }
}
