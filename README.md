
# NexviewGPT

- installed vite bundler for the project
- installed and configured Tailwind CSS
- Header
- Login / Sign up form
- Routing of Pages
- form validation
- useRef hook
- firebase setup 
- deployed to production
- create sign up user account
- create sign in user
- user authentication completed
- created redux store with userSlice
- used authStateChange Api for getting the signin and signout details
- update profile
- username on navbar using redux on browse page
- without signing-in user can only access login / signup page
- created tmdb account
- got api key and access token
- got movies data
- fetched movies data 
- storing movies data in redux store using movies slice
- built nowPlayingMoviesHook 
- updateed store with moviesData
- planning for main and secondary container
- fetched data for movie trialer video
- embedded the youtube video and made it autoplay and mute
- made web app responsive for all device sizes till the browse page video container
- built the secondary container , movie list container and movie card container
- added poster image url to constants file 
- fetched poster image and displayed in cards
- built hooks for fetching movie list data  
- built all the movie lists (top rated, upcoming, popular, now playing)
- built watch movie page
- created watch now button on movie cards and passed that movie's id as params to watch page using navigate
- accepted the id passed from cards to watch page using useParams hook
- got the movie trailer in watch page using the useselector
-  passed the id to usemovietrailer hook and got the trailer video key
- using i frame tag passed the key for the video and play the trailer
- made the playing trailer dynamic by using useefect in usemoviestrailer everytime the id changes the useefect is called and changes the movie trailer video
- completed the watch movie page if anyone clicks on any video at any page that video will be played in the watch movie page at the top and other movie cards will be shown below it 



<!-- BROWSE PAGE -->
 - Main Container
   - Background Video 
   - Video title

  - Secondary Container 
    - Movies Lists * n
      - Movie Cards * n






# Features
-Login/Signup
   - Sign-in / Sign-up Form
   - Redirect to Browsing Page
-Browse (only after authentication)
   -Header
   -Main Movie
      -Trailer in Background
      -Title & description
      -Movie Suggestions
         -MoviesList * N
-NexviewGPT
   - Search Bar
   -Movie suggestions

