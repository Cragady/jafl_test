[Back to Readme](../README.md)

## From Scratch

If you are starting from scratch, remove the `strapi` field in the package.json file to opt-out of strapi's data collection feature. It will look something like this:

```json

  "strapi": {
    "uuid": "<uuid here>"
  },
```

You'll probably also want to remove any values that `strapi` inserted into the boiler plate for this portion of the project. I highly recommend using `.env` files to handle sensitive data. The `CMS/` directory, as well as the `package.json` file therin, will have a basic structure and scripts to handle this. 

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


[Link to quick start for strapi.](https://strapi.io/documentation/developer-docs/latest/getting-started/quick-start.html)

[Link to interacting with React.](https://strapi.io/documentation/developer-docs/latest/developer-resources/content-api/integrations/react.html)

[Link to deploying to AWS.](https://strapi.io/documentation/developer-docs/latest/setup-deployment-guides/deployment/hosting-guides/amazon-aws.html)

[Back to Readme](../README.md)