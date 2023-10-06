const QuestionElement = document.querySelector(".question")

function Generate(Type) {
    let QuestionText
    if (Type === "trig-functions") {
        let TrigNum, TrigType, TrigMultiplier;
      
        const TrigRandType = Math.random();
      
        if (TrigRandType < 0.33) {
          TrigType = "sin";
          TrigMultiplier = 360;
        }
        else if (TrigRandType < 0.67) {
          TrigType = "cos";
          TrigMultiplier = 360;
        }
        else {
          TrigType = "tan";
          TrigMultiplier = 180;
        }
      
        const randomNumber = Math.floor(Math.random() * 5) + 1;
        TrigNum = TrigMultiplier * (Math.floor(Math.random() * 11) - 5) + [0, 30, 45, 60, 90][randomNumber - 1];
      
        QuestionText = `${TrigType}(${TrigNum})`;
    }
    if (QuestionElement.textContent == QuestionText) { Generate(Type) }
    else { QuestionElement.textContent = QuestionText }
}