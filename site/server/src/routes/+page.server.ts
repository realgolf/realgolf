export async function load(event) {
  const auth = event.cookies.get("auth-token");

  if (auth) {
    return { auth };
  }
}
