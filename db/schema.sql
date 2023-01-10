DROP DATABASE IF EXISTS `employeee_cms_hw`;
CREATE SCHEMA `employeee_cms_hw` ;

CREATE TABLE `employeee_cms_hw`.`departments` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(30) NOT NULL,
  PRIMARY KEY (`id`));




CREATE TABLE `employeee_cms_hw`.`role` (
  `id` INT NOT NULL,
  `title` VARCHAR(45) NOT NULL,
  `salary` DECIMAL NULL DEFAULT 0,
  `department_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`));

ALTER TABLE `employeee_cms_hw`.`role` 
ADD INDEX `fk_roles_1_idx` (`department_id` ASC) VISIBLE;
;
ALTER TABLE `employeee_cms_hw`.`role` 
ADD CONSTRAINT `fk_roles_1`
  FOREIGN KEY (`department_id`)
  REFERENCES `employeee_cms_hw`.`departments` (`id`)
  ON DELETE CASCADE
  ON UPDATE NO ACTION;

CREATE TABLE `employeee_cms_hw`.`employee` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(45) NOT NULL,
  `last_name` VARCHAR(45) NOT NULL,
  `role_id` INT UNSIGNED NOT NULL,
  `manager_id` INT UNSIGNED NULL,
  PRIMARY KEY (`id`));

ALTER TABLE `employeee_cms_hw`.`employee` 
ADD INDEX `fk_emloyee_2_idx` (`manager_id` ASC) VISIBLE;
;
ALTER TABLE `employeee_cms_hw`.`employee` 
ADD CONSTRAINT `fk_employee_1`
  FOREIGN KEY (`role_id`)
  REFERENCES `employeee_cms_hw`.`role` (`department_id`)
  ON DELETE CASCADE
  ON UPDATE NO ACTION,
ADD CONSTRAINT `fk_emloyee_2`
  FOREIGN KEY (`manager_id`)
  REFERENCES `employeee_cms_hw`.`employee` (`id`)
  ON DELETE SET NULL
  ON UPDATE NO ACTION;

