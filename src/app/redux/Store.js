"use client"

import reducer from "./Slice";

const { configureStore } = require("@reduxjs/toolkit");

export const store = configureStore({
reducer:reducer
})

