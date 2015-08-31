DROP PROCEDURE IF EXISTS `RegisterUser`;

DELIMITER ;;
 
CREATE PROCEDURE `RegisterUser` (
	IN iemail VARCHAR(255),
	IN iname VARCHAR(255),
	IN ilastname VARCHAR(255),
	IN isOauth INT,
	IN ipassword VARCHAR(255) 
)
LANGUAGE SQL
NOT DETERMINISTIC
SQL SECURITY DEFINER
COMMENT 'Creates a new user in the db.'
/**
 * CALL RegisterUser("email@gmail.com", "Pedro", "Perez", 0, "password");
 */
BEGIN
	DECLARE userId INT;
	DECLARE code CHAR(5);
	DECLARE msg TEXT;
	DECLARE `_rollback` BOOL DEFAULT 0;
    DECLARE CONTINUE HANDLER FOR SQLEXCEPTION
    	BEGIN
    		GET DIAGNOSTICS CONDITION 1
        		code = RETURNED_SQLSTATE, msg = MESSAGE_TEXT;
        	SELECT -1 AS `id`, code AS `error_code`, msg AS `error_message`;
        	ROLLBACK;
		END;
	START TRANSACTION;
		INSERT INTO `user` (`name`, `last_name`) VALUES (iname, ilastname);
		SELECT LAST_INSERT_ID() INTO userId;
		INSERT INTO `email` (`user_id`, `email`, `primary`) VALUES (userId, iemail, 1);
	COMMIT;

END;;