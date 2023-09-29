<script lang="ts">
	let openDetails: { open: boolean } | null = null; // Variable to track the open <details> element

	// Function to handle the toggle event
	function handleToggle(event: { target: any }) {
		const details = event.target;

		if (details.open) {
			if (openDetails) {
				// Close the previously open details
				openDetails.open = false;
			}

			// Set the current details as the open one
			openDetails = details;
		} else {
			// Details element is closed
			openDetails = null;
		}
	}
</script>

<svelte:head>
	<title>Golf Games - FAQ</title>
</svelte:head>

<h1>FAQ</h1>

<details on:toggle={handleToggle}>
	<summary>How can I create an account to play the games?</summary>
	<div>
		<p>
			Creating an account to play Golf Games is a simple process. Follow these steps to get started:
		</p>
		<ol class="faq-list">
			<li>
				<strong>Navigate to Registration Page:</strong> Open
				<a href="https://golf.moinjulian.com">Golf Games</a> and go to the Register tab in the nav bar.
			</li>
			<li>
				<strong>Fill in Registration Details:</strong> Enter an email, name, and password, then click
				on the register button.
			</li>
			<li>
				<strong>Complete Registration:</strong> You will automatically be redirected to the Login tab.
				Log in using your email and password.
			</li>
			<li>
				<strong>Start Playing:</strong> After logging in, you can play all three games and save your
				progress in the database.
			</li>
		</ol>
		<p>
			By following these steps, you'll create an account that allows you to dive into the world of
			Golf Games and enjoy the various challenges they provide. Have fun
		</p>
	</div>
</details>

<details on:toggle={handleToggle}>
	<summary>Are the games free to play?</summary>
	<div>
		<p>
			Absolutely! Our games are completely free to play. All you need to do is create an account,
			and you'll have access to all the exciting challenges and fun that Golf Games has to offer.
			Get started today and enjoy the games without any cost.
		</p>
	</div>
</details>

<details on:toggle={handleToggle}>
	<summary>Can I contribute new Games to the project?</summary>
	<div>
		<p>
			Your creative input is highly valued! If you have exciting new game ideas, we encourage you to
			get involved. Here's how:
		</p>
		<ul class="faq-list">
			<li>
				<strong>Open an Issue on GitHub:</strong> Feel free to open an Issue on our
				<a href="https://github.com/MoinJulian/Golf/issues">GitHub</a> repository and label it with "game".
				Your idea will be reviewed and considered by our team.
			</li>
			<li>
				<strong>Email Us:</strong> You can also share your ideas via email to
				<a href="mailto:info@moinjulian.com">info@moinjulian.com</a>. We welcome your suggestions
				and will eagerly explore each one.
			</li>
		</ul>
		<p>
			For your valuable contributions, your name will be recognized in our <a
				href="/Contributors.md">Contributors.md</a
			> file. Your ideas can shape the future of Golf Games, and we greatly appreciate your input. Let's
			create amazing experiences together!
		</p>
	</div>
</details>

<details on:toggle={handleToggle}>
	<summary>How can I report bugs or suggest new features?</summary>
	<div>
		<p>
			To report bugs, you can open an Issue on our <a
				href="https://github.com/MoinJulian/Golf/issues">GitHub repository</a
			>
			and label it with "bug." Alternatively, you can send an email to
			<a href="mailto:info@moinjulian.com">info@moinjulian.com</a>.
		</p>
		<p>
			To suggest new features, you can also open an issue on our <a
				href="https://github.com/MoinJulian/Golf/issues">GitHub repository</a
			>
			and label it with "feature." You can also send your suggestions via email to
			<a href="mailto:info@moinjulian.com">info@moinjulian.com</a>.
		</p>
	</div>
</details>

<details on:toggle={handleToggle}>
	<summary>Is the project open source?</summary>
	<div>
		<p>
			No, the project is not open source. However, you are still very welcome to contribute by
			creating an Issue as described above.
			<strong>We appreciate your input and suggestions!</strong>
		</p>
	</div>
</details>

<details on:toggle={handleToggle}>
	<summary>How often are new updates or features added?</summary>
	<div>
		<p>
			Rest assured, we're committed to providing a steady stream of new updates and exciting
			features. Our team is dedicated to enhancing your experience, and you can expect frequent
			additions to keep the excitement alive.
		</p>
	</div>
</details>

<details on:toggle={handleToggle}>
	<summary>Can I play the offline version on all devices?</summary>
	<div>
		<p>
			Absolutely! The offline version is designed to be accessible on a wide range of devices. It
			functions just like a website, and it's pre-rendered upon opening to ensure seamless
			functionality even when there's no network connectivity. This means you can enjoy the games on
			various devices without worrying about a network connection.
		</p>
	</div>
</details>

<details on:toggle={handleToggle}>
	<summary>What programming languages are used in the project?</summary>
	<div>
		<p>Our project is built using a combination of powerful technologies:</p>
		<ul class="faq-list">
			<li>
				<strong>Frontend Development:</strong> We utilize the JavaScript Full Stack Framework,
				<a href="https://kit.svelte.dev">SvelteKit</a>, along with TypeScript and Sass for crafting
				engaging and dynamic user interfaces.
			</li>
			<li>
				<strong>Backend Development:</strong> For the server-side aspect, we've harnessed the
				capabilities of
				<a href="https://www.mongodb.com">MongoDB</a>
				to securely store user data and ensure smooth interactions.
			</li>
		</ul>
		<p>
			This versatile tech stack empowers us to create a seamless user experience and a robust
			backend infrastructure.
		</p>
	</div>
</details>

<details on:toggle={handleToggle}>
	<summary> Can I change my Password after registration? </summary>
	<div>
		<p>Absolutely! You have the flexibility to change your password at any time. Here's how:</p>
		<ol class="faq-list">
			<li>
				<strong>Navigate to Account Settings:</strong> Log in to your account and go to the "Account"
				tab.
			</li>
			<li>
				<strong>Update Password:</strong> In the "Account" section, you'll find an option to change your
				password. Simply enter your new password in the designated input field.
			</li>
			<li>
				<strong>Save Changes:</strong> After entering your new password, click on the "Update" button
				to save your changes.
			</li>
		</ol>
		<p>
			By following these steps, you can easily update your password and keep your account secure.
		</p>
	</div>
</details>

<details on:toggle={handleToggle}>
	<summary> Is my Personal Information safe and secure? </summary>
	<div>
		<p>
			Absolutely. We take the security and privacy of your personal information seriously. Here's
			how we ensure your data is safe:
		</p>
		<ul class="faq-list">
			<li>
				<strong>Password Protection:</strong> Your password is not stored in clear text on our servers.
				It's securely hashed to protect its confidentiality.
			</li>
			<li>
				<strong>Limited Access:</strong> Your password and personal information are not viewable by any
				team member. We implement strict access controls to ensure only authorized personnel can handle
				sensitive data.
			</li>
		</ul>
		<p>
			We are committed to maintaining the highest standards of security to safeguard your personal
			information.
		</p>
	</div>
</details>

<details on:toggle={handleToggle}>
	<summary>Further Questions</summary>
	<div>
		<p>
			If you have any additional questions, don't hesitate to reach out to us. Simply send an email
			to <a href="mailto:info@moinjulian.com">info@moinjulian.com</a> with your question. We'll respond
			promptly and may even consider adding your question to this FAQ to help other users.
		</p>
	</div>
</details>

<style lang="scss">
	details {
		border: 1px solid var(--border-color);
		border-radius: 8px;
		margin-bottom: 1rem;
		transition: background-color 0.3s ease;

		summary {
			font-weight: 600;
			line-height: 1.2rem;
			color: var(--h2-color);
			padding: 0.5rem 1.5rem;
			cursor: pointer;
		}

		div {
			padding: 0 1.5rem 1.5rem;

			.faq-list {
				padding-left: 1.5em;
			}
		}

		&:hover {
			background-color: var(--nav-color);
		}
	}
</style>
