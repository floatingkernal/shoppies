# Shoppies

[Live Demo](tbd)

### What I have done
- Created a Shoppies nomination app that meets and exceed the technical requriements in the following ways:
  - Searching is done any time the search bar is updated using OMDB Api 
  - Adding or removing nominations can be done by click on the check mark or x icons respectively. Checks marks are disabled when nomination is selected. Tooltips are available for assistance.
  - When exactly 5 nominations are selected, green success banner shows up. You can add more but the banner will dissapear as a result.
  - Nominations are stored in the url. This made creating a shareable link and saving the list of nominations as easy as using the url. 
  - Some animations for loading when calling the api is also available. 
  - Shareable link is available and can be accessed by clicking the blue share icon on the top right side of the app
  - Used vuetify and vuejs to create a nice designed application for this assessment 

### Technical challenges I faced
- Too many api requests were being made. I only have a limit of 1000 requests per day and so I added the automatic searching when I had other components created. I still had an issue where every time any updates happen to the nominations, there are a multiple api call made to get the movies data. I solved this by using the store to keep track of the nominations and update that instead of relying on the url for the list. This allowed me to reduce my api call to a constant amount from a quadratics amount. Only when refreshing the page make multiple api calls again
- Some small bugs did arrise as well such as components not looking properly or the url was not being made properly. Those were addressed from my past experiences but still brought difficulties hunting down those bugs. I am happy that I managed to squash as many bugs as I could. Some still remain such as the front end does not look good in mobile. This bug was out of the scope of this assessment so I did not address it but I know it exists. 

### Testing
- Testing this app was done manually for this assessment as there were a small amount of use cases I needed to keep track of. These tests include:
  - Searching in the search bar updates the results component 
  - results in the results component showed accurate details obtained from the OMDB Api calls
  - each result had a nomitate button that was only active if the movie was not nominated yet. 
  - when a movie is nominated, the movie is shown on the right hand side and the results nomination button is disabled
  - when there is exactly 5 nominatons selected, a banner shows up indicating we have 5 selections
  - when we reload the page, our nominations are saved
  - when we share the link, others can view our nominations as well. 