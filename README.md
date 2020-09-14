# Rehash Take Home Challenge

This is a bare-bones Next.js app that we would like you to use as a base to improve on. The challenge tests familiarity with React web application development and provides a jumping off point for us to discuss the decisions you and how your approached the tasks.

(If you've never touched Next.js, please don't be afraid; we've included comments explaining any Next-specific code, and you aren't expected to write any.)

Please start a git repo with this code as a base so we can look at your history (you can zip up the whole repo excluding node_modules and build directories to send back, or you can create a private repo on github and add @allenhj). Either way, please email to let us know when you've completed the challenge.

## TASK 0: Setup

First, run `yarn` to install `node_modules`.

Then, run the development server: `yarn dev`

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page will auto-update as you edit the file.

## TASK 1: CSS Challenge

Please take a look at this [homepage mockup](https://www.figma.com/file/4py3t4WTliZl5nELTvS3Ea/Homepage?node-id=0%3A1)

Your first task is to recreate this mockup here in code. This is a CSS-focused exercise, you are not expected to make anything functional. You will need to add/modify code in the following four files:

- `pages/_app.js` (global layout, persistent between pages)
- `styles/Layout.module.css` (CSS for `_app.js`)
- `pages/index.js` (the homepage content)
- `styles/Home.module.css`. (CSS for the homepage)

All required image assets can be found in the `/public/static` directory.

You're only need to make this functional at desktop viewport sizes, but responsive and/or mobile-first is a bonus. There is a lot here, so it's not very likely (or expected) that you're able to complete it
in its entirety.

**Please do not spend more than 30 minutes on this task, and do not use any CSS frameworks.**

## TASK 2: Chat app challenge

For the remainder of the challenge, we'd like you to select one or more items from the list below and work through them on the existing chat page of the app (found at `localhost:3000/chat`). This is a minimally functional chat app that currently only supports automatically adding a new random message from a fake 'user' every 3 seconds.

This list of possible features below is intentionally long so that you can pick and choose what you think is important to make the app more robust. **Please do not think you have to do everything on the list.** Just pick a couple and try to do enough for us to spend 15-30 minutes talking through the decisions you made and how you approached it. Feel free to go off list, and feel free to add packages or adapt the structure of the project as you see fit (though this is not expected).

**Please don't spend more than 1.5 hours working on this, 2 max.**

Here are some features you can work through:

- Adapt the message container to support longer text messages without overflowing
- Add speech bubble image or CSS shape behind each chat message
- Add timestamp to messages
- Group username headers so if the same person chats multiple times in a row it only shows once
- Add a bottom bar with a text input field and a SEND button to enter chat messages into the chat
- Add styling to show different colors for your message vs theirs
- Align your messages to the right and everyone else to the left
- Store Channel state in redux or context where appropriate
- Add multiple "Chat Channels" and a sidebar with a list of channels and the option to create a new one (new ones - will have fake users added)
- Autoscroll to bottom when new message arrives
- Truncate list to newest n messages for performance, reveal batch of older messages when user scrolls to top
- Prevent autoscroll if currently scrolled upwards viewing history (exception - when you send a new message)
- Allow the user to change their email address
- Open "User page" by tapping on user image (show e.g., just email and gravatar image)
- Show all chat users in a sidebar, clicking on user image show a new user view in sidebar (instead of dedicated page)
- Replace any 4-letter words with '****', and for censoring, would you do this `on sending the message , on entering it - in the store or when displaying it and why?
- Replace PropTypes with TypeScript
- Generally improve code quality/organization where weak
