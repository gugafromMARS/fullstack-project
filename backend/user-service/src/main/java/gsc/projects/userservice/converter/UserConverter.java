package gsc.projects.userservice.converter;

import gsc.projects.userservice.dto.UserCreateDto;
import gsc.projects.userservice.dto.UserDto;
import gsc.projects.userservice.model.User;

public interface UserConverter {

    User fromCreateDto(UserCreateDto userCreateDto);
    UserDto toDto(User user);
}
