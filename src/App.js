import React from "react";
import Button from "@material-ui/core/Button"
import axios from "axios";

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

class App extends React.Component{

  //리액트에서 전역 변수를 관리하는 방법
  constructor(props){
    super(props); //통틀어서 관리
    this.state = {
      count: 101,
      //isLoading: false,
      searchList: [],
    }; //전역변수는 this.state 안에서 관리
  }

  //화면이 뜨자마자 창이 뜨게 하는 방법(실행이 자동으로 되도록)
  //리액트 생명주기 찾아보기!
  componentDidMount(){
    //window.alert("mount?");
    this.click();
  }

  click1 = () => {
    //alert("click");
    //alert(this.state.count);
    this.setState((state) => {
      return { count: state.count + 1 };
    })
  };
  
  click2 = () => {
    this.setState((state) => {
      return { count: state.count - 1 };
    })
  };

  click = async () => {
    axios.get("https://dapi.kakao.com/v2/search/vclip?query=아이유", {
      headers: {
        Authorization: "KakaoAK a2a52d7aaf5f56437ed42d4e38cceaa8"
      },
    })
    .then((response) => {
      this.setState({
        searchList: response.data.documents,
      });
      console.log(this.state.searchList);
    });
  };

  //화면을 걸쳐 DOM을 만들어주는 내장 함수
  //<Card>에서 key값은 unique한 값이면 쓸수있다. >> 보통 겹치는걸 대비해서 index, i 등의 iterator를 넣어준다.
  render(){
    return(
      <div>
        <h1>Hello world!</h1>
        <h2>{this.state.count}</h2>
        <Button 
          onClick={this.click1}
          variant="contained" 
          color="primary" 
          size="large"
        >
          PLUS
        </Button>
        <Button 
          onClick={this.click2}
          variant="contained" 
          color="primary" 
          size="large"
        >
          MINUS
        </Button>
        <Button 
          onClick={this.click}
          variant="contained" 
          color="primary" 
          size="large"
        >
          Button
        </Button>
        {this.state.searchList.map((result, index) => {
          return(
              <Card key={index}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    image={result.thumbnail}
                    title={result.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                    <a href={result.url}>{result.title}</a>
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      {result.author}, {result.url}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Share
                  </Button>
                  <Button size="small" color="primary">
                    Learn More
                  </Button>
                </CardActions>
              </Card>
          )
        })}
      </div>
    );
  }
}

export default App;