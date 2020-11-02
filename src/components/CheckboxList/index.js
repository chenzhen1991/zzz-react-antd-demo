import React,{Component,useState, useEffect} from 'react';

class CheckboxList extends Component{
  constructor(props) {
    super(props);
    this.state = {
      ids: [],
    }
  }

  onChangeItem = (e,v) => {
    if(e.target.checked){
      this.setState({
        ids: [...this.state.ids, v],
      }, () => {
        this.props.onChangeInput(this.state.ids)
      })
    }else{
      const index = this.state.ids.indexOf(v)
      if(index > -1) {
        this.state.ids.splice(index, 1)
        this.setState({
          ids: this.state.ids,
        }, () => {
          this.props.onChangeInput(this.state.ids)
        })
      }
    }
  }

  onChangeItemAll = (e) => {
    if(e.target.checked){
      const ArrIds = this.props.items.map(item => item.id)
      this.setState({
        ids: ArrIds,
      }, () => {
        this.props.onChangeInput(this.state.ids)
      })
    }else{
      this.setState({
        ids: [],
      }, () => {
        this.props.onChangeInput(this.state.ids)
      })
    }
  }

  render() {
    return (
      <div>
        复选框组件
        <input
          type="checkbox"
          checked={this.props.values.length === 3}
          onChange={(e) => this.onChangeItemAll(e)}
        />
        <div>
          {
            this.props.items.map((item, index)=>{
              return(
                <div key={item.label}>
                  <label>{item.label}</label>
                  <input
                    type="checkbox"
                    value={item.id}
                    checked={this.props.values.includes(item.id)}
                    onChange={(e)=> this.onChangeItem(e, item.id)}
                  />
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}
// const CheckboxList = (props) => {
//   const [ids, setIds] = useState([])
//   const onChangeItem = (e,v) => {
//     if(e.target.checked){
//       const newIds = [...ids, v]
//       setIds(newIds)
//       props.onChangeInput(newIds)
//     }else{
//       const newIds = ids;
//       const index = newIds.indexOf(v)
//       if(index > -1) {
//         newIds.splice(index, 1)
//         setIds(newIds)
//       }
//       props.onChangeInput(newIds)
//     }
//   }
//
//   const onChangeItemAll = (e) => {
//     if(e.target.checked){
//       const ArrIds = props.items.map(item => item.id)
//       props.onChangeInput(ArrIds)
//       setIds(ArrIds)
//     }else{
//       props.onChangeInput([])
//       setIds([])
//     }
//   }
//   return (
//       <div>
//         复选框组件
//         <input
//           type="checkbox"
//           checked={props.values.length === 3}
//           onChange={(e) => onChangeItemAll(e)}
//         />
//         <div>
//           {
//             props.items.map((item, index)=>{
//               return(
//                 <div key={item.label}>
//                   <label>{item.label}</label>
//                   <input
//                     type="checkbox"
//                     value={item.id}
//                     checked={props.values.includes(item.id)}
//                     onChange={(e)=> onChangeItem(e, item.id)}
//                   />
//                 </div>
//               )
//             })
//           }
//         </div>
//       </div>
//     )
// }

export default CheckboxList;
