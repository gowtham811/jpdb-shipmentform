# Login2XplorE-jpdb-ShipmentForm

# ABOUT THE PROJECT
Shipment Management Form
Project Overview
This project is a web-based "Shipment Management Form" designed to manage shipment records in the "SHIPMENT-TABLE" relation of the "DELIVERY-DB" database. The form allows users to add new shipment records and update existing ones using a simple and intuitive interface. The form is built using HTML, Bootstrap, jQuery, and JavaScript.

Features
Data Entry: Users can input shipment information such as Shipment No., Description, Source, Destination, Shipping Date, and Expected Delivery Date.
Primary Key Validation: The form checks if the Shipment No. exists in the database. If it doesn't, the user can save the new record. If it does, the existing record is displayed, and the user can update the information.
Form Controls:
Save Button: Enables when a new Shipment No. is entered. It allows users to save the entered shipment details to the database.
Update Button: Enables when an existing Shipment No. is found in the database. It allows users to update the shipment details.
Reset Button: Resets the form to its initial state, clearing all fields.

Technologies Used:
HTML: For the structure of the form.
Bootstrap: For styling and responsive design.
jQuery: For DOM manipulation and AJAX requests.
JavaScript: For form validation and database interactions.

Getting Started
Prerequisites
A web browser (e.g., Chrome, Firefox)
Internet connection (for Bootstrap and jQuery CDN)

Installation
Download the Project Files:
Download the HTML, CSS, and JavaScript files provided.

Set Up the Database:
Ensure that the "DELIVERY-DB" database and "SHIPMENT-TABLE" relation are created.
The primary key should be Shipment-No.

Configure API Endpoints:
Modify the AJAX requests in the JavaScript to point to your backend server's API endpoints.

Running the Project:
Open the index.html file in your web browser.
Enter the Shipment No. in the form to check for existing records.
If the Shipment No. is new, enter the shipment details and click [Save].
If the Shipment No. exists, update the fields and click [Update].
Use the [Reset] button to clear the form at any time.

Project Structure:
index.html: The main HTML file containing the form.
styles.css: (Optional) Additional styles for the form.
script.js: JavaScript file containing form validation, AJAX requests, and logic for enabling/disabling form controls.

Known Issues:
Ensure that the API endpoint URLs and connection tokens are correctly configured in the script.js file.
All input fields must be filled before saving or updating a record.

Future Enhancements:
Add input validation to ensure the dates are in the correct format.
Implement additional features such as searching for shipments or deleting records.

License
This project is open-source and available under the MIT License.

