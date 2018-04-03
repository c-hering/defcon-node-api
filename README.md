# defcon-node-api
A RESTful api for defcon streamer app

## Usage

**Base URL: https://defcon-api.herokuapp.com/parseurl/** 

Calling the base URL (with GET request) returns a formatted json of the table on the base directory of https://media.defcon.org

To Specify a single sub directory, add on the parameter as the name of the directory

    ex.
        Single Param Syntax: .../parseurl/[PARAM]
        Sub Directory:          /DEF CON 1
        URL:                 .../parseurl/DEF CON 1 
    
When you than want a sub directory of a sub directory - aka. num of params >= 2 - after the first param, instead of using a '/' for joining the directories, use a '&'.

    ex.
        Multiple Param Syntax: .../parseurl/[PARAM]
        Sub Directory:            /DEF CON 1/DEF CON audio
        URL:                   .../parseurl/DEF CON 1&DEF CON audio
