"use strict";
function UpDown() {  
    const controller = this;

    controller.count = 0;

    controller.countUp = () => {
        ++controller.count;
        console.log(`up`);
    }

    controller.countDown = () => {
        --controller.count;
        console.log(`down`);
    }

}

angular.module("UpDown").component('upDown', {
    template:  `
        <div class="counter-container">
            <button ng-click="$ctrl.countUp()">Up</button>
            <div class="number-text">{{$ctrl.count}}</div>
            <button ng-click="$ctrl.countDown()">Down</button>
        </div>`,
    controller: UpDown
});
