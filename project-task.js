/*
===========================================
🏨 JSON Syntax Debugging: Hotel Booking Data
===========================================

🎯 Objective:
Students will analyze a JSON file containing multiple syntax errors,
identify the issues, and correct them.

This activity helps practice spotting and fixing common JSON mistakes such as:
- Missing commas
- Incorrect use of quotation marks
- Unmatched brackets/braces
- Trailing commas
- Invalid data types
*/


// ============================================
// 🧭 Instructions:
// ============================================

/*
📘 Scenario:
You’re a developer on a team building a travel booking API.

A teammate submitted a JSON file to represent a hotel booking, 
but it contains multiple syntax errors that prevent it from being parsed.

🔧 Your Task:
1️⃣ Review the provided JSON file
2️⃣ Identify all syntax errors
3️⃣ Write down what each error is and why it causes a problem
4️⃣ Correct the JSON structure so that it is valid
5️⃣ Validate your corrected version using a JSON linter or validator

🧪 Deliverables:
- A corrected version of the JSON
- A list of the corrections made and why each was necessary
*/


// ============================================
// 🔍 Provided JSON File with Errors
// ============================================

const invalidBookingJSON = `
{
  "hotelName": "Grand City Hotel",
  "checkInDate": "2024-05-15" 
  "checkOutDate": "2024-05-20",
  "guests": [
    {
      name: "Alice Johnson",
      "age": 30,
      "email": "alice.johnson@example.com"
    },
    {
      "name": "Bob Smith",
      "age": undefined,
      "email": "bob.smith@example"
    }
  ],
  "roomDetails": {
    "type": "Suite",
    "pricePerNight": 200,
    "amenities": ["WiFi", "Breakfast", "Parking",]
  }
}
`;


// ============================================
// ✅ Requirements
// ============================================

/*
- Use a JSON validator or linter (e.g., https://jsonlint.com/) to test your final version
- Keep track of each fix:
  • What was wrong?
  • Why is it a problem in JSON?
  • What did you change to fix it?
*/

{
  "hotelName": "Grand City Hotel",
  "checkInDate": "2024-05-15", //comma was missing, added one in
  "checkOutDate": "2024-05-20",
  "guests": [
    {
      "name": "Alice Johnson", // this key was missing quotations, hugged them around name 
      "age": 30,
      "email": "alice.johnson@example.com"
    },
    {
      "name": "Bob Smith",
      "age": null,             // undefined does not function in JSON value, replaced with null
      "email": "bob.smith@example.com" // incorrect email formatting, added @example.com to match Alice's email
    }
  ],
  "roomDetails": {
    "type": "Suite",
    "pricePerNight": 200,
    "amenities": ["WiFi", "Breakfast", "Parking"] // extra comma not needed at the end of Parking, removed it
  }
}

/*

*/

// ============================================
// 🤔 Follow-Up Questions
// ============================================

/*
💬 Reflect and answer the following:

1️⃣ What tools or techniques did you use to identify the errors?

I went overviewing the JSON content first and marked what I could find, along with VSCode's highlighting in the code editor. After parsing through I used jsonlint.com to mint it.
Then I went back to compare and contrast between the original and mine to then finish the comments. 

2️⃣ How did you confirm that your corrected JSON file was valid?

I plugged in my JSON into the linter, this allowed me to double down on my corrections to see if it passed. 

3️⃣ Which errors were the most difficult to spot? Why?

Honestly the email formatting. My mind went over that issue thinking it was preference, that is where the issue was pointed out and realigned to the preset values. 

4️⃣ What strategies can help you avoid these kinds of errors in the future?
   (e.g., syntax highlighting, linters, writing JSON by example)

   Learn down syntax for the repective language, you will be the first and line of defence from defunct code. Utilize your hardware such as your IDE if it has a built in 
   higlighting feature. Use linting software to help for the mistakes that slip through the cracks. Repeat the process over and over because we are only human where we
   will make mistakes and sometimes machines do fail as well, but not as much. 
*/
