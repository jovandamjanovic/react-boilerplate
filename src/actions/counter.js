export const COUNTER_INCREMENT = "COUNTER_INCREMENT";
export const COUNTER_DECREMENT = "COUNTER_DECREMENT";

export const incrementCounter = () => ({
    type: COUNTER_INCREMENT
});

export const decrementCounter = () => ({
    type: COUNTER_DECREMENT
});