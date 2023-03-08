<template>
    <div class="pswp-gallery pswp-gallery--single-column" id="gallery--getting-started">
        <a v-for="(imageItem,index) in imageSrc" :key="index" :href="imageItem.largeImg" 
            :data-pswp-width="imageItem.width" 
            :data-pswp-height="imageItem.height"
            data-cropped="true"
            target="_blank">
            <img :src="imageItem.smallImg" />
        </a>
    </div>
</template>
<script>
import PhotoSwipeLightbox from 'photoswipe/dist/photoswipe-lightbox.esm.min.js';
import 'photoswipe/dist/photoswipe.css';
export default {
    data() {
        return {}
    },
    props: {
        imageSrc: Array
    },
    created() {
        
    },
    mounted() {
        const lightbox = new PhotoSwipeLightbox({
            gallery: '#gallery--getting-started',
            children: 'a',
            pswpModule: () => import('photoswipe')
        });
        lightbox.init();
    }
}
</script>
<style lang="less">
.pswp-gallery {
    height: 100%;
}
</style>