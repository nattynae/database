# Reg Chula Database Project
###### By students on 2110422 Course - Database
 * First version: v1.0 on Presentation day, created by Yukung(nihcet)<br>
 * Second version: v1.1 Update Searching, created by Yukung<br>
**Latest version: v1.1 on 19 April 2018 - 16:07 PM.**

## Feature & Description
 * be able to connect to localhost on port `8080`.
 * be able to access with GET method on `https://localhost:8080`.
 * website be able to search `Person` Data from `Person` table on `project` schema.
    * now searching with `all` is avaliable, it's `select * from person`!
 * website be able to show result of each searching by
    * duplicate searching is avaliable, but webpage won't show a new duplicate result.<br>
    (the data that already be searched and displayed on webpage).
    * if search-keyword can't be found in table `Person`, website will alert.
- - - -
# Shortcut of "How to install`npm`"
 * open command prompt.
 * `cd **YOUR_DIRECTORY**`.<br>
 > **running command prompt as administrator will be required!**<br>
  *in case of **npm** has no privilege on your directory folder to install*.
 * `npm init`.
 * `npm install **HERE**`, by replace `**HERE**` with the following words :
    * `express --save`, `express --no-save`, `http`, `mysql`, `nodemon`  
    * `-g nodemon` (if can't use the nodemon command installed at top)
- - - -
# Problem to solve
 - [x] [Front] : change `BirthDate` format to **Date** without **Time**,<br>
 ***Solved**, But we (may) need to discuss about how to solved it, right?*
 - [ ] [Both] : add **basic system**
 - [ ] [Both] : add **login system**

*[Both] : it's a both (Front&Back - end)'s work/problem, as same with [Front] and [Back]*

- - - -
# Change
## v1.0 to v1.1
  * refactor [1.0]index.html to [1.1]search.html
  * add ability searching with `all` to front-end, it's `select * from person` in back-end`<br>
    that means now our front-end can loop!

- - - -
# How to use github in atom editor
   * fork the project to your github
   * copy clone URL
   * open atom and type "Ctrl + shift + p", then type "git clone" enter
   * Paste the url and select your directory
# How to push
   * open git tab from view /or type "Ctrl + Shift + 9(not on numpad)"
   * double click any items which you would like to push on "Unstaged Changes"
   * fill the commit message
   * press commit button then push
# How to Pull
   * click fecth, the a number of changes will apear if there are some changes
   * click pull
   
