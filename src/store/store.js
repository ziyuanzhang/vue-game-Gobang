import Vue from 'vue'
import Vuex, {
  Store
} from 'vuex'
Vue.use(Vuex)
export const store = new Vuex.Store({
  state: {
    pieceColoring:"black",
    ChessData:[
        [{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""}],
        [{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""}],
        [{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""}],
        [{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""}],
        [{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""}],
        [{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""}],
        [{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""}],
        [{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""}],
        [{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""}],
        [{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""}],
        [{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""}],
        [{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""}],
        [{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""}],
        [{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""}],
        [{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""},{"chessColor":""}]
        
    ]
  },
  getters:{
    ChessFun:(state)=>{
        return state.ChessData
    }
  },
  mutations: {
    pieceClick(state,position) {
      state.ChessData[position.h][position.v].chessColor = state.pieceColoring;     
      let VNum=1;
      let HNum=1;
      let VHNumUpRight=1;
      let VHNumUpLeft=1;
      for(let V = (position.v-1); V>0; V-- ){
          if(state.ChessData[position.h][V].chessColor==state.pieceColoring ){
            VNum++;
            if(VNum>4){
              console.log(state.pieceColoring,":胜出");
              break;
            }
          }else{
            break;
          }
      };
      for(let V = (position.v+1); V<15; V++){
        if( state.ChessData[position.h][V].chessColor==state.pieceColoring ){
          VNum++;
          if(VNum>4){
            console.log(state.pieceColoring,":胜出");
            break;
          }
        }else{
          break;
        }
      };
      for(let H =(position.h-1);H>0;H--){
        if(state.ChessData[H][position.v].chessColor==state.pieceColoring ){
          HNum++;
          if(HNum>4){
            console.log(state.pieceColoring,":胜出");
            break;
          }
        }else{
          break;
        }
      };
      for(let H =(position.h+1);H<15;H++){
        if(state.ChessData[H][position.v].chessColor==state.pieceColoring ){
          HNum++;
          if(HNum>4){
            console.log(state.pieceColoring,":胜出");
            break;
          }
        }else{
          break;
        }
      }; 
      for(let num=1;num<5;num++ ){
        if((position.v-num)>-1 && (position.h+num)<15){
            if(state.ChessData[position.h+num][position.v-num].chessColor==state.pieceColoring){
              VHNumUpRight++; 
              if(VHNumUpRight>4){
                console.log(state.pieceColoring,":胜出");
                break;
              }
            }else{
              break;
            }
        }else{
          break;
        }
      };
      for(let num=1;num<5;num++){
        if((position.v+num)<15 && (position.h-num)>-1){
            if(state.ChessData[position.h-num][position.v+num].chessColor==state.pieceColoring){
              VHNumUpRight++; 
              if(VHNumUpRight>4){
                console.log(state.pieceColoring,":胜出");
                break;
              }
            }else{
              break;
            }
        }else{
          break;
        }
      };
      for(let num=1;num<5;num++){
        if((position.v+num)<15 && (position.h+num)<15){
          if(state.ChessData[position.h+num][position.v+num].chessColor==state.pieceColoring){
            VHNumUpLeft++;
            if(VHNumUpLeft>4){
              console.log(state.pieceColoring,":胜出");
              break;
            }
          }else{
            break;
          }
        }else{
          break;
        }
      };
      for(let num=1;num<5;num++){
        if((position.v-num)>-1 && (position.h-num)>-1){
          if(state.ChessData[position.h-num][position.v-num].chessColor==state.pieceColoring){
            VHNumUpLeft++;
            if(VHNumUpLeft>4){
              console.log(state.pieceColoring,":胜出");
              break;
            }
          }else{
            break;
          }
        }else{
          break;
        }
      }




    if(state.pieceColoring=="black"){
        state.pieceColoring="white"
    }else{
      state.pieceColoring="black"
    }
      



    }
  }
})
