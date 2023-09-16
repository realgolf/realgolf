export async function load(event) {
  const auth = event.cookies.get("auth-token");
  console.log(auth);

  if (auth) {
    return { auth: true };
  }
}
