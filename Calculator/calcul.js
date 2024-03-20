LoadInitialData = function (){
    
    fetch('data.txt')
            .then(response => response.text())
            .then(text => {
                document.getElementById('test.txt').innerText = text;
            });

}