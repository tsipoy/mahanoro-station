# Graded Project - Mahanoro Station

![Design preview for the Mahanoro station coding challenge](./design/1.png)

<!-- ## The challenge

Your challenge is to build out this app and get it working with **redux**, **compound components** and **styled components**, while making it look as close to the design as possible.

This is a website that will allow us to reserve some seats in _"Taxi brousses"_ departing from Mahanoro station.

Your users should be able to:

- Pick a city from the city list
- See the available trips to that city, and pick one where seats are still availalable
- Select one or more seats in the car, and see how much it's going to cost
- Confirm the booking
- See their confirmed bookings on the 'My account'page
- Modify their own information, like name or phone number, on that same page.

## Where to find everything

Your task is to build out the project to the designs from this Figma link: https://www.figma.com/file/6gSAJpaedebKAUuaM4ekFR/Mahanoro-Station?node-id=4%3A38

The data from the trips are available on this link : https://gist.githubusercontent.com/Pinois/36bb5fbf9b6a686f0baf4006dd137bca/raw/a40d8b3f696a75f388db286d57bdd05a925fa0e7/trips.json

## Building your project

Feel free to use any workflow that you feel comfortable with. Below is a suggested process, but do not feel like you need to follow these steps:

1. Initialize your project as a public repository on [GitHub](https://github.com/). This will make it easier to share your code with the community if you need some help. If you're not sure how to do this, [have a read through of this Try Git resource](https://try.github.io/).
2. Configure your repository to publish your code to a URL. This will also be useful if you need some help during a challenge as you can share the URL for your project with your repo URL. There are a number of ways to do this, but I recommend you to use **Netlify**.
3. Look through the designs to start planning out how you'll tackle the project. This step is crucial to help you think ahead how your data and reducers will look like.

## Submit your project

You have until **Tuesday** at **15h30** to submit your github link and netlify link on this form : https://forms.gle/ikBWC2MokmdH4jdw6

**Have fun building!** 🚀 -->



<!-- Introduce your projects by taking a screenshot or a gif. Try to tell visitors a story about your project by answering:

-   Where can I see your demo?
-   What was your experience?
-   What have you learned/improved?
-   Your wisdom? :) -->

### Structure of the project.

- I don't have a src or design folder so I worked with mahanoro-station folder.
- I have five components: Destination.js, DestinationDetails.js, Header.js, Myaccount.js and Trip.js
- I have pages folder which holds the pages files
- I could not use compound component but this project is buld with *redux and style-components*
- I combined all the pages in the in the Header component using switch and route
- As it is a redux project, I also have a state.js which handles all of the states, store.js for storing reducers and state and finally the action which handles all the actions.

### If I had more time,

I would like continuing to search a way to get the four objects that appears in the homepage.
I always get the same date in the destination details.
I couldn't finish most of the requirement so If I had more time I would like continuing them.

### Did you learn anything new while working on this project?

I did't learn so much as I got stuck from the begining. 

### The most challenging parts
Most of the parts are challenging for me. What I mean is that I always have difficulties about the logic. For example, I should get 4 stations in the homepage, actually I got a lot. 
Yet, I still need more practice.
I could not manage most of the big part in this project.

### I would like to have more explanation about: 
- I would like having more explanation about fetchind API redux
- I am a bit confused about mapSateToProps and mapDispatchToProps

## Contact

-   Website [your-website.com](https://mahanoro-station-natacha.netlify.app/)
-   GitHub [@your-username](https://github.com/tsipoy/mahanoro-station)




