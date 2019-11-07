        function addValue(v){
            document.getElementById("display").value += v;
        }

        function clearInput(){
            document.getElementById("display").value = '';
        }

        function evaluateInput(){
            var inputValue = document.getElementById("display").value;
            document.getElementById("display").value = eval(inputValue);
        }