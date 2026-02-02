# HotelBooking

A simple Hotel Booking Engine that displays hotel rooms and allows users to filter rooms, book a room, and view bookings.

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
> The app runs on [http://localhost:4200/](http://localhost:4200) by default.

![Screenshot-hotel-booking](https://github.com/user-attachments/assets/75f6ba87-7c7f-44a6-bd80-ac8ab627c997)
