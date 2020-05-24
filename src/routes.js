export const routes = ['/', '/portrait'];

export const mapTabToRoute = slot => routes[parseInt(slot.split('-').pop(), 10) - 1];