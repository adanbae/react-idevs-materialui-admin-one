import React,{ Component} from "react";
//import PropTypes from "prop-types";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from '@material-ui/core/Button';

import TablePagination from '@material-ui/core/TablePagination';

// Material-ui 컴포넌트들
import Typography from "@material-ui/core/Typography";
import { tsImportEqualsDeclaration } from "@babel/types";

// console.log("this.props",props);
  
//   props.data.forEach(element => {
//     console.log(element);
//     //element.showDetail = props.options.useDetail;
//   });
//   const openDetail =(row) => {
//     console.log(row)
//     row.showDetail = !row.showDetail
//   };
  
//   const changeShow = (e, row) => {}

//key={row.name+"_"+index+"_"+index} style={{display:!row.showDetail ? "block" : "none"}}
//        {row.name}
// {row.showDetail}
let InsertRow = (data) => {
  console.log(data);
  console.log(this)
    return (
      <TableRow style={{display:!data.data.showDetail ? "block" : "none"}}> 
        <TableCell className={data.classes.cell}>
          {data.data.name}
        </TableCell> 
        <TableCell>
          {data.data.hours}
        </TableCell> 
      </TableRow>
      )
};
class CustomTable extends Component {
//const CustomTable = (props)=> {
  constructor(props) {
    super(props);
    this.state = {
      showRow: false
    }
    //this.changeProps = this.changeProps.bind(this);
  }
  

  changeProps = (index) => {
    console.log(index);
    console.log(this.props.data[index].showDetail);
    this.props.data[index].children = !this.props.data[index].showDetail
    //row.showDetail = !row.showDetail
    /*
    this.setState((state, props) => ({
      showRow: !state.showRow 
    }));
    */
  }
  
  render() {
    return (
      <div className={this.props.classes.root}>
        <React.Fragment>
          <Paper className={this.props.classes.paper}>
            <Table className={this.props.classes.table}>
              <TableHead>
                <TableRow>
                { this.props.options.useDetail === true ? 
                  <TableCell className={this.props.classes.headerCell}></TableCell>
                  : null 
                }
                  <TableCell className={this.props.classes.headerCell}>클래스 명</TableCell>
                  <TableCell align="left" className={this.props.classes.headerCell}>타입</TableCell>
                  <TableCell align="left" className={this.props.classes.headerCell}>시간</TableCell>
                  <TableCell align="left" className={this.props.classes.headerCell}>트레이너</TableCell>
                  <TableCell align="left" className={this.props.classes.headerCell}>스팟</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.props.data.map((row, index) => (
                  <>
                    <TableRow key={row.name+"_"+index} className={this.props.classes.row}>
                      { this.props.options.useDetail === true ? 
                      <TableCell align="center" component="th" scope="row" className={`${this.props.classes.cell} ${this.props.classes.firstCell}`}>
                        <Button onClick={this.changeProps.bind(this, index)}>+</Button>
                      </TableCell>
                      : null
                      }
                      { this.props.options.useDetail === true ? 
                      <TableCell align="left" component="th" scope="row" className={`${this.props.classes.cell}`}>
                        {row.name}
                      </TableCell>
                      :
                      <TableCell align="left" component="th" scope="row" className={`${this.props.classes.cell} ${this.props.classes.firstCell}`}>
                        {row.name}
                      </TableCell>
                      }
                      <TableCell align="left" className={this.props.classes.cell}>{row.type}</TableCell>
                      <TableCell align="left" className={this.props.classes.cell}>{row.hours}</TableCell>
                      <TableCell align="left" className={this.props.classes.cell}>{row.trainer}</TableCell>
                      <TableCell align="left" className={`${this.props.classes.cell} ${this.props.classes.lastCell}`}>{row.spots}</TableCell>
                    </TableRow>
                    {/**
                    <TableRow className={row.showDetail ? this.props.classes["hidden"] : this.props.classes["show"]}>
                    */}
                    {
                      console.log("console", this.props.data[index].children)
                    }
                    <InsertRow data={this.props.data[index]} classes={this.props.classes} isShow={row.showDetail}/>
                  
                  </>
                ))}
              </TableBody>
            
            
            </Table>
            <div className={this.props.classes.pages}>
              <div className={this.props.classes.page}>1</div>
              <div className={this.props.classes.page}>2</div>
              <div className={this.props.classes.page}>3</div>
              <div className={this.props.classes.page}>4</div>
              <div className={this.props.classes.page}>5</div>
              <div className={this.props.classes.page}>6</div>
              <div className={this.props.classes.page}>7</div>
              <div className={this.props.classes.page}>8</div>
              <div className={this.props.classes.page}>9</div>
              <div className={this.props.classes.page}>10</div>
              <div className={this.props.classes.page}>></div>
            </div>
          </Paper>
        </React.Fragment>
      </div>
    )
  }
}

export default CustomTable;