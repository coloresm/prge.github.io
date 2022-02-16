loadHint({
    name: '朗朗口腔',
    loadId: 'load-scope',
    loadWrod: '数据加载中……'
});
$.ajax({
    url: "./data/index.php",
    dataType: "json",
    async: "false",
    Cache: "flase",
    data: {
        categoryId: 123456,
    },
    // headers: {
    //     //默认
    //     "Content-type":"application/x-www-form-urlencoded; charset=utf-8"
    // },
    type: "POST",
    beforeSend: function () {
        //请求前的处理
    },
    success: function (req) {
        //请求成功时的处理
        let loadScope = document.getElementById('load-scope');
        if (!req.data || req.data.length === 0) {
            loadHint({
                name: '朗朗口腔',
                loadId: 'load-scope',
                loadWrod: '未获取到有效数据'
            });
            return false
        };
        let ul = '<ul class="clearfix">';
        req.data.forEach(beau => {
            ul += `<a href="newsDatail.php?id=${beau.id}"><figure>
                    <img src="${beau.imgUrl}" alt="${beau.title}">
                    <figcaption>${beau.title}</figcaption>
                    <p>${beau.dec}</p>
                    </figure></a>`
        });
        ul += '</ul>' + '<a href="#" class="more-link">查看更多</a>';
        loadScope.innerHTML = ul
    },
    complete: function () {
        //请求文成的处理
    },
    error: function () {
        //请求出错时的处理
        loadHint({
            name: '朗朗口腔',
            loadId: 'load-scope',
            loadWrod: '请求地址出错，暂时无法访问'
        })
    }
})
//公益
loadHint({
    name: '朗朗公益',
    loadId: 'welfareWrap',
    loadWrod: '数据加载中……'
});
$.ajax({
    url: "./data/index.php",
    dataType: "json",
    async: true,
    cache: false,
    data: {
        module: 'welfare',
        categoryId: 10000
    },
    type: "POST",
    beforeSend: function () {
        //请求前的处理
    },
    success: function (req) {
        //请求成功时处理
        let welfareWrap = document.getElementById('welfareWrap');
        let data = req.data;
        if (!data || data.length === 0) {
            loadHint({
                name: '朗朗公益',
                loadId: 'welfareWrap',
                loadWrod: '未获取到有效数据'
            });
            return false
        };
        html = `<div class="welfare-wrap">`;
        html += `<div class="row">
                      <div class="welfare-flex">
                          <div class="welfare-big">
                              <img src="${data[0].imgUrl}" alt="${data[0].title}">
                          </div>
                          <div class="welfare-small">
                              <div class="content-dec">
                                  <h4 class="title-x">${data[0].title}</h4>
                                  <time>${data[0].date}</time>
                                  <i class="line"></i>
                                  <a href="" class="link-more">查看更多</a>
                              </div>
                          </div>
                      </div>
                  </div>`;
        data.forEach((i, t) => {
            if (t != 0) {
                html += `<div class="row">
                    <div class="welfare-flex">
                        <div class="welfare-big">
                            <div class="content-dec">
                                <h4 class="title">${i.title}</h4>
                                <time>${i.date}</time>
                                <i class="line"></i>
                                <p class="dec">${i.dec}</p>
                                <a href="" class="link-more">查看更多</a>
                            </div>
                        </div>
                        <div class="welfare-small">
                            <img src="${i.imgUrl}" alt="">
                        </div>
                    </div>
                </div>`}
        });
        html += `</section>`
        welfareWrap.innerHTML = html
    },
    complete: function () {
        //请求完成的处理
    },
    error: function () {
        //请求出错处理
        loadHint({
            name: '朗朗公益',
            loadId: 'welfareWrap',
            loadWrod: '请求地址出错，暂时无法访问'
        })
    }
});

// 朗朗资讯

    //资讯分类

        //初始化数据提示
loadHint({
    name: '郎朗资讯-头部导航',
    loadId: 'tabMenu',
    loadWrod: '数据加载中……'
})
    //获取分类
let tabMenu = document.getElementById('tabMenu')
//获取列表
let getTabe = document.getElementById('getTabe')
    //ajax分类处理
$.ajax({
    url: './data/newsCategory.php',
    dataType: 'json',
    timeout: '5000',
    headers: {'Content-type': 'application;charset=utf-8'},
    data: JSON.stringify({module: 'news1'}),
    type: 'POST',
    //请求成功
    success: function(req) {
        let data = req.data
        if( !data || data.length === 0) { 
            loadHint({
                name: '郎朗资讯-头部导航',
                loadId: 'tabMenu',
                loadWrod: '没有数据请稍后再试'
            })
            return false}
        let aHtml = ''
        data.forEach( item => {
            aHtml += `<a data-type="${item.type}" onclick="trigger({_this: this,id: ${item.id}})" href="javascript: void(0)" title="${item.categoryName}" >${item.categoryName}</a>`
        })
        tabMenu.innerHTML = aHtml
        //默认第一个高光/列表展示第一个
        trigger({
            _this: tabMenu.children[0],
            id: data[0].id
        })
    },
    //请求出错
    error: function() {
        loadHint({
            name: '郎朗资讯-头部导航',
            loadId: 'tabMenu',
            loadWrod: '数据地址请求有误'
        })
    }
})
//新建一个空的json对象用来储存数据
let dataNull = {}
    //点击分类触发的函数
function trigger(current){
    //获取分类下的a
    let tabMenuA =tabMenu.children
    for (let i = 0; i < tabMenuA.length; i++) {
        tabMenuA[i].className = ''
    }
    current._this.className = 'current'
    //获取类型
    let dataType = current._this.getAttribute('data-type')
    console.log(dataNull)
    //调用储存的json对象的数据
    let data = dataNull[dataType]
    //停止获取重复php数据，调用储存数据
    if(data){
        retrieveData(data)
        return false
    }
    //资讯列表
    $.ajax({
        url: './data/indexNews.php',
        dataType: 'json',
        timeout: '5000',
        headers: {'Content-type': 'application;charset=utf-8'},
        data: JSON.stringify({ categoryId: current.id}),
        type: 'POST',
        //请求成功
        success: function(req) {
            let data = req.data
            retrieveData(data)
             //给json对象添加数据 储存
            dataNull[dataType] = data
        },
        //请求出错
        error: function() {
            loadHint({
                name: '朗朗资讯-列表',
                loadId: 'getTabe',
                loadWrod: '数据地址请求有误'
            })
        }
    })
}

//调用数据
function retrieveData(data){
            if( !data || data.length === 0) { 
                loadHint({
                    name: '朗朗资讯-列表',
                    loadId: 'getTabe',
                    loadWrod: '没有数据请稍后再试'
                })
                return false}
            let itemFor = `<div class="news-wrap clearfix">`
            data.forEach(item => {
                let timeTurn = item.time.split(' ')
                itemFor += `<div class="item">
                                <div class="placeholder" style="background-image: url(${item.imgUrl})">
                                <img src="./image/public/placeholder.png" alt="${item.title}" class="img">
                                </div>
                                <h4 class="title">${item.title}</h4>
                                <time datetime="${item.time}" pubdate="${timeTurn[0]}">${timeTurn[0]}</time>
                                <i class="line"></i>
                                <p class="dec">${item.dec}</p>
                                <a href="" title="" class="link-more">查看更多</a>
                            </div>`
            })
            itemFor += `</div>`
            getTabe.innerHTML = itemFor
}

//获取列表方法二

// let tabMenu = document.getElementById('tabMenu')
// //获取tabe
// let getTabe = document.getElementById('getTabe').children
// console.log(getTabe[0])
// $.ajax({
//     url: './data/newsCategory.php',
//     dataType: 'json',
//     headers: {
//         "Content-type": "application/json; charset=utf-8"
//     },
//     data: JSON.stringify({
//         module: 'news'
//     }),
//     type: 'POST',
//     success: function (req) {
//         let data = req.data;
//         console.log(data)
//         if (!data || data.length === 0) {
//             loadHint({
//                 name: '朗朗资讯',
//                 loadId: 'tabMenu',
//                 loadWrod: '未获取到有效数据'
//             });
//             return false
//         };
//         let aHtml = '';
//         data.forEach((item, index) => {
//             let aCurrent = ''
//             if (index === 0) { aCurrent = 'current' }
//             aHtml += `<a get-php="false" href="javascript: void(0);" onclick="clickCurrent({ _this: this,id: ${item.id},index: ${index}})" title="${item.categoryName}" class="${aCurrent}">${item.categoryName}</a>`

//         });
//         tabMenu.innerHTML = aHtml;
//         console.log(data[0].id);
//         clickCurrent({
//             _this: tabMenu.children[0],
//             id: data[0].id,
//             index: 0
//         })
//     },
//     error: function () {
//         loadHint({
//             name: '朗朗咨询-title',
//             loadId: 'tabMenu',
//             loadWrod: '请求地址出错，暂时无法访问'
//         })
//     }
// });


// //添加点击事件                              
// function clickCurrent(k) {
//     let Ahtml = tabMenu.children
//     //获取当前点击下的自定义标识
//     let getPhp = k._this.getAttribute('get-php')
//     for (let i = 0; i < getTabe.length; i++) {
//         getTabe[i].style.display = 'none';
//     }
//     getTabe[k.index].style.display = 'block'
//     //当自定标识为false 执行获取PHP数据
//     if( getPhp === 'false') {
//                             $.ajax({
//                             url: './data/indexNews.php',
//                             dataType: 'json',
//                             headers: {
//                                 "Content-type": "application/json; charset=utf-8"
//                             },
//                             data: JSON.stringify({
//                                 categoryId: k.id
//                             }),
//                             type: 'POST',
//                             success: function (req) {
//                                 let data = req.data;
//                                 let divItem = `<div class="news-wrap clearfix">`;
//                                 data.forEach(item => {
//                                     let time = item.time.split(' ')
//                                     divItem += `<div class="item">
//                                                     <img src="${item.imgUrl}" alt="" class="img">
//                                                     <h4 class="title">${item.title}</h4>
//                                                     <time datetime="${item.time}" pubdate="${time[0]}">${time[0]}</time>
//                                                     <i class="line"></i>
//                                                     <p class="dec">${item.dec}</p>
//                                                     <a href="" title="" class="link-more">查看更多</a>
//                                                 </div>`
//                                 });
//                                 divItem += `</div>`;
//                                 getTabe[k.index].innerHTML = divItem
//                                 //获取成功后把标识改成true，不在获取php
//                                 k._this.setAttribute('get-php','true')
//                             },
//                             error: function () {
//                             }
//                         });}
//     for (let i = 0; i < Ahtml.length; i++) {
//         Ahtml[i].className = ''
//     }
//     k._this.className = 'current'
// }