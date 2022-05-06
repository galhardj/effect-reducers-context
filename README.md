# 3. useReducer + useEffect

- Instead of checking the *setFormIsValid* in the separate email & password handler, it is integrated instead using the previous **useEffect**
- In the useEffect, the **dependencies** were made to be pointing to email & password validity state instead of their values 
(i.e. otherwise, each character update to input field will trigger useEffect -> not efffective)
- Destructuring is used for pointing the isValid of each password & email from their reducer states.