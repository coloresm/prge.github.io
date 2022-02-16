<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <meta name="viewport" content="initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no">
    <link rel="stylesheet" href="./css/normalize.css" type="text/css">
    <link rel="stylesheet" href="./js/sWiper/swiper-bundle.min.css" type="text/css">
    <link rel="stylesheet" href="./css/common.css" type="text/css">
    <link rel="stylesheet" href="./css/main.css" type="text/css">
</head>

<body>
    <!--头部导航-->
    <?php include'/header.php';?>
    <!-- 轮播位置-->
    <div id="slide-wrap">
        <div class="slide-content">
            <ul class="clearfix">
                <li><img src="./image/banlan.jpg" alt=""></li>
                <li><img src="./image/banlan2.jpg" alt=""></li>
                <li><img src="./image/banlan3.jpg" alt=""></li>
            </ul>
        </div>
        <ul class="slide-nav">
            <a href="javascript: void(0);" class="current"></a>
            <a href="javascript: void(0);"></a>
            <a href="javascript: void(0);"></a>
        </ul>
        <span class="slide-prev"><a href="javascript: void(0);"></a></span>
        <span class="slide-next"><a href="javascript: void(0);"></a></span>
    </div>
    <!--三列图文列表-->
    <div class="content">
        <!--郎朗口腔 start-->
        <div class="main-column">
            <h3>朗朗公益</h3>
            <p>呵护牙齿健康 创造美好未来
                <span></span>
                care for teeth to create a better future
            </p>
        </div>
        <div class="list-info">
            <!--通过JS修改数据-->
            <div id="load-scope"></div>
            <!--通过JS修改数据end-->
        </div>
        <!-- 郎朗口腔 end-->
        <!-- 朗朗公益 start-->
        <section class="welfare">
            <header>
                <div class="main-column">
                    <h3>朗朗口腔</h3>
                    <p>呵护牙齿健康 创造美好未来
                        <span></span>
                        care for teeth to create a better future
                    </p>
                </div>
            </header>
            <!--通过JS修改数据-->
            <div id="welfareWrap">
            </div>
            <!--通过JS修改数据end-->
        </section>
        <!-- 朗朗公益 end-->
    </div>
    <!-- 医生 start-->
    <section class="doctor">
        <header>
            <div class="display-none">
                <h3>朗朗公益</h3>
                <p>呵护牙齿健康 创造美好未来
                    <span></span>
                    care for teeth to create a better future
                </p>
            </div>
        </header>
        <div class="content doctor-paddding" id="doctor">
            <div class="doctor-slide clearfix">
                <!-- 第一个-->
                <div class="doctor-info clearfix">
                    <div class="img">
                        <span class="name">方晓珍</span>
                        <img src="./image/doctor-pic.jpg" alt="">
                    </div>
                    <div class="doctor-introduction">
                        <h4 class="title">牙周主诊医师</h4>
                        <span class="dec">擅长：仿真陶瓷牙修复、牙周系统治疗、残根残冠的保存治疗等。</span>
                        <i class="line"></i>
                        <p class="">国内知名大学口腔医学学士，曾就职于高端私人齿科工作室，从事口腔事业10余年，对口腔各类常见疾病的临床治疗积累了丰富经验。积极学习新技术的临床应用，不断进修提升，精通牙体保存治疗。数次参加北京医科大学牙周学习研究项目、香港大学牙周学习研究项目。技术上追求完美，坚持 “微创无痛治疗” 原则，深受患者的信赖！</p>
                        <a href="" class="link-more">查看更多</a>
                    </div>
                </div>
                <!-- 第二个-->
                <div class="doctor-info clearfix">
                    <div class="img">
                        <span class="name">方芳芳</span>
                        <img src="./image/doctor-pic.jpg" alt="">
                    </div>
                    <div class="doctor-introduction">
                        <h4 class="title">牙周主诊医师</h4>
                        <span class="dec">擅长：仿真陶瓷牙修复、牙周系统治疗、残根残冠的保存治疗等。</span>
                        <i class="line"></i>
                        <p class="">国内知名大学口腔医学学士，曾就职于高端私人齿科工作室，从事口腔事业10余年，对口腔各类常见疾病的临床治疗积累了丰富经验。积极学习新技术的临床应用，不断进修提升，精通牙体保存治疗。数次参加北京医科大学牙周学习研究项目、香港大学牙周学习研究项目。技术上追求完美，坚持 “微创无痛治疗” 原则，深受患者的信赖！</p>
                        <a href="" class="link-more">查看更多</a>
                    </div>
                </div>
                <!-- 第三个-->
                <div class="doctor-info clearfix">
                    <div class="img">
                        <span class="name">方静静</span>
                        <img src="./image/doctor-pic.jpg" alt="">
                    </div>
                    <div class="doctor-introduction">
                        <h4 class="title">牙周主诊医师</h4>
                        <span class="dec">擅长：仿真陶瓷牙修复、牙周系统治疗、残根残冠的保存治疗等。</span>
                        <i class="line"></i>
                        <p class="">国内知名大学口腔医学学士，曾就职于高端私人齿科工作室，从事口腔事业10余年，对口腔各类常见疾病的临床治疗积累了丰富经验。积极学习新技术的临床应用，不断进修提升，精通牙体保存治疗。数次参加北京医科大学牙周学习研究项目、香港大学牙周学习研究项目。技术上追求完美，坚持 “微创无痛治疗” 原则，深受患者的信赖！</p>
                        <a href="" class="link-more">查看更多</a>
                    </div>
                </div>
            </div>
            <!--有几张图片就加几个A-->
            <div id="slideA">
                <a href="javaScript: void(0);" class="slide-a current"></a>
                <a href="javaScript: void(0);" class="slide-a "></a>
                <a href="javaScript: void(0);" class="slide-a "></a>
            </div>
        </div>
    </section>
    <!-- 医生 end-->
    <!--资讯-->
    <div class="content">
        <section>
            <header>
                <div class="main-column">
                    <h3>朗朗资讯</h3>
                    <p>呵护牙齿健康 创造美好未来
                        <span></span>
                        care for teeth to create a better future
                    </p>
                </div>
            </header>
            <ul class="tab-menu " id="tabMenu">
                <!-- <a href="" title="行业动" class="current">行业动态</a><a href="" title="郎朗资讯">郎朗资讯</a><a href="" title="媒体报道">媒体报道</a><a href="" title="公益活动">公益活动</a> -->
            </ul>
            <div id="getTabe">
                <div id="industry" style="display: block;">行业内容</div>
                <div id="Information" style="display: none;">朗朗资讯</div>
                <div id="media" style="display: none;">媒体报道</div>
                <div id="welfare" style="display: none;">公益活动</div>
            </div>
            <!--修改的内容-->
            <!-- <div class="news-wrap">
                <div class="item">
                    <img src="./image/pic-01.jpg" alt="" class="img">
                    <h4 class="title">朗朗口腔“合赢未来，与资本共...</h4>
                    <time datetime="2016-09-27" pubdate="2016-09-27">2016-09-27</time>
                    <i class="line"></i>
                    <p class="dec">朗朗口腔“合赢未来，与资本共舞”口腔行业峰会继山东青岛第一站后，即将迎来第二站：福建厦门站...</p>
                    <a href="" title="" class="link-more">查看更多</a>
                </div>
                <div class="item">
                    <img src="./image/pic-01.jpg" alt="" class="img">
                    <h4 class="title">朗朗口腔“合赢未来，与资本共...</h4>
                    <time datetime="2016-09-27" pubdate="2016-09-27">2016-09-27</time>
                    <i class="line"></i>
                    <p class="dec">朗朗口腔“合赢未来，与资本共舞”口腔行业峰会继山东青岛第一站后，即将迎来第二站：福建厦门站...</p>
                    <a href="" title="" class="link-more">查看更多</a>
                </div>
                <div class="item">
                    <img src="./image/pic-01.jpg" alt="" class="img">
                    <h4 class="title">朗朗口腔“合赢未来，与资本共...</h4>
                    <time datetime="2016-09-27" pubdate="2016-09-27">2016-09-27</time>
                    <i class="line"></i>
                    <p class="dec">朗朗口腔“合赢未来，与资本共舞”口腔行业峰会继山东青岛第一站后，即将迎来第二站：福建厦门站...</p>
                    <a href="" title="" class="link-more">查看更多</a>
                </div>
                <div class="item">
                    <img src="./image/pic-01.jpg" alt="" class="img">
                    <h4 class="title">朗朗口腔“合赢未来，与资本共...</h4>
                    <time datetime="2016-09-27" pubdate="2016-09-27">2016-09-27</time>
                    <i class="line"></i>
                    <p class="dec">朗朗口腔“合赢未来，与资本共舞”口腔行业峰会继山东青岛第一站后，即将迎来第二站：福建厦门站...</p>
                    <a href="" title="" class="link-more">查看更多</a>
                </div>
            </div> -->
        </section>
    </div>
    <!--底部-->
    <?php include'/footer.php'?>
    <script async charset="UTF-8" src="js/banner.js"></script>
    <script charset="UTF-8" src="./js/jquery.min.js"></script>
    <script charset="UTF-8" src="./js/swiper/swiper-bundle.min.js"></script>
    <script charset="UTF-8" src="./js/swiper/doctorSwiper.js"></script>
    <script charset="UTF-8" src="./js/common.js"></script>
    <script charset="UTF-8" src="./js/ajax.js"></script>
</body>
</html>