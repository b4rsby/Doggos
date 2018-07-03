# Awato Project: Peter Barsby

## Features

✅ Angular 1.5.8
✅ Boostrap 4 
✅ Pixabay integration for images
✅ RestDB for data storage

---
**Known bugs**
* *Breed Image:* Pixabay produces false positives for some of the requested breed images, example Papillon and Newfoundland reproduces images of butterflies and the greater Canadian Province, not dogs. Work around implemented, but doesn't cover all use case. Suggest switching to a dog dedicated image provider. 

* *Card Insetion* New Breeds are not placed at top of page. Possible solution sort by last added on insertion. Although amore robost solution would  insert card in array where current scroll posistion is. User can see breed added straight away. 

* *Validation* No check that Max age is greater than Min age

---
**Missing features**

* Sorting breed list removed when page switched from pagination to masonry layout with infinity, to re-implement again.
* Highlight newly added breed in the breed list. .
---
**Planned features**


* Sort and Filter, either though Isotope.js for animations or with Angular natively
* Integration to PetFinder API to find selected breeds based on location.
* Support for user uploading there own image to breed selection
* Async image loading
* Liking/ranking system of breeds based on some metric (user browser/OS/etc etc)
