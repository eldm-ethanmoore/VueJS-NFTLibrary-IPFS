/* shows checklist length */
Vue.component('list-stats', {
  template: `
  <div class="item" style="background-color: #564c4d;">
    <p style="color: white;">Click One of {{ todos.length }} NFT's!</p>
  </div>`,
  props: {
    todos: Array
  }
})

Vue.component('list-banner', {
  template: `
  <div class="item" style="object-fit: cover;background-color: purple;">
  <div id="checkbox" @click="active= !active">
      <div v-if="!active" class="circle-svg svg-wrapper"> 
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle></svg>
      </div>
      <div v-if="active" class="check-circle-svg svg-wrapper">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
      </div>   
    </div>   
    <a href="https://polygon.technology/" target="_blank">
    <img style="padding-left: 10px;" height="40px" width="150px" src="https://img.search.brave.com/FTfVb-sNq4Xc0NvYiQWiTXoqub_qGO1jLVmwm7KN0gE/rs:fit:1090:240:1/g:ce/aHR0cHM6Ly9zdXBw/b3J0LnByb2JpdC5j/b20vaGMvYXJ0aWNs/ZV9hdHRhY2htZW50/cy85MDAwMDcxMDQ3/NDMvUG9seWdvbl9s/b2dvLnBuZw" />
    </a>
    <a v-if="active" style="color: white;" href="https://polygonscan.com/address/0xb91aaa43c208084b4b93e501487a68ec358fa629#tokentxnsErc721" target="_blank">
    <br></br>
    <br></br>
    0xb91aAa43c208084B4B93e501487a68Ec</a>
    <h2 v-if="!active" style="color: white;font-size: 18px;padding-left: 5px;">&nbsp;+&nbsp;</h2>
    <a href="https://buildspace.so/" target="_blank">
    <img v-if="!active" style="height: 40px; width: 200px;"  src="https://web3.career/logos/buildspace.png" />
    </a>
  </div>`,
  props: {
    active: false
  }
})

Vue.component('list-item', {
  data: function() {
    return { isChecked: false }
  },
  template: `
  <section class="item">
    <div id="item">
      <div id="checkbox" @click="active= !active">
      <div v-if="!active" class="circle-svg svg-wrapper"> 
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle></svg>
      </div>
      <div v-if="active" class="check-circle-svg svg-wrapper">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
      </div>   
    </div> 
      <p>{{ todos[index] }}</p>
      <display v-if="active"
        :uri="uriList[index]"
        :index="index"
        :isVideo="isVideo"
      >
      </display>
    </div>
  </section>`,
  methods: {
  },
  props: {
    todo: String,
    todos: Array,
    index: Number,
    uri: String,
    uriList: Array,
    active: false,
    isVideo: Array
  }
})

/* header, main, and footer components */
Vue.component('custom-header', {
  template: `
    <header>
      <h1>Eldm's NFT Library</h1>
    </header>`
})

/* each item in checklist */
Vue.component('display', {
  template: `
    <div id="item">
      <video v-if="isVideo[index]" style="border-radius: 5px;" width="100%" height="75%" controls>
        <source :src="uri" type="video/mp4">
        Your browser does not support the video tag.
      </video>
      <img v-if="!isVideo[index]" :src="uri" style="width:100%; height:50%;border-radius: 5px;" />
    </div>`,
  props: {
    uri: String,
    isVideo: Array,
    index: Number
  }
})

Vue.component('custom-main', {
  data: function() {
    return {
      todos: [ 'Built Web3 App Solidity + Smart Contracts', 'Minted my own NFT Collection', 'Built Mini Turn-Based NFT Browser Game', 'Built Web3 App on Solana React + Rust', 'Minted Solana NFT Collection using Metaplex', 'Built Web3 DAO' ],
      uri:'https://tokens.buildspace.so/assets/CH4f447780-07cf-408a-8f4c-253a8b4e8bae-95/render.mp4',
      uriList: ['https://tokens.buildspace.so/assets/CH6ff98025-6104-44c5-8469-98680ddb98d6-64/render.png', 'https://tokens.buildspace.so/assets/CHbdfb992f-80ca-44a4-b7f7-54bb0365ff50-4/render.png', 'https://tokens.buildspace.so/assets/CHe260d7a4-bd66-4adb-a187-5f7027cb8db2-21/render.mp4', 'https://tokens.buildspace.so/assets/CH9be40837-dd03-4a80-9757-74af0224d35e-159/render.mp4', 'https://tokens.buildspace.so/assets/CH38412f17-fa73-49c7-b6e4-385c7d821b95-88/render.mp4', 'https://tokens.buildspace.so/assets/CH4f447780-07cf-408a-8f4c-253a8b4e8bae-95/render.mp4'],
      isVideo: [false, false, true, true, true, true]
    }
  },
  template: `
  <main>
    <div id="list-items-wrapper">
      <list-stats :todos="todos"></list-stats>
      <list-banner></list-banner>
      <list-item
        v-for="(todo, index) in todos"
        :key="todo"
        :index="index"
        :todo="todo"
        :todos="todos"
        :uri="uri"
        :uriList="uriList"
        :isVideo="isVideo"
      >
      </list-item>
    </div>
  </main>`
})

Vue.component('custom-footer', {
  template: `
  <footer>
    <p>Eldm.net Blog Page &nbsp;<a target="__blank" href="https://www.eldm.net">X</a>.</p> 
    <p>Eldm.net React Home Page &nbsp;<a target="__blank" href="https://yellow-wind-7477.on.fleek.co/">X</a>.</p>
  </footer>`
})

let vm = new Vue({
  el: '#app'
})