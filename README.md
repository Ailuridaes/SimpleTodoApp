# SimpleTodoApp
### Simple Todo App to track tasks

Connects to API in [this repository](https://github.com/Ailuridaes/SimpleTodoApi).

### Technologies Used:
- HTML
- CSS
    + Bootstrap Framework
- Javascript
    + AngularJS
- Gulp

After cloning run `bower install`, `npm install` and then `gulp serve` to run on localhost. Defaults to port 8080, which is configurable in the gulpfile in the 'connect' task.

To pull data, url in /app/js/task.factory.js must point to SimpleTodoApi.

## Screenshots

![Overview](http://imgur.com/Qwj1UYp.png)
Tasks can be sorted using the buttons up top, or by dragging them into place.
Click the checkmark to mark a task completed.


Tasks can be clicked to expand or collapse the description text.
![Click to collapse descriptions](http://imgur.com/KU5EVky.png)


Or click the pen to edit a task.
![Click the pen to edit a task](http://imgur.com/fgDTJd0.png)
