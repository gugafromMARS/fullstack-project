package gsc.projects.userservice.service;


import gsc.projects.userservice.converter.UserConverter;
import gsc.projects.userservice.dto.UserCreateDto;
import gsc.projects.userservice.dto.UserDto;
import gsc.projects.userservice.model.User;
import gsc.projects.userservice.repository.UserRepository;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

@Service
@AllArgsConstructor
public class UserServiceImp implements UserService{

    private final UserConverter userConverter;
    private final UserRepository userRepository;


    @Override
    @Transactional
    public UserDto createUser(UserCreateDto userCreateDto) {
        User existingUser = userRepository.findByEmail(userCreateDto.getEmail());
        if(existingUser != null){
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "User already exists");
        }
        existingUser = userConverter.fromCreateDto(userCreateDto);
        userRepository.save(existingUser);
        return userConverter.toDto(existingUser);
    }
}
