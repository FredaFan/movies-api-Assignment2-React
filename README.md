# Assignment 1 - ReactJS app.

Name: Jiayu Fan

## Features.

...... A bullet-point list of the ADDITIONAL user features you have implemented for the  Movies Fan app ......,

 + Feature 1 - Upcoming movie page: Users can view some movies which will be displayed in the future.
 + Feature 2 - Add to watch-list button: Users can click this button and then the movie will disappear in upcoming page.
 + Feature 3 - Popular movie page: Users can view some hot and popular movies recently.
 + Feature 4 - Add to Flag button: Users can click this button and then the movie will disappear in popular page.
 + Feature 5 - Top Rated movie page: Users can view some movies which got high vote count.
 + Feature 6 - Now Playing movie page: Users can view some movies which are on now.
 + Feature 7 - Poppular People Page: Users can see some actors and people who are very popular.
 + Feature 8 - Movie details page: Users can get into this page by clicking any movie in any movie page and then you can see some new added movie details in this page such as vote count and popularity.
 + Feature 9 - Movie review page: Users can see brief view in details page containing author and part of review, you can see full review if you click "Full Review" link in addition.
 + Feature 10 - Similar movie page in details page: Users can click show similar movies button and then see similar movies with title and part of overview. If you click "Full Details" link, you can see the whole details of the similar movie in a new detail page. You can click Hide similar movies if you don't want to see them.
 + Feature 11 - Recommendations movie page in details page: Users can click show recommendations movies button and then see recommendations with title and part of overview. If you click "Full Details" link, you can see the whole details of the recommendation in a new detail page. You can click Hide Recommendations movies if you don't want to see them.
 + Feature 12 - Movie Cast page in details page: Users can click show cast button and then see movie casts with cast name, character, popularity, known department and profile. You can click Hide Cast if you don't want to see them.
 + Feature 13 - Movie Crew page in details page: Users can click show crew button and then see movie crew with crew name, job, popularity, known department and profile. You can click Hide Crew if you don't want to see them.
 + Feature 14 - People Details page: Users can get into this page by clicking any person in popular people page and then you can see some people details in this page such as profile, biography, birthday and so on.

## Setup requirements (If required).

...... A brief explanation of any non-standard setup steps necessary to run your app/client locally (after cloning the repo) ........

## API Data Model.

..... List the additional TMDB endpoints used in your assignment, e.g.

+ https://api.themoviedb.org/3/movie/${id} - get detailed information on a specific movie. 
+ https://api.themoviedb.org/3/genre/movie/list - get a list of movie genres
+ https://api.themoviedb.org/3/movie/upcoming - get upcoming movies
+ https://api.themoviedb.org/3/movie/popular - get popular movies
+ https://api.themoviedb.org/3/movie/top_rated - get top rated movies
+ https://api.themoviedb.org/3/movie/now_playing - get now playing movies
+ https://api.themoviedb.org/3/movie/${id}/similar - get similar movies of the specific movie
+ https://api.themoviedb.org/3/movie/${id}/recommendations - get recommendations movies of the specific movie
+ https://api.themoviedb.org/3/movie/${id}/credits - get cast and crew of the specific movie
+ https://api.themoviedb.org/3/person/popular - get popular people
+ https://api.themoviedb.org/3/person/${id} - get detailed information on 

## App Design.

### Component catalogue (If required).

....... Insert a screenshot from the Storybook UI, hi-light stories relating to new/modified components you developed - see example screenshot below] .......

![storybook]

![截屏2020-12-12 下午8.07.12](https://tva1.sinaimg.cn/large/0081Kckwgy1gllue02k9uj30bg14cad7.jpg)



### UI Design.

...... Insert screenshots of the new/modified views you have added to the Movies Fan app. Include a caption for each one clearly stating its purpose and any user interaction it supports ........

![movieDetail- show similar movies]

![](https://tva1.sinaimg.cn/large/0081Kckwgy1gllsdvxwwij31c00u0n3x.jpg)

>Shows detailed information on a movie containing vote count and popularity. Clicking the 'Show Similar Movies' button will display title and part of movie overview from similar movies.

![similar movies' details]![截屏2020-12-12 下午9.40.25](https://tva1.sinaimg.cn/large/0081Kckwgy1gllsgbw4n4j31c00u0nn2.jpg)

>Shows the full detailst for a similar movie. 

![movieDetail- show recommendations movies]!![](/Users/fanjiayu/Desktop/截屏2020-12-12 下午9.43.36.png)

>Clicking the 'Show Recommendations r Movies' button will display title and part of movie overview from recommendations  movies.



![recommendations  movies' details]!![](https://tva1.sinaimg.cn/large/0081Kckwgy1gllsm32v2sj31c00u04qp.jpg)

>Shows the full detailst for a recommendation  movie. 



![movieDetail- show movie cast]!![截屏2020-12-12 下午9.48.13](https://tva1.sinaimg.cn/large/0081Kckwgy1gllsq33hd2j31c00u07wh.jpg)

>Clicking the 'Show Cast' button will display cast name, character, popularity, knwon department and profile from the movies' cast

![movieDetail- show movie crew]!

![截屏2020-12-12 下午10.00.46](https://tva1.sinaimg.cn/large/0081Kckwgy1gllt1vxf6qj31c00u0e81.jpg)

>Clicking the 'Show Crew' button will display crew name, job, popularity, knwon department and profile from the movies' crew



![Popular movie- show popular movie list]!![截屏2020-12-12 下午10.02.11](https://tva1.sinaimg.cn/large/0081Kckwgy1gllt3oan4yj31c00u0x6r.jpg)

>Clicking the 'Popular' link in the header will display popular movie list.





![Top Rated movie- show top rated movie list]!![截屏2020-12-12 下午10.06.33](https://tva1.sinaimg.cn/large/0081Kckwgy1gllt7w1d02j31c00u01kz.jpg)

>Clicking the 'Top Rated' link in the header will display top rated movie list.



![Now Playing movie- show now playing movie list]!![截屏2020-12-12 下午10.07.50](https://tva1.sinaimg.cn/large/0081Kckwgy1gllt9akgurj31c00u0x6r.jpg)

>Clicking the 'Now Playing' link in the header will display now playing movie list.



![Popular people- show popular people list]!![截屏2020-12-12 下午10.09.22](https://tva1.sinaimg.cn/large/0081Kckwgy1glltam9nq8j31c00u0e83.jpg)

>Clicking the 'Popular people' link in the header will display popular people list.



![Popular people details- show popular people details]!![截屏2020-12-12 下午10.10.20](https://tva1.sinaimg.cn/large/0081Kckwgy1glltbll3jwj31c00u04qp.jpg)

>Clicking the a person card and it will link to a person details page.







## Routing.

...... Insert a list of the additional routes supported by your Movies Fan app. If relevant, specify which of the routes require authentication, i.e. protected/private.

+ /movies/favorites (protected) - displays the user's favorite movies selection.
+ /reviews/:id (public) - displays the full text of a movie review.
+ /movies/:id/similar (public). - show similar movies of the selected movie in movie detail page.
+ /movies/:id/recommendations (public). - show recommendation movies of the selected movie in movie detail page.
+ /movies/:id/recommendations (public). - show recommendation movies of the selected movie in movie detail page.
+ /movies/:id/cast (public). - show cast of the selected movie in movie detail page.
+ /movies/:id/crew (public). - show recommendation movies of the selected movie in movie detail page.
+ /movies/upcoming (public) - displays the upcoming movies.
+ /movies/upcoming (public) - displays the upcoming movies.
+ /movies/popular (public) - displays the popular movies.
+ /movies/top (public) - displays the top rated movies.
+ /movies/nowplaying (public) - displays the now playing movies.
+ /people/popular (public) - displays the popular people page.
+ /people/:id (public) - displays details of the selected person.

### Data hyperlinking.

.... Use screenshots to illustrate where data hyperlinking is present in your views - include captions.



![Full details link- show full details of the similar movie]!![637FD79F-CA0D-40E7-9CF7-48263CF9813C](https://tva1.sinaimg.cn/large/0081Kckwgy1glltwjsx73j31k20u0h1l.jpg)

>Clicking the 'Full Details' for a detail page which will display the full details of the selected movie.



![Full details link- show full details of the recommendations movie]!![0D4EC80C-D7A9-48FC-88B4-1D08E42D31CA](https://tva1.sinaimg.cn/large/0081Kckwgy1gllu0totb8j31gj0u018k.jpg)

>Clicking the 'Full Details' for a detail page which will display the full details of the selected movie.



![Add to Flag button]!

![88A27680-B4C0-4EBD-AB81-6957A0CCD13B](https://tva1.sinaimg.cn/large/0081Kckwgy1gllu3e2joaj31lq0u07po.jpg)

>Clicking a "Add to Flag" button causes the display of disapperance of the movie in this page.



![Add to Flag button]!![9092652E-2063-41E2-9D9C-97819DEAFA73](https://tva1.sinaimg.cn/large/0081Kckwgy1gllu78vio4j31h70u0nee.jpg)

>Clicking a card causes the display of that person's details.







## Independent learning (If relevant).

. . . . . Briefly mention each technologies/techniques used in your project codebase that were not covered in the lectures/labs. Provide source code filename references to support your assertions and include reference material links (articles/blogs).

---------------------------------

# Assignment 1 - Agile Software Practice.

Name: ... your name ...

## App Features.

[Document each new feature/page in your Movies Fan app, including: Feature Name; Its objective/purpose; The associated test file; a screenshot of its UI.]
e,g,

+ Movie Details page - Shows the details about a movie. The Show reviews button reveals an excerpt for each critic review of the movie.

Tests: cypress/integration/movieDetails.spec.js 



+ Movie Details page - The Show similar movies, Show recommendations movies, Show cast and Show crew buttons will reveal some content of the movie when they are clicked.

Tests: cypress/integration/movieDetails-page.spec.js 

![截屏2020-12-12 下午11.02.50](https://tva1.sinaimg.cn/large/0081Kckwgy1glluu2tbyuj31c00u0e81.jpg)



+ Favorites page - Favorites page will show the movie which is clicked by th "Add to favorite" button in home page.

Tests: cypress/integration/favorite-page.spec.js 

![](/Users/fanjiayu/Desktop/截屏2020-12-12 下午11.05.17.png)



+ Add review - Show the add review form and consider some different situations which related to nesting tests.

Tests: cypress/integration/addReview-page.spec.js 

![截屏2020-12-12 下午11.11.17](/Users/fanjiayu/Desktop/截屏2020-12-12 下午11.11.17.png)



+ Popular movie page - Shows the popular movie. When you can click "Add to Flag" button, the movie will disappear.

Tests: cypress/integration/popular-page.spec.js 

![截屏2020-12-12 下午11.14.55](https://tva1.sinaimg.cn/large/0081Kckwgy1gllv6e346gj31c00u0x6r.jpg)



+ Upcoming movies page - Shows the upcoming movies and the movie will disappear if you click the "Add to Watch List"

Tests: cypress/integration/upcoming-page.spec.js 

![截屏2020-12-12 下午11.25.39](https://tva1.sinaimg.cn/large/0081Kckwgy1gllvhqoaevj31c00u0u0z.jpg)



+ Top rated movies page - Shows the top rated movies.

Tests: cypress/integration/topRated-page.spec.js 

![截屏2020-12-12 下午11.15.46](https://tva1.sinaimg.cn/large/0081Kckwgy1gllv8jix7dj31c00u01kz.jpg)



+ Now paying movies page - Shows now playing movies.

Tests: cypress/integrationnowPlaying-page.spec.js 

![截屏2020-12-12 下午11.17.31](https://tva1.sinaimg.cn/large/0081Kckwgy1gllva7oxf4j31c00u0x6r.jpg)



+ Popular people page - Shows the popular people.

Tests: cypress/integration/person-page.spec.js 

![截屏2020-12-12 下午11.22.03](https://tva1.sinaimg.cn/large/0081Kckwgy1gllvem4dhtj31c00u0e83.jpg)



## Testing.

Cypress Dashboard URL:https://dashboard.cypress.io/projects/nkytgt

### Advanced Testing (If required).

[State briefly each instances of boundary and/or error/exceptional test case in your project]
e.g.

+ cypress/integration/addReview-page.spec.js - test the function of submit the revies including several situations (corrects, erros and exceptions) with nesting tests. 
+ cypress/integration/favorite-page.spec.js - test when a movie was added to favorites and test the "Write review" button.
+ cypress/integration/movieDetails-page.spec.js - test movie details page and test "Show reviews", "Show similar movies", "Show recommendations", "Show cast" and "Show crew" buttons. They will change the url when they are clicked.
+ cypress/integration/navigation.spec.js - test when the link in the page header was clicked, it will navigate to the certain url and test "Go back" button in each page.
+ cypress/integration/upcoming-page.spec.js - test show header, filtering, movie card and test the "Add to Watch List" button.
+ cypress/integration/popular-page.spec.js - test show header, filtering, movie card and test the "Add to Flag" button.
+ cypress/integration/topRated-page.spec.js - test show header, filtering and movie card.
+ cypress/integration/nowPlaying-page.spec.js - test show header, filtering and movie card.
+ cypress/integration/person-page.spec.js - test show header, filtering and movie card.

## Independent learning (If relevant).

[ Itemize each technologies/techniques used in your project that were not covered in the lectures/labs. Provide the necessary evidence of their use (e,g, project file names, screenshots, service URL, etc)

List reference material links (articles/blogs).

---------------------------------

[]: 
