<template>
  <div id="bodyWrapper">
    <swiper :options="swiperOption"  class="swiper-container">
      <swiper-slide>
        <img class="swiper-img" src="/static/img/recommond/1.webp">
      </swiper-slide>
      <swiper-slide>
        <img class="swiper-img" src="/static/img/recommond/2.webp">
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
    <div class="activity-wrapper clear">
      <div class="activity-img">
        <img src="/static/img/activity/new.webp">
      </div>
      <div class="activity-img">
        <img src="/static/img/activity/few.webp">
      </div>
      <div class="activity-img">
        <img src="/static/img/activity/update.webp">
      </div>
      <div class="activity-img">
        <img src="/static/img/activity//sim.webp">
      </div>
      <div class="activity-img">
        <img src="/static/img/activity/activity.webp">
      </div>
    </div>
    <div class="interval"></div>
    <div class="product">
      <div class="product-cells">
        <div class="product-cells-left">
          <img src="/static/img/product/cells_mi8_youth.webp">
        </div>
        <div class="product-cells-right-top">
          <img src="/static/img/product/cells_sale.webp">
        </div>
        <div class="product-cells-right-bottom">
          <img src="/static/img/product/cells_TV.webp">
        </div>
      </div>
      <div class="interval"></div>
      <div class="auto_fill">
        <img src="/static/img/product/red6.webp">
      </div>
      <div class="interval"></div>
      <div class="auto_fill">
        <img src="/static/img/product/recommend_mi8.webp">
      </div>
      <div class="mobile-product">
        <div class="mobile_rice-8 clear">
          <div class="mobile_rice-8youth mar-interval">
            <div class="mobile-show">
              <img src="/static/img/product/mobile_mi8_youth.webp">
            </div>
            <div class="info">
              <div class="info-title">小米8 青春版</div>
              <div class="info-desc">潮流镜面渐变色，自拍旗舰</div>
              <div class="info-price">1399<span>起</span></div>
            </div>
          </div>
          <div class="mobile_rice-8youth">
            <div class="mobile-show">
              <img src="/static/img/product/mobile_mi8.webp">
            </div>
            <div class="info">
              <div class="info-title">小米8 屏幕指纹版</div>
              <div class="info-desc">压感屏幕指纹，潮流外观</div>
              <div class="info-price">3199<span>起</span></div>
            </div>
          </div>
        </div>
        <div class="mobile_rice-8 clear">
          <div class="mobile_rice-8youth mar-interval">
            <div class="mobile-show">
              <img src="/static/img/product/mobile_shark.webp">
            </div>
            <div class="info">
              <div class="info-title">黑鲨游戏手机 Helo</div>
              <div class="info-desc">双液冷，更能打</div>
              <div class="info-price">3199<span>起</span></div>
            </div>
          </div>
          <div class="mobile_rice-8youth">
            <div class="mobile-show">
              <img src="/static/img/product/mobile_red_rice-6.webp">
            </div>
            <div class="info">
              <div class="info-title">红米6</div>
              <div class="info-desc">小屏高性能的双摄手机</div>
              <div class="info-price">
                729
                <span>起</span>
                <span class="info-price old">
                  <s>799</s>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="mobile_rice-8 clear">
          <div class="mobile_rice-8youth mar-interval">
            <div class="mobile-show">
              <img src="/static/img/product/mobile_red_rice-6A.webp">
            </div>
            <div class="info">
              <div class="info-title">红米6A</div>
              <div class="info-desc">好用好看不贵</div>
              <div class="info-price">
                549<span>起</span>
                <span class="info-price old">
                  <s>599</s>
                </span>
              </div>
            </div>
          </div>
          <div class="mobile_rice-8youth">
            <div class="mobile-show">
              <img src="/static/img/product/mobile_mi6X.webp">
            </div>
            <div class="info">
              <div class="info-title">小米6X</div>
              <div class="info-desc">轻薄美观的拍照手机</div>
              <div class="info-price">
                1299
                <span>起</span>
                <span class="info-price old">
                  <s>1599</s>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="mobile_rice-8 clear">
          <div class="mobile_rice-8youth mar-interval">
            <div class="mobile-show">
              <img src="/static/img/product/mobile_mi8SE.webp">
            </div>
            <div class="info">
              <div class="info-title">小米8 SE</div>
              <div class="info-desc">三星 AMOLED 全面屏</div>
              <div class="info-price">
                1799
                <span>起</span>
                <span class="info-price old">
                  <s>1999</s>
                </span>
              </div>
            </div>
          </div>
          <div class="mobile_rice-8youth">
            <div class="mobile-show">
              <img src="/static/img/product/mobile_slab-4.webp">
            </div>
            <div class="info">
              <div class="info-title">小米平板4</div>
              <div class="info-desc">追剧神器 / 支持AI人脸识别</div>
              <div class="info-price">1099<span>起</span></div>
            </div>
          </div>
        </div>
      </div>
      <div class="interval"></div>
      <div class="auto_fill">
        <img src="/static/img/product/notebook.webp">
      </div>
      <div class="interval"></div>
      <div class="interval"></div>
      <div class="auto_fill">
        <img src="/static/img/product/display_tv.webp">
      </div>
      <div class="interval" style="border-bottom: .04rem solid #fff; height: .04rem;"></div>
      <div class="mobile-product">
        <div class="mobile_rice-8 clear">
          <div class="mobile_rice-8youth mar-interval">
            <div class="mobile-show">
              <img src="/static/img/product/TV-4A-32.webp">
            </div>
            <div class="info">
              <div class="info-title">小米电视4A 32英寸</div>
              <div class="info-desc">人工智能系统，高清液晶屏</div>
              <div class="info-price">
                899<span>起</span>
                <span class="info-price old">
                  <s>2899</s>
                </span>
              </div>
            </div>
          </div>
          <div class="mobile_rice-8youth">
            <div class="mobile-show">
              <img src="/static/img/product/TV-4X-55.webp">
            </div>
            <div class="info">
              <div class="info-title">小米电视4X 55英寸</div>
              <div class="info-desc">4K HDR，人工智能语音</div>
              <div class="info-price">
                2499
                <span>起</span>
                <span class="info-price old">
                  <s>2799</s>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="mobile_rice-8 clear">
          <div class="mobile_rice-8youth mar-interval">
            <div class="mobile-show">
              <img src="/static/img/product/TV-4C-55.jpg">
            </div>
            <div class="info">
              <div class="info-title">55'' 电视4C 体育版</div>
              <div class="info-desc">4K超高清，超窄边设计</div>
              <div class="info-price">
                2499
                <span>起</span>
                <span class="info-price old">
                  <s>2899</s>
                </span>
              </div>
            </div>
          </div>
          <div class="mobile_rice-8youth">
            <div class="mobile-show">
              <img src="/static/img/product/TV-4X-43.jpg">
            </div>
            <div class="info">
              <div class="info-title">小米电视4X 43英寸</div>
              <div class="info-desc">FHD全高清屏，人工智能语音</div>
              <div class="info-price">
                1499
                <span>起</span>
                <span class="info-price old">
                  <s>1599</s>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="mobile_rice-8 clear">
          <div class="mobile_rice-8youth mar-interval">
            <div class="mobile-show">
              <img src="/static/img/product/TV-4C-40.jpg">
            </div>
            <div class="info">
              <div class="info-title">小米电视4C 40英寸</div>
              <div class="info-desc">FHD全高清屏，钢琴烤漆</div>
              <div class="info-price">
                1299<span>起</span>
                <span class="info-price old">
                  <s>1599</s>
                </span>
              </div>
            </div>
          </div>
          <div class="mobile_rice-8youth">
            <div class="mobile-show">
              <img src="/static/img/product/TV-4A-50.webp">
            </div>
            <div class="info">
              <div class="info-title">小米电视4A 50英寸</div>
              <div class="info-desc">4K HDR，人工智能语音系统</div>
              <div class="info-price">
                1999
                <span>起</span>
                <span class="info-price old">
                  <s>2199</s>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'BodyList',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        observer: true,
        observeParents: true
      }
    }
  }
}
</script>

<style lang="less" scoped>
@import '~styles/Home/bodyList.less';
</style>
