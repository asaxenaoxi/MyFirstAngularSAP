// Here we are creating a constant which will be imbedded in component.ts inplace of making animations inline
// animeTrigger is defined as a trigger with value of that in the (), similarly every element of the animation 
// can be defined as one of the types and then included rather than include everything in one big function call
export const HomeComponentAnimations = {
/*goalsTrigger: trigger('goalsTrigger', [
    state('in', style({transform: 'translateY(0)'})),
    transition('void => *', [
    animate(700, keyframes([
        style({opacity: 0, transform: 'translateY(-100%)', offset: 0}),
        style({opacity: 1, transform: 'translateY(25px)',  offset: 0.3}),
        style({opacity: 1, transform: 'translateY(0)',     offset: 1.0})
    ]))
])]);*/
};
