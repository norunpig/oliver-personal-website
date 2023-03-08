<template>
    <div class="top pageWidth">
        <div class="cont">
            <div class="logo"><img src="../assets/img/logo.png"></div>
            <ul class="nav">
                <li><a href="/">{{ language.navHome }}</a></li>
                <li><a href="https://blog.csdn.net/qq1114565087?spm=1008.2028.3001.5343">{{ language.navBlog }}</a></li>
                <li><a href="javascript: void(0);" @click="switchLang">{{ language.navLang }}</a></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "Header",
    methods: {
        switchLang() {
            lang == 'zh' ? localStorage.setItem("lang", 'en') : localStorage.setItem("lang", 'zh');
            location.reload();
        }
    }
};
</script>
<style scope lang="less">
    
</style>
