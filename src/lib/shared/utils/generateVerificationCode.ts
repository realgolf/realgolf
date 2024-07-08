export function generate_verification_code() {
	return Math.floor(100000 + Math.random() * 900000);
}
