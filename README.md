## Task is live at https://ttt-task-seven.vercel.app

## Running the App

Download and unzip the file or directly run the command `git clone https://github.com/krishanpareek809/ttt-task.git`

In the project directory, you can run these two commands one after other to start the development server:

### `npm install && npm run dev`

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Explaination

# Components: 

There are three components in './src/components' for better structurability and readability, also we can reuse these components:

1. Navbar
2. Profile
3. Feed

In Profile, I imported and used Material UI for different icons like Star, Thumb for Like, Favourite and Total Views.

Next comes our main component that is Feed for posts, in this component I used useState hook for state management and to store data in variables. 

API is used for post and feed data and async function is implemented for fetching the complete data using await keyword. 

Finally, useEffect hook is used to render the function on browser with all the functionalities such as like/unlike the post.

Webpage is responsive and can run on multiple devices.