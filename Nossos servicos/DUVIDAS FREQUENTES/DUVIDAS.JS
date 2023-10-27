
    <script>
        const questions = document.querySelectorAll('.question');

        questions.forEach((question) => {
            question.addEventListener('click', () => {
                question.querySelector('.answer').style.display = (question.querySelector('.answer').style.display === 'none') ? 'block' : 'none';
            });
        });
    </script>
</body>
</html>