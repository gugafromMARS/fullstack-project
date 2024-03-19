package gsc.projects.userservice.service;

import gsc.projects.userservice.dto.UserCreateDto;
import gsc.projects.userservice.dto.UserDto;
import gsc.projects.userservice.dto.UserLogin;

public interface UserService {
    boolean createUser(UserCreateDto userCreateDto);

    UserDto getUserByEmail(String userEmail);

    void deleteUserByEmail(String userEmail);

    boolean canLogin(UserLogin userLogin);
}
