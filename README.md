## Demo link

https://silly-douhua-9080e1.netlify.app/

## Running project locally

```sh
yarn install
yarn dev
```

## Choice of Package

### axios

axios is my preferable choice when it comes to handle rest apis due to its simple syntax and configuration.

### react-query

Used to handle apis.
We can also use something like redux-toolkit (rtk query), but this app is simple enough not to apply redux.

### react-icons

Normally icons will be exported from figma as svg.
Since we don't have a particular figma for the app, I use this library for various icons. For example chevron, close, ...

### dayjs

A simple counterpart of momentjs.
Used to display and manipulate date and time, especially for the booking calendar.

### tailwindcss

Tailwindcss is a top choice when it comes to styling to quickly build an app from scratch.
Assuming we are not building UI libraries, it's an suitable CSS library for this app.

### clsx

Used in combination with tailwindcss to make classNames more manageable and customizable.

## Potential Improvement

- Add search function for doctor listing page.
- Add pagination to doctor listing page.
- Display booking calendar with booking records
- Add mobile/tablet layout.

## Production consideration

- Remove hardcoded api key, instead, take it from environment variable
- Remove hardcoded api endpoint, instead, take it from environment variable
- Add github workflow to check build and test

## Assumptions

- The booking calendar was made with the assumption that all the opening hours are o'clock or half past (e.g all 9:00 or all 9:30)
- The slot duration since the start is 1 hour fixed
- It's ok to hardcode api key to make it easy to start up the local dev server

## File structure

The app is mostly structured by features.
https://reactjs.org/docs/faq-structure.html#grouping-by-features-or-routes

The is only one exception of `core`, which is structured by types

Most of the cases we use named export, in case of pages we use default export for simpler lazy loading syntax.

Import syntaxes should contain at most 2 levels nest.
e.g `import { BookingCalendar } from '@/booking/BookingCalendar';`
