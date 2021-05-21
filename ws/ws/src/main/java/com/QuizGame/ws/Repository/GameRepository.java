package com.QuizGame.ws.Repository;

import com.QuizGame.ws.Entity.GameEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface GameRepository extends JpaRepository<GameEntity,Long> {

    List<GameEntity> findByUsername(String username);
}
