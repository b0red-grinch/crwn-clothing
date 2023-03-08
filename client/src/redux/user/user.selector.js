import { createSelector } from "@reduxjs/toolkit";

const userSelector = (state) => state.user

export const selectCurrentUser = createSelector(
    [userSelector],
    (user) => (user.currentUser),
);

