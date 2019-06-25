# Frontend Coding Challenge

## Introduction

You have been tasked with creating a simple yet powerful recipe app using __Angular__ for a local chef.  The app will be created using the following free and open api:

- http://www.recipepuppy.com/about/api/

The chef is rather frugal and does not want the app to fetch data unnecessarily from the server so it must be cached appropriately.  The budget is so small for this project that we have to complete it within 2 hours.

## Instructions

The app will fetch a list of recipes from a server and will allow the chef to star their favorite recipes and the data should persist.  It will consist of just two screens.

The first screen will have a list of 20 ingredients from which the chef can pick from and a search box to filter the list.

Once the chef has selected his ingredient it should navigate to another page containing a list of recipes. Each recipe will contain the title of the recipe, other ingredients required and a link to the recipe page.

When navigating from the ingredients page to the recipe list page the data should be called from the cache and not fetch it from the api each time if the same ingredients are chosen.

## Requirements

The app must be:
1. Presentable
2. Cached to prevent unnecessary api calls
3. Must be tested
4. Optimised for performance
5. Structured as though it is expected to grow into a large enterprise app in the future
6. Display a good overall knowledge of the main Angular concepts and best practices

Create a private repository on Github and add me(dandouglas) as a collaborator once you have finished (or when the time limit expires).

Commit regularly and follow the [Angular guidelines](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#-commit-message-guidelines) for commit messages.

Example commit message: "fix(recipe list): cache not updating"

Good luck!

## Time Limit

2 hours

**Please note: If you get cors issues on the api then it does accept jsonp requests.  You can also use any available service to overcome the cors issue.  If that is a problem then please use any other suitable api to fulfill the requirements of the challenge.

