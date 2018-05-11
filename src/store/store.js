import Vue from 'vue'
import Vuex, {
  Store
} from 'vuex'
Vue.use(Vuex)
export const store = new Vuex.Store({
  state: {
    pieceColoring:"black",
    ChessData:[
        [{"chessColor":"white"},{"chessColor":"black"},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""}],
        [{"chessColor":"white"},{"chessColor":"black"},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""}],
        [{"chessColor":"white"},{"chessColor":"black"},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""}],
        [{"chessColor":"white"},{"chessColor":"black"},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""}],
        [{"chessColor":"white"},{"chessColor":"black"},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""}],
        [{"chessColor":"white"},{"chessColor":"black"},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""}],
        [{"chessColor":"white"},{"chessColor":"black"},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""}],
        [{"chessColor":"white"},{"chessColor":"black"},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""}],
        [{"chessColor":"white"},{"chessColor":"black"},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""}],
        [{"chessColor":"white"},{"chessColor":"black"},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""}],
        [{"chessColor":"white"},{"chessColor":"black"},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""}],
        [{"chessColor":"white"},{"chessColor":"black"},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""}],
        [{"chessColor":"white"},{"chessColor":"black"},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""}],
        [{"chessColor":"white"},{"chessColor":"black"},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""}],
        [{"chessColor":"white"},{"chessColor":"black"},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""}]
        
    ]
  },
  getters:{
    ChessFun:(state)=>{
        return state.ChessData
    }
  },
  mutations: {
    pieceClick(state,position) {
      /* state.ChessData.map((data,position)=>{
        data[position.h]
      }) */
      state.ChessData[position.h][position.v].chessColor = state.pieceColoring;
      if(state.pieceColoring=="black"){
        console.log("state.pieceColoring:",state.pieceColoring)
          state.pieceColoring="white"
      }else{
        console.log("state.pieceColoring:",state.pieceColoring)
        state.pieceColoring="black"
      }
    }
  }
})
