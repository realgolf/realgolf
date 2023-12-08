---
title:
---

## About Accounts

### Where to go

There are two methods to create an account:

#### Menu Option

- Open the right-hand menu in the navigation bar.
- You will find two distinct options: "Register" and "Login".

#### Start Page Option

- On the start page, you will find two Setences one to login and one to register
- To create an account, select the "Register" button.

### Registration

To register you will need to enter three Informations:

1. Name
2. Password
3. Email

#### Name

There are two things required for a Name to be valid:

1. Entering a Name is required and you won't be able to register without
2. The entered Name must have a minimum length of two Letters
   - You can't use a Name which is a single Symbol long

#### Email

There are three things required for an Email to be valid:

1.  Entering an Email is required and you won't be able to register without
2.  The email has to match our email regexp

    - Which is:

      - ```typescript
        export const email_regexp = /^[a-z0-9.*%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
        ```

    - For Example `username@moinjulian.com`

3.  The entered Email as to be unique and can not match with an Email already registered on our database

#### Password

There are three things required for an Password to be valid:

1. Entering an Password is required and you won't be able to register without
2. You will need to verify your entered Password, the first and second Password have to be exactly identical
3. The minimum Password length is 8 symbols
   - You can enter what ever you want

### Login

After you have created an Account via **Registration** you can login using your Email Adress and Password you have entered previously

**Please note that when you forget your Password you won't be able to Login again**

### Settings

In the Dropdown Menu on the right hand site of the Naigation bar in the top, you can find the Settings tab, while you are logged in, click on it to open the Settings

#### Changing Information

Your personl information like "Name", "Email" and "Password" can be changed in the Settings

#### Logout

You can also find an button to Logout in the Settings, click on it to Logout (you will need to reproduce the [Login Steps](#login) descript above to login again)

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
     - **Lateral Deviation:** When playing the [Silver level](https://realgolf.games/dashboard/levels) or above you need to include the lateral deviation and it will get harder to hit a Field of your choice.
