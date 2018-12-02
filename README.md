bootstrapped from
https://medium.freecodecamp.org/how-to-build-a-chat-application-using-react-redux-redux-saga-and-web-sockets-47423e4bc21a

updates to come

* votes stored on front end, which knows when to display them. until then they'll be displayed as question marks or something. should be sufficient for this project, and better than the crappy back end in-memory store from last time

* create new field in state so that there are `votes` and `pastMessages` (or something similar). can either add a new field in global state or change messages state field from array to object and add the fields there.

* votes and past messages are rendered with the same Vote component. votes don't render a message

* once everyone has voted, all votes go into past messages and votes clears out. `MessagesList` or whatever I name it is subscribed to that so the new set of votes will come in, same with `VotesList` except that in this case it just empties itself because it will be an empty list

* alternatively can revisit the "UX", have the user list be where everything happens. usernames will bold or something once they've voted, and once everyone has then that's when the votes show up. might even be simpler as far as state is concerned, could just keep everything under `users`. might actually just go ahead and do this instead
