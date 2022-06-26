<html>

<body>

    <script>
        let ready = true;
        let win = 0;
        let attempts = 0;
        let oldRecord = 0;
        let newRecord = 0;





        // ### core ###





        alert('Игра "Угадай число"');

        let name = prompt("Введите ваше имя?");
        let tutorial = confirm("Пройти обучение?");

        while (true) {

            if (tutorial) isTutorial();

            do {
                
                classicGame();
                getStatistics();

                isReady();

            } while (ready);

            break;
        }





        // ### function ###






        function isTutorial() {
            alert("Правила просты: Исскуственный интелект загадывает число, а твоя задача - отгадать его.");
            // alert("Если хотите выйти из игры");
            tutorial = 0;
        }

        /* function level() {
            prompt("Сложность: Ребенок, школьник, студент, взрослый, пенсионер");
        } */

        function randomInteger(min, max) {
            let random = min - 0.5 + Math.random() * (max - min + 1);
            return Math.round(random);
        }

        function classicGame() {
            let randomNumber = randomInteger(1, 10);
            let enterNumber = +prompt(`Введите число!`);
            // let enterNumber = +prompt(`Введите число! ${randomNumber}`);


            while (true) {

                if (enterNumber > randomNumber) {
                    enterNumber = +prompt(`${enterNumber}. Меньше!`);
                    attempts++;
                    continue;

                } else if (enterNumber < randomNumber) {
                    enterNumber = +prompt(`${enterNumber}. Больше!`);
                    attempts++;
                    continue;

                } else if (enterNumber === randomNumber) {
                    alert("Верно!");
                    break;
                }
            }
        }

        function getStatistics() {
            newRecord = attempts;
            attempts = 0;

            if (newRecord < oldRecord) {
                oldRecord = newRecord;
            }

            alert(`Имя: ${name}; Наименьший рекорд попыток: ${newRecord}`);
        }

        function isReady() {
            ready = confirm(`${name}, ещё?`);
            if (!(ready)) ready = false;
        }

    </script>

</body>

</html>
