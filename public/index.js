
(()=>{
    let count = 0;
    const count_field = document.getElementById('count');
    setInterval(()=> {
        count_field.innerHTML = count;
        count++;
    }, 50)
})();
