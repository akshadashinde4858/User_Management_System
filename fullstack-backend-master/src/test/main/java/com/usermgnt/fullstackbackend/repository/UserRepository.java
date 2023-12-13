package com.usermgnt.fullstackbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.usermgnt.fullstackbackend.model.User;

public interface UserRepository extends JpaRepository<User,Long> {
}
