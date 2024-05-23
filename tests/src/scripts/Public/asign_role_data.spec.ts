import { asign_role_data } from '../../../../src/lib/scripts/Public/asign_role_data';
import {
	admin_role,
	developer_role,
	founder_role,
	moderator_role,
	pro_role,
	super_role,
	trainer_role,
	user_role
} from '../../../../src/lib/scripts/roles';

describe('asign_role_data', () => {
	it('should return the correct role data for Founder', () => {
		// Arrange
		const role = 'Founder';

		// Act
		const result = asign_role_data(role);

		// Assert
		expect(result).toEqual(founder_role);
	});

	it('should return the correct role data for Admin', () => {
		// Arrange
		const role = 'Admin';

		// Act
		const result = asign_role_data(role);

		// Assert
		expect(result).toEqual(admin_role);
	});

	it('should return the correct role data for Developer', () => {
		// Arrange
		const role = 'Developer';

		// Act
		const result = asign_role_data(role);

		// Assert
		expect(result).toEqual(developer_role);
	});

	it('should return the correct role data for Moderator', () => {
		// Arrange
		const role = 'Moderator';

		// Act
		const result = asign_role_data(role);

		// Assert
		expect(result).toEqual(moderator_role);
	});

	it('should return the correct role data for Trainer', () => {
		// Arrange
		const role = 'Trainer';

		// Act
		const result = asign_role_data(role);

		// Assert
		expect(result).toEqual(trainer_role);
	});

	it('should return the correct role data for Pro', () => {
		// Arrange
		const role = 'Pro';

		// Act
		const result = asign_role_data(role);

		// Assert
		expect(result).toEqual(pro_role);
	});

	it('should return the correct role data for Super', () => {
		// Arrange
		const role = 'Super';

		// Act
		const result = asign_role_data(role);

		// Assert
		expect(result).toEqual(super_role);
	});

	it('should return the correct role data for User', () => {
		// Arrange
		const role = 'User';

		// Act
		const result = asign_role_data(role);

		// Assert
		expect(result).toEqual(user_role);
	});
});
