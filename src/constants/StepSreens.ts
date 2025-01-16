import Loadding from '../screens/loading/Loading';
import Recipes from '../screens/recipes/Recipes';
import StepFive from '../screens/stepfive/StepFive';
import StepFour from '../screens/stepfour/StepFour';
import StepOne from '../screens/stepone/StepOne';
import StepSix from '../screens/stepsix/StepSix';
import StepThree from '../screens/stepthree/StepThree';
import StepTwo from '../screens/steptwo/StepTwo';

export const stepSreens = [
    {
        name: 'StepOne',
        component: StepOne,
    },
    {
        name: 'StepTwo',
        component: StepTwo,
    },
    {
        name: 'StepThree',
        component: StepThree,
    },
    {
        name: 'StepFour',
        component: StepFour,
    },
    {
        name: 'StepFive',
        component: StepFive,
    },
    {
        name: 'StepSix',
        component: StepSix,
    },
    {
        name: 'Loading',
        component: Loadding,
    },
    {
        name: 'Recipes',
        component: Recipes,
    },
];
