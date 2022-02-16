//数据加载
function loadHint(value){
    let loadScope = document.getElementById(value.loadId);
    loadScope.innerHTML = `<div class="loading-wait">
                            ${value.name}:${value.loadWrod}
                            <div class="loading-iocn "><img src="./image/loading.png" alt=""></div>
                            </div>`
}