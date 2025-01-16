import stepFiveStore from '../stores/stepFive';
import stepFourStore from '../stores/stepFour';
import stepOneStore from '../stores/stepOne';
import stepSixStore from '../stores/stepSix';
import stepThreeStore from '../stores/stepThree';
import stepTwoStore from '../stores/stepTwo';

const useCombinedStore = () => {
    const stepOneScreen = stepOneStore();
    const stepTwoScreen = stepTwoStore();
    const stepThreeScreen = stepThreeStore();
    const stepFourScreen = stepFourStore();
    const stepFiveScreen = stepFiveStore();
    const stepSixScreen = stepSixStore();

    return [
        { ...stepOneScreen.data },
        { ...stepTwoScreen.data },
        { ...stepThreeScreen.data },
        { ...stepFourScreen.data },
        { ...stepFiveScreen.data },
        { ...stepSixScreen.data },
    ];
};

export default useCombinedStore;
