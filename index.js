function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
};

function mondayWork(work = "go to the office"){
    return `This Monday, I will ${work}.`;
};

function wrapAdjective (special){
    return function(adjective) {
        return `You are ${special}${adjective}${special}!`;
    };
};
  