import '@splidejs/splide/css'
import './style.css'

import { Splide } from '@splidejs/splide'

const splide = new Splide('.splide', {
  pagination: true,
  fixedWidth: 200,
  drag: 'free'
})
splide.mount()
