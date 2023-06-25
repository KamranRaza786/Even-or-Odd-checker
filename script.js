<script type="module">
      const isPrime = (num) => {
        if (num < 2) return false;

        for (let i = 2; i <= num / 2; i++) {
          if (num % i === 0) return false;
        }
        return true;
      };

      const form = document.querySelector("#myForm");

      form.addEventListener("submit", (e) => {
        e.preventDefault();

        const output = document.querySelector("#output");
        const userInput = +document.querySelector("#numberInput").value;

        if (!userInput || isNaN(userInput)) {
          output.textContent = "Unknown Error";
          return;
        }

        if (String(userInput).length > 11) {
          output.textContent = "Input limit exceeded";
          return;
        }

        output.textContent = `The number ${userInput} is ${userInput % 2 === 0 ? "Even" : "Odd"}`;

        output.textContent += ` and this is also a ${isPrime(userInput) ? "Prime" : "Composite"} number.`;
      });
    </script>