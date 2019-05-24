# Frontend Coding Challenge

## Introduction

You have been tasked with creating a simple yet powerful recipe app using __Angular__ for a local chef.  The app will be created using the following free and open api:

- http://www.recipepuppy.com/about/api/

The chef is rather frugal and does not want the app to fetch data unnecessarily from the server so it must be cached appropriately.  The budget is so small for this project that we have to complete it within 2.5 hours.

## Instructions

The app will fetch a list of recipes from a server and will allow the chef to star their favorite recipes (the data does not need to persist).  It will consist of just two screens.

The first screen will have a list of 10 ingredients from which the chef can pick from.

Once the chef has selected his ingredient it should navigate to another page containing a list of recipes. Each recipe will contain the title of the recipe, other ingredients required and a link to the recipe page.

When navigating from the ingredients page to the recipe list page the data should be called from the cache and not fetch it from the api each time if the same ingredient is chosen.

Every 10 seconds the underlying data of the cache must be updated to display a new list of recipes in the recipe list. 

However, the recipe list must not automatically update as the chef may be reading one of the recipe ideas. Instead it should notify the chef that there are more recipes available and allow him to choose to update the list. 

Also, instead of making the chef wait 10 seconds for the recipe to update (as he is rather impatient), there should be the option to force a manual update to fetch new recipes.

## Requirements

The app must be:
1. Presentable
2. Cached to prevent unnecessary api calls
3. Tested
4. Optimised for performance
5. Structured as though it is expected to grow into a large enterprise app in the future
6. Display a good overall knowledge of the main Angular concepts and best practices

Create a private repository on Github and add me(dandouglas) as a collaborator once you have finished (or when the time limit expires).

Commit regularly and follow the [Angular guidelines](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#-commit-message-guidelines) for commit messages.

Example commit message: "fix(recipe list): cache not updating"

Good luck!

## Time Limit

2.5 hours

