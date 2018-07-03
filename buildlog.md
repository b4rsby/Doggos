
# Awato Project Log


### Saturday 23rd July 2018

Project Scaffolding
CRUD for breed API an RestDB and $resource

***RestDB example project***
https://github.com/RestDB/clientexamples/tree/master/Angular%20simple%20images

Added in directive to load images 

**Development todos:**
Error handling on resource
~~Image bridging to external API~~  (now swap pixabay to dog api)
Cache images? 
External RestDB and external API fallback if provider is down
~~Promises~~ use of $resource covers this
~~address chunking of layout in tables~~  ***Masonry view implemented*** 
 
**Possiblities:**
Adoption map, location, haversine equation for location
Pefinder, extend on pet information dog api (https://dog.ceo/dog-api/) looks like it could help. 

**Close of play wrap up:**
Images are in, although returns some fasle positives, such papillion is a butterfly. Improved perfomance by narrowing catergories to animals, boxer was returning an actual boxer in ring. Newfoundland image of whale...

If have time rollout another image hosting service. 

Also, need to check async dispatch on load images. And if I should be doing it ng-img src instead of directives.

### Tueday 26 July 2018

Little progress, time spent mostly debugging deleting items from rest DB.

***

### Wednesday 27 July 2018

Implemented Boostrap 4 with angular  bindings.
Implemented Masonry view. 

**Development todos:**

Refactor profile image with async
Inline editable descriptions
~~style boostrap~~


### Thursday  28 July 2018

Added a navbar

??? Design decision breif mentions 'tab' for add, depending how explicit this requirement it is. Could be a tab ui element that actions the form is a tab, or both views are in a tab panel per example below.

For UI continuinity, implementing modal popup for form, add new breed located in navbar accessible on page regardless of scroll posistion of data.

### TAB view boiler plate if needed HTML Code:

```
  <form class="card">
               <div role="tabpanel">
                  <ul class="nav nav-tabs nav-justified">
                     <li class="nav-item" role="presentation"><a class="nav-link active" href="#index" aria-controls="index" role="tab" data-toggle="tab">Index</a>
                     </li>
                     <li class="nav-item" role="presentation"><a class="nav-link" href="#add" aria-controls="add" role="tab" data-toggle="tab">Add Dog</a>
                     </li>
                  </ul>
                  <div class="tab-content">
                     <div class="tab-pane active" id="index" role="tabpanel">
                       
                     </div>
                     <div class="tab-pane" id="add" role="tabpanel">
                 
                     </div>
                  </div>
               </div>
            </form>
```

Implemented a hacky infinity scroll, first implementation appended items again to the array, revised to scroll to top of window 

### Friday 29 July 2018

Modal view for form, ok and cancel .

Submit form and validation, had an issue with ng-message when validating form data. **Action: looking into further** 

