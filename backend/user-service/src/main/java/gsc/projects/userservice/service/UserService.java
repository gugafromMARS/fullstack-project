package gsc.projects.userservice.service;

import gsc.projects.userservice.dto.UserCreateDto;
import gsc.projects.userservice.dto.UserDto;

public interface UserService {
    UserDto createUser(UserCreateDto userCreateDto);

    UserDto getUserByEmail(String userEmail);

    void deleteUserById(Long userId);
}
