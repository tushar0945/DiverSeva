export const canProceedToDrivers = (pickup, drop) => {
  return Boolean(pickup && drop);
};

export const canConfirmBooking = (driver, fare) => {
  return Boolean(driver && fare);
};
