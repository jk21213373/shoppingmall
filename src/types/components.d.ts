import XRBFSwiper from '@/components/XRBFSwiper.vue'
import XRBFGuess from '@/components/XRBFGuess.vue'

declare module 'vue' {
  export interface GlobalComponents {
    XRBFSwiper: typeof XRBFSwiper
    XRBFGuess: typeof XRBFGuess
  }
}

// 组件实例类型
export type XRBFGuessInstance = InstanceType<typeof XRBFGuess>
export type XRBFSwiperInstance = InstanceType<typeof XRBFSwiper>
