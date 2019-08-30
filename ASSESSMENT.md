Restaurant Menu

## How to run the project:

In the project directory, you can run:

### 1) cd into amazee
### 2) npm install (once)
### 3) npm start

## Project structure

- The `Home` component is the parent component. It holds a `step` element in its state that controls which course will be displayed. In its state it also holds the data for all the selections the user makes, which is passed by the `Home`'s child component, `Course`. 
- The `Course` component receives props from `Home` about the current step and then fetches the corresponding course items from the fe-tech-data.js file. 
- Each time the user selects an item from a course and clicks the `Next` button, the selected course data is passed and stored to the `Home`'s state and the step is incremented.
-  When all course types are selected, the `Results` component is triggered to display the list of selected courses. Courses without at least one selected item are not displayed. 
- Allergy items are collected on each step by each selected course and stored in an array on the parent `Home` component. The array is then displayed on the `Results` component at the top. 
- All components are found inside the `components` folder and can be edited, extended or new components can be added.
- Below is a sample graphical interface of the parent/child, data and flow relationships of the components

                                        (start)
                                       | ---- |
                                       | Home |
                                *****  | ---- | *****
                              ***                   ***
                           ***                         ***
                    |  -----  |                       |  ------  | 
                    |  Course | (multiple)   ----->   |  Results | (end)
                    |  -----  |                       |  ------  | 

