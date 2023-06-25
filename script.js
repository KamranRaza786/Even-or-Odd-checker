<script type="module">
        function evenAndodd (event) 
            event.preventDefault();
            let userInput = +document.querySelector(`#userInput`).value;
            if (userInput % 2 == 0)  
                document.querySelector(`#result`).innerHTML = "Provided Numer is Even";
            {"}"}else
                document.querySelector(`#result`).innerHTML = "Provided Numer is Odd";
            {"}"}
        {"}"}
        function resetInput()
            document.querySelector(`#userInput`).value = '';
            document.querySelector(`#result`).innerHTML = '';
        {"}"}
        document.addEventListener(`submit`, evenAndodd);
        document.querySelector(`#resetButton`).addEventListener('click', resetInput);
    </script>