function check() {
    var score = 0
    var responses = new Array(); //This will hold the checked option from each question
    for (var i = 0; i <= document.getElementsByClassName("question").length; i++) { //for each question
        var qnum = "Q" + (i + 1); //create variable for element name-update each iteration. +1 because i starts at zero bu the first question starts at 1
        var radios = document.getElementsByName(qnum);

        for (var j = 0, length = radios.length; j < length; j++) { //for each possible response
            if (radios[j].checked) {
                responses[i] = radios[j].value; //no need for an else- once we find the checked one, we can exit the loop and move on to the next question to check
            }
        }
    }
    for (var i = 0; i < responses.length; i++) { //Determine the score value for each response
        var ans = responses[i].substr(1, 2);
        switch (ans) {
            case "cs":
                score += 5;
                break;
            case "cl":
                score += 2;
                break;
            case "gs":
                score -= 5;
                break;
            case "gl":
                score -= 2;
                break;
            default:
                score += 0;
        };
    };
    //display the appropriate response page
    if (score >= 0) { window.open("Results/Cashew.html") };
    if (score < 0) { window.open("Results/Ginger.html") };
};