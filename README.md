# Overview

I'm going to be developing this bassackwards, at least from how it seems to me. I'll be developing the frontend first, or at least developing using the CMS first since the CMS is it's own backend anyway.

# Starter Note for Backend

This is very important. Make sure every time you make a new virtual environment, you execute the following commands:

* `python -m pip install -U pip`
* `python -m pip install -U setuptools`

 
# Backend/CMS 

NOTE: Remove the `strapi` field in the package.json file to opt-out of strapi's data collection feature. It will look something like this:

```json

  "strapi": {
    "uuid": "<uuid here>"
  },
```

For this project, I'm looking to use `strapi`, a CMS that can work with any language or framework. At least that's what they claim. I may have some convoluted data flows in this project, but this is mostly for the purpose of demonstrating my ability to make several different technologies working together.

 

 [Link to interacting with React](https://strapi.io/documentation/developer-docs/latest/developer-resources/content-api/integrations/react.html)

## Directory Structure

This is the default directory structure for `strapi`

* `/.cache`: contains files used to build your admin panel.
* `/admin`: (optional) contains your admin customization files.
* `/api`: contains the business logic of your project split into sub-folders per API.
  * \**
    * `/config`: contains the API's configurations (routes, policies, etc.).
    * `/controllers`: contains the API's custom controllers.
    * `/models`: contains the API's models.
    * `/services`: contains the API's custom services.
* `/build`: contains your admin panel UI build.
* `/config`
  * `/functions`: contains lifecycle or generic functions of the project.
    * `/responses`: contains custom responses.
      * `404.js`: contains a template for constructing your custom 404 message.
    * `bootstrap.js`: contains the code executed at the application start.
    * `cron.js`: contains the cron tasks.
  * `server.js`: contains the general configurations of the project.
  * `database.js`: contains the database configurations of the project.
* `/extensions`: contains the files to extend installed plugins.
* `/hooks`: contains the custom hooks of the project.
* `/middlewares`: contains the custom middlewares of the project.
* `/plugins`: contains your local plugins.
* `/public`: contains the files accessible to the outside world.
* `/node_modules`: contains the npm packages used by the project.

# Backend

[Link to interacting with the CMS via Python](https://strapi.io/documentation/developer-docs/latest/developer-resources/content-api/integrations/python.html)

[Link to Backend customization](https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#routing)