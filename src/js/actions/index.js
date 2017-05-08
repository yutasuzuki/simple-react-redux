import { createAction } from 'redux-actions';

export const AWESOME_EVENT = 'AWESOME_EVENT';
export const awesomeEvent = createAction(AWESOME_EVENT);

export const ASYNC_EVENT = 'ASYNC_EVENT';
export const asyncEvent = createAction(ASYNC_EVENT);
