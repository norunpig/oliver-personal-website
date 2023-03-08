<template>
    <div class="home">
		<Header />
		<div class="banner pageWidth">
			<div class="cont">
				<p v-html="language.enName" class="name"></p>
				<p v-html="language.personalDesc" class="desc"></p>
			</div>
		</div>
		<div class="about pageWidth">
			<h2>{{ language.aboutMeTitle }}</h2>
			<div class="cont">
				<div class="photo">
					<!-- <img src="../assets/img/aboutme.jpg"> -->
					<photo-view :imageSrc="imgData"></photo-view>
				</div>
				<div class="desc">
					{{ language.aboutMeDesc }}
					<div class="socialContact">
						{{ language.aboutSocialContact }}
						<p class="iconWrap">
							<a href="https://github.com/norunpig">
								<img src="../assets/svg/github.svg">
							</a>
							<a href="https://www.jianshu.com/u/eb723bd7c231">
								<img src="../assets/img/jianshu.png">
							</a>
							<a href="https://blog.csdn.net/qq1114565087" class="csdn">
								<img src="../assets/img/iconCDNS.png">
							</a>
						</p>
						<p class="email" v-html="language.email"></p>
						<a class="download" style="display: none;" href="/oliver.pdf" download>下载简历</a>
					</div>
				</div>
			</div>
		</div>
		<div class="interestWraper pageWidth">
			<h2>{{ language.ChobbiesAndInterests }}</h2>
			<div class="itemW">
				<div class="video">
					<video src="../assets/img/video.mp4" controls muted></video>
				</div>
				<div class="images">
					<photo-view :imageSrc="imgInData"></photo-view>
				</div>
			</div>
		</div>
		<div class="education pageWidth">
			<h2>{{ language.educationTitle }}</h2>
			<div class="cont">
				<ul>
					<li v-for="item,index in language.educationItem" :key="index">
						<p class="date">{{ item.educationDate }}</p>
						<p class="educationBackground">{{ item.educationBackground }}</p>
						<div class="line"><i></i><span></span></div>
					</li>
				</ul>
			</div>
		</div>
		<div class="skills pageWidth">
			<h2>{{ language.skillsTitle }}</h2>
			<div class="cont">
				<div class="tagWrap">
					<svg :width='width' :height='height' @mousemove='listener($event)'>
						<a :href="tag.href" v-for='tag,index in tags' :key="index">
							<text font-weight="bold" :class="tag.class" :x='tag.x' :y='tag.y' :font-size='20 * (600/(600-tag.z))' :fill-opacity='((400+tag.z)/600)'>{{tag.text}}</text>
						</a>
					</svg>
					<ul class="skillsBox">
						<li v-for="item,index in language.skillsLineItem" :key="index">
							<p>{{ item.text }}</p>
							<div>
								<div class="lineBar"><span :style="{width: item.bar}"></span></div>
								<span class="persent">{{ item.bar }}</span>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>

		<div class="experience pageWidth">
			<h2>{{ language.experienceTitle }}</h2>
			<div class="cont">
				<ul>
					<li v-for="item, index in language.experienceItem" :key="index">
						<div class="workDate">
							<p class="date">{{ item.date }}</p>
							<p class="company">{{ item.company }}</p>
						</div>
						<div class="lineBox">
							<span></span>
							<div class="line"></div>
							<span></span>
						</div>
						<div class="desc">
							{{ item.desc }}
						</div>
					</li>
				</ul>
			</div>
		</div>
		<div class="portfolio pageWidth">
			<h2>{{ language.portfolioTitle }}</h2>
			<div class="cont">
				<ul>
					<li :class="projectImgClass(index)" v-for="item,index in projectImg" :key="index">
						<div class="mask"><a :href="item.text">{{ item.text }}</a></div>
						<img :src="item.src">
					</li>
				</ul>
			</div>
		</div>
		<div class="contactMe pageWidth">
			<h2>{{ language.contactMeTitle }}</h2>
			<div class="cont">
				<p class="email" v-html="language.email"></p>
				<p class="qq" v-html="language.qq"></p>
				<div class="socialContact"> 
					{{ language.aboutSocialContact }}
					<p class="iconWrap">
						<a href="https://github.com/norunpig">
							<img src="/img/github.ede714b3.svg">
						</a>
						<a href="https://www.jianshu.com/u/eb723bd7c231">
							<img src="/img/jianshu.805143dd.png">
						</a>
						<a href="https://blog.csdn.net/qq1114565087" class="csdn">
							<img src="../assets/img/iconCDNS.png">
						</a>
					</p>
				</div>					
			</div>
		</div>
    </div>
</template>

<script>
import Header from '../components/Header'
//import simpleGallery from '../components/simpleGallery'
import photoView from '../components/photoView'

export default {
    name: "Home",
	data(){
		return {
			width:500,//svg宽度
			height:400,//svg高度
			tagsNum: 14,//标签数量
			RADIUS: 180,//球的半径
			speedX:Math.PI/360,//球一帧绕x轴旋转的角度
			speedY:Math.PI/360,//球-帧绕y轴旋转的角度
			tags: [],
			imgData: [
				{
					largeImg: require('../assets/img/aboutme1.jpg'),
					smallImg: require('../assets/img/aboutme1.jpg'),
					width: 1242,
					height: 1242
				},
				{
					largeImg: require('../assets/img/aboutme2.jpg'),
					smallImg: require('../assets/img/aboutme2.jpg'),
					width: 828,
					height: 1472
				},
				{
					largeImg: require('../assets/img/aboutme3.jpg'),
					smallImg: require('../assets/img/aboutme3.jpg'),
					width: 1080,
					height: 1920,
				}
			],
			imgInData: [
				{
					largeImg: require('../assets/img/in_01.jpg'),
					smallImg: require('../assets/img/in_01.jpg'),
					width: 1440,
					height: 1080
				},
				{
					largeImg: require('../assets/img/in_02.jpg'),
					smallImg: require('../assets/img/in_02.jpg'),
					width: 1920,
					height: 1080
				},
				{
					largeImg: require('../assets/img/in_03.jpg'),
					smallImg: require('../assets/img/in_03.jpg'),
					width: 1392,
					height: 956
				},
				{
					largeImg: require('../assets/img/in_04.jpg'),
					smallImg: require('../assets/img/in_04.jpg'),
					width: 1440,
					height: 1080
				}
			]
		}
	},
	components: {
        Header,
		//simpleGallery,
		photoView
    },
	created() {
		if ( isMobile ) {
			this.width = 300;
			this.height = 300;
			this.RADIUS = 130;
		}
		let tags=[];
		for(let i = 0; i < this.tagsNum; i++){
			let tag = {};
			let k = -1 + (2 * (i + 1) - 1) / this.tagsNum;
			let a = Math.acos(k);
			let b = a * Math.sqrt(this.tagsNum * Math.PI);
			tag.text = this.language.skillsItem[i];
			let ramNum = Math.ceil(Math.random()*7);
			tag.class = 'color_' + ramNum;
			tag.x = this.CX +  this.RADIUS * Math.sin(a) * Math.cos(b);
			tag.y = this.CY +  this.RADIUS * Math.sin(a) * Math.sin(b); 
			tag.z = this.RADIUS * Math.cos(a);
			tag.href = 'https://www.jianshu.com/u/eb723bd7c231';
			tags.push(tag);
		}
		this.tags = tags;
	},
	mounted() {
		setInterval(() => {
			this.rotateX(this.speedX);
			this.rotateY(this.speedY);
		}, 17)
	},
	computed: {
		CX(){
			return this.width/2;
		},
		CY(){
			return this.height/2;
		},
		
		projectImg() {
			let arr = [{
				src: require('../assets/img/project01.png'),
				text: 'https://www.sugardaddymeet.com/'
			}, {
				src: require('../assets/img/project02.png'),
				text: 'https://www.sugardaddymeet.com/'
			},{
				src: require('../assets/img/project03.png'),
				text: 'https://www.interracialmatch.com/'
			},{
				src: require('../assets/img/project04.png'),
				text: 'https://www.scqbjt.com.cn/'
			},{
				src: require('../assets/img/project05.png'),
				text: 'https://www.millionairematch.com/'
			}];
			
			return arr;
		}
	},
	methods: {
		rotateX(angleX){
			var cos = Math.cos(angleX);
			var sin = Math.sin(angleX);
			for(let tag of this.tags){
				var y1 = (tag.y- this.CY) * cos - tag.z * sin  + this.CY;
				var z1 = tag.z * cos + (tag.y- this.CY) * sin;
				tag.y = y1;
				tag.z = z1;
			} 
		},
		rotateY(angleY){
			var cos = Math.cos(angleY);
			var sin = Math.sin(angleY);
			for(let tag of this.tags){
				var x1 = (tag.x - this.CX) * cos - tag.z * sin + this.CX;
				var z1 = tag.z * cos + (tag.x-this.CX) * sin;
				tag.x = x1;
				tag.z = z1;
			} 
		},
		listener(event){//响应鼠标移动
			var x = event.clientX - this.CX;
			var y = event.clientY - this.CY;
			this.speedX = x*0.0001>0 ? Math.min(this.RADIUS*0.00002, x*0.0001) : Math.max(-this.RADIUS*0.00002, x*0.0001);
			this.speedY = y*0.0001>0 ? Math.min(this.RADIUS*0.00002, y*0.0001) : Math.max(-this.RADIUS*0.00002, y*0.0001); 
		},
		projectImgClass(index) {
			return index < 3 ? 'sm' : 'lg';
		}
	}
};
</script>
