# Overview

I'm going to be developing this a slight bit backwards, at least from how it seems to me. I'll be developing the frontend first, or at least developing using the CMS first since the CMS is it's own backend anyway.

This is my first time working with a CMS in this manner, so the workflow is fairly interesting and new.

# Backend
 
## Backend/CMS 

For this project, I'm looking to use `strapi`, a CMS that can work with any language or framework. At least that's what they claim. I may have some convoluted data flows in this project, but this is mostly for the purpose of demonstrating my ability to make several different technologies work together.

 [Link to my strapi docs.](docs/strapi.md)

## Backend/Serverless

Because I like irony, this portion will be stored in the `server` directory of this project.

Until I have a more impressive data structure for this project, I'll be using the backend purely to store transactions. I'll be sending completed transactions from the `React` portion of this project to a python API. 

### Note

Note: This is very important. Make sure every time you make a new virtual environment, you execute the following commands:

* `python -m pip install -U pip`
* `python -m pip install -U setuptools`

Otherwise, just install from `requirements.txt`.



[Link to my Python docs.](docs/python-flask_api.md)

## Database

I'm going to have an interesting setup for the database structures. At least initially. At this stage, I will be using two different databases, in the future this project will work off of one database when I can create a proper database management system.

I'm a huge fan of having a singular source of truth, but I don't want two different applications running migrations on the database until I have a better understanding on what's happening. Once I write some test MySQL scripts and play around with the migrations and feel comfortable with it, I'll merge the two different systems.

One solution is to have the python api written around the database structure that is created with strapi, but I want a better solution than that.

# Frontend

The frontend is build on React, and will interact with `strappi` and the `python-flask api`.

[Link to yarn scripts.](react-client/README.md)

[Link to my React docs.](docs/react.md)



# Future Updates

This project may or may not receive further updates. If it does, it will have a more exstensive data structure and pipelines for moving the data around. Right now I'm more concerned with getting something basic off of the ground.