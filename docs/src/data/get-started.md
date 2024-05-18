---
title: Get Started
---

## About Accounts

### Where to go

There are two methods to create an account:

#### Menu Option

- Open the right-hand menu in the navigation bar.
- You will find two distinct options: "Register" and "Login".

#### Start Page Option

- On the start page, you will find two sentences, one to login and one to register.
- To create an account, select the "Register" button.

### Registration

To register, you will need to enter four pieces of information:

1. Email
2. Password
3. Verify Password
4. Name
5. Username
6. Handicap

#### Email

There are three requirements for an email to be valid:

1. Entering an email is required and you won't be able to register without it.
2. The email has to match our email regexp, which is:

   ```javascript
   export const email_regexp = /^[a-z0-9.*%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
   ```

   - For example, `username@moinjulian.com`.

3. The entered email has to be unique and cannot match an email already registered in our database.

#### Password

There are three requirements for a password to be valid:

1. Entering a password is required and you won't be able to register without it.
2. You will need to verify your entered password; the first and second passwords have to be exactly identical.
3. The minimum password length is 8 symbols.
   - You can enter whatever you want.

#### Name

There are two requirements for a name to be valid:

1. Entering a name is required and you won't be able to register without it.
2. The entered name must have a minimum length of two letters.
   - You can't use a name that is a single symbol long.

### Login

After you have created an account via registration, you can login using your email address and the password you entered previously.

**Please note that if you forget your password, you won't be able to login again.**

### Settings

In the dropdown menu on the right-hand side of the navigation bar at the top, you can find the Settings tab. While you are logged in, click on it to open the Settings.

#### User ID

In the top of the settings, directly below Account you will find your User ID, which is used by the Team to find and indetify you in the database.

**Please provide our team with this ID when they ask for it.**

#### Changing Information

Your personal information like "Name", "Email", and "Password" can be changed in the Settings.

### Dropdownmenu

#### Logout

You can also find a button to logout in the Dropdownmenu. Click on it to logout (you will need to reproduce the [Login Steps](#login) described above to login again).

## Preparation for the Games

### Requirements

To perform the necessary measurements, you will need the following equipment:

- A device capable of accurately measuring shot distances, such as a simulator or a range finder (e.g. Trackman).

**Additionally, you'll require the following items:**

- A set of golf clubs.
- At least one golf ball.

### Procedure

Follow these steps to set up and utilize the range finder to capture crucial shot parameters, including those applicable when playing at the [Silver level](https://realgolf.games/dashboard/levels) and above:

1. **Equipment Setup:**

   - Ensure your range finder is correctly configured and operational.
   - Verify its ability to accurately detect the golf ball.

2. **Key Parameters:**
   - Pay particular attention to the following essential parameters:
     - **Total/Carry Distance:** You can decide if the total distance traveled by the ball or its carry distance is important.
     - **Lateral Deviation:** When playing the [Silver level](https://realgolf.games/dashboard/levels) or above, you need to include the lateral deviation, and it will get harder to hit a field of your choice.

## Keyboard shortcuts

There are a few keyboard shortcuts you can use to speed up your navigation process.

**Currently, there is only one keyboard shortcut available.**

1. Open Menu: "ctrl+m"
