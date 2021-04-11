const date = new Date();
const hour = date.getHours();
const month = date.toLocaleString("default", { month: "long" });

export { hour, month };
