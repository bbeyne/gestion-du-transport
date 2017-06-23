package back.dev.controller;

import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@DataJpaTest
@EntityScan("dev.entity")
@EnableJpaRepositories("dev.repository")
public class TestConfig {

}
