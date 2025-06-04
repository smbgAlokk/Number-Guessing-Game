/*         
Javascript Execution Context:-

=> Think of it like a big box where JavaScript runs your code line by line.



📦 Every time JavaScript runs a program, it creates a "box" (Execution Context) that has:
1. Memory (also called "Variable Environment")
👉 This is where all variables and functions are stored.

2. Code (also called "Thread of Execution")
👉 This is where JavaScript runs your code line by line.




👇 Two Phases of Execution Context:
1. Memory Creation Phase (Preparation)

JavaScript scans the code and stores all variables and functions in memory with a default value.

2. Code Execution Phase

JavaScript runs the code line by line and updates variable values.



🧠 Types of Execution Context:
1. Global Execution Context (GEC) – Runs the main code.

2. Function Execution Context (FEC) – Created every time a function is called.

3. Eval Execution Context – Used rarely for special eval() code.



🎯 Simple Analogy:
Imagine you're cooking in a kitchen:

> Memory is like placing all ingredients on the table.

> Code execution is like cooking step by step using those ingredients.

# Call Stack: (LIFO)
The call stack is a data structure that keeps track of the function calls in the order they were made
*/
