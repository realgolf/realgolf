import {
	admin_role,
	developer_role,
	founder_role,
	moderator_role,
	pro_role,
	super_role,
	trainer_role,
	user_role
} from '../roles';

export function asign_role_data(
	role: string | undefined
): { title: string; permissions: string[]; color: string } | undefined {
	let user_role_data;

	if (role == 'Founder') {
		user_role_data = founder_role;
	} else if (role == 'Admin') {
		user_role_data = admin_role;
	} else if (role == 'Developer') {
		user_role_data = developer_role;
	} else if (role == 'Moderator') {
		user_role_data = moderator_role;
	} else if (role == 'Trainer') {
		user_role_data = trainer_role;
	} else if (role == 'Pro') {
		user_role_data = pro_role;
	} else if (role == 'Super') {
		user_role_data = super_role;
	} else if (role == 'User') {
		user_role_data = user_role;
	}

	return user_role_data;
}
