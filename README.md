# HotelBooking

A simple Hotel Room Booking Engine that displays hotel rooms and allows users to filter rooms, book a room, and view bookings.

## Dependencies

Install the dependencies:

    ```bash
    cd hotel-booking
    npm install
    ```

## mock API Setup

This app fetches hotel rooms from the mock API.

1. [Register for a free account](https://mockapi.io/) and get your project token.
2. Define Resource schema in mockAPI by following the Room interface (can be found in src/app/room.ts)
3. Rename `environment.example.ts` file in `src/environments/` to `environment.ts`.
4. Replace 'your api key' with the project token you get from the mockApi
5. Replace the content of `environment.development.ts` with your current `environment.ts` content.

> To Softinn recruiters, the project token is already provided in the submitted pdf.

## Running the Demo

Start the local development server:

    ```bash
    ng serve
    ```
> ..and it will run on [http://localhost:4200/](http://localhost:4200).

## Project Screenshot
![Screenshot-hotel-booking](https://github.com/user-attachments/assets/de73976f-32a3-4b62-bbc2-8f31408105ab)

## Design Decisions

- This project was completed as part of a Technical Assessment and intentionally scoped to match the provided requirements.

- Apart from Bootstrap that was used for layout and styling, ng-bootstrap was chosen for the modal, datepicker, and alerts.

- A Bookings page was added to display created bookings. This was not required, but helps visualize the booking data.

- **Future improvements**:
1. Display clear validation messages for all invalid inputs (e.g., check-in date must be today or later) to guide the user.
2. Implement date-based availability filtering.
