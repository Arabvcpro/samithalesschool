function showStage(stage) {
    const stageInfo = document.getElementById("stage-info");
    let infoText = "";

    switch(stage) {
        case 'beginner':
            infoText = "You are starting at the Beginner level. This is the foundation for your learning. Courses include basic programming, web development, and more.";
            break;
        case 'intermediate':
            infoText = "You are starting at the Intermediate level. These courses will dive deeper into complex subjects such as data structures, algorithms, and backend development.";
            break;
        case 'advanced':
            infoText = "You are starting at the Advanced level. Expect to work on challenging projects and cover topics like AI, machine learning, and full-stack development.";
            break;
        default:
            infoText = "Please select a valid stage.";
    }

    stageInfo.textContent = infoText;
}

