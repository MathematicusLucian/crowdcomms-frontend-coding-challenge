# Frontend Coding Challenge

## Introduction

You have been tasked with creating a simple yet powerful recipe app using __Angular__ for a local chef.  The app will be created using the following free and open api:

- http://www.recipepuppy.com/about/api/

The chef is rather frugal and does not want the app to fetch data unnecessarily from the server so it must be cached appropriately.  The budget is so small for this project that we have to complete it within 2.5 hours.

Please fork this repository and once finished (or when the time limit has expired) send a pull request.  

## Instructions

The app will fetch a list of recipes from a server and will allow the chef to star their favorite recipes (the data does not need to persist).  It will consist of just two screen.

The first screen has a list of 10 ingredients which you can pick from.

Once you have selected your ingredient it should navigate to another page containing a list of recipes. Each recipe will contain the title of the recipe, ingredients required and a link to the recipe page.

When navigating from the ingredients page to the recipe list page the data should be called from the cache and not the fetch it from the api each time if the same ingredient is chosen.

Every 10 seconds the underlying data of the cache must be updated to display a new list of recipes in the recipe list. 

However, the recipe list must not automatically update as the chef may be reading one of the recipe ideas. Instead it should notify the chef that there are more recipes available and allow him to choose to update the list. 

Also, instead of making the chef wait 10 seconds for the recipe to update as he is rather impatient, there should be the option to force a manual update to fetch new recipes.

## Requirements

The app must be:
1. Presentable
2. Cached to prevent unnecessary api calls
3. Tested
4. Optimised for performance
5. Structured as though it is expected to grow into a large enterprise app in the future
6. Display a good overall knowledge of the main Angular concepts 


## Time Limit

2.5 hours

